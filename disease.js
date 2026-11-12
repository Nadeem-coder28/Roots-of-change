const MODEL_URL = 'model/plant_disease_model.onnx';
const CLASSES_URL = 'model/classes.json';
const SAMPLES_URL = 'samples/samples.json';
const ORT_DIST = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.20.1/dist/';
const SIZE = 224;
const MEAN = [0.485, 0.456, 0.406];
const STD = [0.229, 0.224, 0.225];
const LOW_CONFIDENCE = 0.5;

const fileInput = document.getElementById('fileInput');
const dropZone = document.getElementById('dropZone');
const dropText = document.getElementById('dropText');
const preview = document.getElementById('preview');
const detectBtn = document.getElementById('detectBtn');
const clearBtn = document.getElementById('clearBtn');
const statusEl = document.getElementById('status');
const resultEl = document.getElementById('result');
const resultMain = document.getElementById('resultMain');
const resultBadge = document.getElementById('resultBadge');
const resultCrop = document.getElementById('resultCrop');
const resultCondition = document.getElementById('resultCondition');
const resultConfidence = document.getElementById('resultConfidence');
const resultAdvice = document.getElementById('resultAdvice');
const topList = document.getElementById('topList');
const sampleList = document.getElementById('sampleList');

let session = null;
let classes = [];
let imageReady = false;

function setStatus(text, type) {
    statusEl.textContent = text;
    statusEl.className = 'status ' + type;
}

function updateButtons() {
    detectBtn.disabled = !(session && imageReady);
    clearBtn.disabled = !imageReady;
}

function cleanText(text) {
    return text.replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatLabel(label) {
    const parts = label.split('___');
    let crop = cleanText(parts[0]).replace(/\s*\(.*?\)\s*/g, ' ').trim();
    if (/pepper/i.test(crop)) {
        crop = 'Bell pepper';
    }
    crop = capitalize(crop.replace(/,/g, '').trim());
    const condition = cleanText(parts[1] || '');
    const healthy = /healthy/i.test(condition);
    return {
        crop: crop,
        condition: healthy ? 'Healthy' : capitalize(condition),
        healthy: healthy
    };
}

async function loadModel() {
    setStatus('Loading the AI model...', 'loading');
    try {
        ort.env.wasm.wasmPaths = ORT_DIST;
        ort.env.wasm.numThreads = 1;
        const response = await fetch(CLASSES_URL);
        classes = await response.json();
        session = await ort.InferenceSession.create(MODEL_URL, { executionProviders: ['wasm'] });
        setStatus(imageReady ? 'Model ready. Click "Detect disease".' : 'Model ready. Upload a leaf photo or try a sample.', 'ready');
    } catch (error) {
        console.error(error);
        setStatus('The AI model could not be loaded. Please check your internet connection and refresh the page.', 'error');
    }
    updateButtons();
}

function showImage(src) {
    resultEl.hidden = true;
    imageReady = false;
    updateButtons();
    preview.onload = function () {
        imageReady = true;
        preview.hidden = false;
        dropText.hidden = true;
        if (session) {
            setStatus('Photo loaded. Click "Detect disease".', 'ready');
        }
        updateButtons();
    };
    preview.onerror = function () {
        setStatus('This file could not be opened as an image. Please choose a JPG or PNG photo.', 'error');
    };
    preview.removeAttribute('src');
    preview.src = src;
}

function handleFile(file) {
    if (!file || !file.type.startsWith('image/')) {
        setStatus('Please choose an image file (JPG or PNG).', 'error');
        return;
    }
    if (preview.src && preview.src.startsWith('blob:')) {
        URL.revokeObjectURL(preview.src);
    }
    showImage(URL.createObjectURL(file));
}

function imageToTensor(img) {
    const canvas = document.createElement('canvas');
    canvas.width = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, SIZE, SIZE);
    const pixels = ctx.getImageData(0, 0, SIZE, SIZE).data;
    const area = SIZE * SIZE;
    const data = new Float32Array(3 * area);
    for (let i = 0; i < area; i++) {
        for (let c = 0; c < 3; c++) {
            data[c * area + i] = (pixels[i * 4 + c] / 255 - MEAN[c]) / STD[c];
        }
    }
    return new ort.Tensor('float32', data, [1, 3, SIZE, SIZE]);
}

function softmax(values) {
    const max = Math.max.apply(null, values);
    const exps = values.map(function (v) { return Math.exp(v - max); });
    const sum = exps.reduce(function (a, b) { return a + b; }, 0);
    return exps.map(function (v) { return v / sum; });
}

function percent(p) {
    return (p * 100).toFixed(1) + '%';
}

function renderResult(ranked) {
    const best = formatLabel(classes[ranked[0].index]);
    const confidence = ranked[0].prob;
    resultMain.classList.toggle('diseased', !best.healthy);
    resultBadge.textContent = best.healthy ? 'Healthy' : 'Disease detected';
    resultCrop.textContent = best.crop;
    resultCondition.textContent = best.condition;
    resultConfidence.textContent = 'Confidence: ' + percent(confidence);

    if (confidence < LOW_CONFIDENCE) {
        resultAdvice.className = 'advice warning';
        resultAdvice.textContent = 'The model is not sure about this photo. Try a clearer photo of a single leaf on a plain background, and check the other predictions below.';
    } else if (best.healthy) {
        resultAdvice.className = 'advice';
        resultAdvice.textContent = 'No disease was detected on this leaf. Keep checking your plants regularly, especially after rain or humid weather.';
    } else {
        resultAdvice.className = 'advice';
        resultAdvice.textContent = 'Signs of ' + best.condition.toLowerCase() + ' were detected. Remove badly affected leaves, avoid spreading the disease with tools or hands, and ask a local agricultural expert or Krishi Vigyan Kendra about the right treatment.';
    }

    topList.innerHTML = '';
    ranked.forEach(function (item) {
        const info = formatLabel(classes[item.index]);
        const li = document.createElement('li');
        const row = document.createElement('div');
        row.className = 'top-row';
        const name = document.createElement('span');
        name.textContent = info.crop + ' - ' + info.condition;
        const value = document.createElement('span');
        value.textContent = percent(item.prob);
        row.appendChild(name);
        row.appendChild(value);
        const bar = document.createElement('div');
        bar.className = 'bar';
        const fill = document.createElement('span');
        fill.style.width = Math.max(1, item.prob * 100) + '%';
        bar.appendChild(fill);
        li.appendChild(row);
        li.appendChild(bar);
        topList.appendChild(li);
    });
    resultEl.hidden = false;
}

async function detect() {
    if (!session || !imageReady) {
        return;
    }
    detectBtn.disabled = true;
    setStatus('Analysing the leaf...', 'working');
    try {
        const input = imageToTensor(preview);
        const feeds = {};
        feeds[session.inputNames[0]] = input;
        const output = await session.run(feeds);
        const logits = Array.from(output[session.outputNames[0]].data);
        const probs = softmax(logits);
        const ranked = probs
            .map(function (prob, index) { return { prob: prob, index: index }; })
            .sort(function (a, b) { return b.prob - a.prob; })
            .slice(0, 3);
        renderResult(ranked);
        setStatus('Done. You can upload another photo at any time.', 'ready');
    } catch (error) {
        console.error(error);
        setStatus('Something went wrong while analysing the photo. Please try another image.', 'error');
    }
    updateButtons();
}

function clearAll() {
    if (preview.src && preview.src.startsWith('blob:')) {
        URL.revokeObjectURL(preview.src);
    }
    preview.removeAttribute('src');
    preview.hidden = true;
    dropText.hidden = false;
    fileInput.value = '';
    imageReady = false;
    resultEl.hidden = true;
    setStatus(session ? 'Model ready. Upload a leaf photo or try a sample.' : 'Loading the AI model...', session ? 'ready' : 'loading');
    updateButtons();
}

async function loadSamples() {
    try {
        const response = await fetch(SAMPLES_URL);
        const samples = await response.json();
        samples.forEach(function (sample) {
            const info = formatLabel(sample.label);
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'sample';
            const img = document.createElement('img');
            img.src = 'samples/' + sample.file;
            img.alt = info.crop + ' - ' + info.condition;
            const caption = document.createElement('span');
            caption.textContent = info.crop + ' - ' + info.condition;
            button.appendChild(img);
            button.appendChild(caption);
            button.addEventListener('click', function () {
                fileInput.value = '';
                showImage('samples/' + sample.file);
            });
            sampleList.appendChild(button);
        });
    } catch (error) {
        console.error(error);
    }
}

fileInput.addEventListener('change', function () {
    handleFile(fileInput.files[0]);
});

['dragenter', 'dragover'].forEach(function (name) {
    dropZone.addEventListener(name, function (event) {
        event.preventDefault();
        dropZone.classList.add('dragover');
    });
});

['dragleave', 'drop'].forEach(function (name) {
    dropZone.addEventListener(name, function (event) {
        event.preventDefault();
        dropZone.classList.remove('dragover');
    });
});

dropZone.addEventListener('drop', function (event) {
    handleFile(event.dataTransfer.files[0]);
});

detectBtn.addEventListener('click', detect);
clearBtn.addEventListener('click', clearAll);

loadSamples();
loadModel();
