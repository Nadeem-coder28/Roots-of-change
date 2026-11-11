document.getElementById('cropForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    var personName = document.getElementById('personName').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var cropName = document.getElementById('cropName').value;
    var estimatedPrice = document.getElementById('estimatedPrice').value;
    var quantity = document.getElementById('quantity').value;

    // Data validation
    var nameRegex = /^[a-zA-Z\s]+$/;
    var mobileRegex = /^\d{10}$/;

    if (!nameRegex.test(personName)) {
        alert("Please enter a valid name.");
        return;
    }

    if (!mobileRegex.test(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Create crop object
    var crop = {
        personName: personName,
        mobileNumber: mobileNumber,
        cropName: cropName,
        estimatedPrice: estimatedPrice,
        quantity: quantity
    };

    // Save crop details to local storage
    saveCropDetails(crop);

    // Display all crop details
    displayAllCropDetails();

    // Reset form fields
    document.getElementById('cropForm').reset();
});

// Function to save crop details to local storage
function saveCropDetails(crop) {
    // Get existing crops from localStorage or initialize as empty array
    var crops = JSON.parse(localStorage.getItem('crops')) || [];

    // Add new crop to crops array
    crops.push(crop);

    // Save updated crops array to localStorage
    localStorage.setItem('crops', JSON.stringify(crops));
}

// Function to display all crop details
function displayAllCropDetails() {
    var crops = JSON.parse(localStorage.getItem('crops')) || [];

    var details = '';
    crops.forEach(function(crop, index) {
        details += `
            <div class="crop-details">
                <h3>Crop ${index + 1}</h3>
                <p><strong>Person Name:</strong> ${crop.personName}</p>
                <p><strong>Mobile Number:</strong> ${crop.mobileNumber}</p>
                <p><strong>Crop Name:</strong> ${crop.cropName}</p>
                <p><strong>Estimated Price (per unit):</strong> ${crop.estimatedPrice}</p>
                <p><strong>Quantity:</strong> ${crop.quantity}</p>
            </div>
        `;
    });

    document.getElementById('displayDetails').innerHTML = details;
}

// Display all crop details initially
displayAllCropDetails();
