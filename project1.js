function searchStates() {
    var input, filter, select, options, option, i;
    input = document.getElementById("stateSearch");
    filter = input.value.toUpperCase();
    select = document.getElementById("stateSelect");
    options = select.options;
    for (i = 0; i < options.length; i++) {
        option = options[i];
        if (option.value.toUpperCase().indexOf(filter) > -1) {
            option.style.display = "";
        } else {
            option.style.display = "none";
        }
    }
}

function showStateSchemes() {
    var input = document.getElementById("stateSearch");
    var selectedState = input.value.trim();
    var stateSchemesDiv = document.getElementById("stateSchemes");
    var fertilizerRecommendations = "";

    // Clear previous content
    stateSchemesDiv.innerHTML = "";

    // Define fertilizer recommendations for the selected state
    switch (selectedState) {
        case "ASSAM":
        case "Assam":
        case "assam":
    
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Assam</h1>" +
            "<p><strong>Soils:</strong> Assam's soils vary from fertile alluvial soils in the Brahmaputra Valley to hill soils in the hilly regions. Alluvial soils are rich in organic matter and nutrients, while hill soils may have lower fertility levels.</p>" +
            "<p><strong>Major Crops:</strong> Assam grows a variety of crops including rice, tea, jute, oilseeds (like mustard), pulses (like black gram and green gram), fruits (like banana and pineapple), and spices (like ginger and turmeric).</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice (Paddy):</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Tea:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-150 kg/ha<br>" +
            "Phosphorus (P): 50-80 kg/ha<br>" +
            "Potassium (K): 50-80 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 80-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Jute:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Oilseeds (like Mustard):</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 30-50 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Pulses (like Black Gram and Green Gram):</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 30-50 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 20-40 kg/ha<br>" +
            "Phosphorus (P): 10-30 kg/ha<br>" +
            "Potassium (K): 10-30 kg/ha</p>" +
            "<p><strong>Fruit Crops (like Banana and Pineapple):</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 60-100 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>";
            break;
        // Add cases for other states with their respective recommendations
        case "Arunachal Pradesh":
        case "arunachal pradesh":
        case"ARUNACHAL PRADESH":
        case "ARUNACHALPRADESH":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Arunachal Pradesh</h1>" +
            "<p><strong>Soils:</strong> Andhra Pradesh's soils vary from red sandy soils in coastal areas to black soils (vertisols) in the inland regions. The state also has alluvial soils in river basins and delta regions.</p>" +
            "<p><strong>Major Crops:</strong> Andhra Pradesh is known for cultivating crops such as rice, maize, pulses (like pigeon pea and green gram), oilseeds (like groundnut and sunflower), cotton, sugarcane, fruits (like mango and banana), and vegetables.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice (Paddy):</strong></p>" +
            "<p>Red Sandy Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Red Sandy Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Pulses (like Pigeon Pea and Green Gram):</strong></p>" +
            "<p>Red Sandy Soils:<br>" +
            "Nitrogen (N): 20-40 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 30-50 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>";
            break;
        case "Bihar":
        case "BIHAR":
        case "bihar":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Bihar</h1>" +
            "<p><strong>Soils:</strong> Bihar's soils are diverse, including alluvial soils, red soils, and laterite soils. Alluvial soils are predominant in the plains and are rich in nutrients.</p>" +
            "<p><strong>Major Crops:</strong> Bihar cultivates a variety of crops such as rice, wheat, maize, pulses (like lentils and chickpeas), oilseeds (like mustard and soybean), sugarcane, and vegetables.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Wheat:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>";
            break;
        case "Chhattisgarh":
        case "CHATTISGARH":
        case "chattisgarh":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Chhattisgarh</h1>" +
            "<p><strong>Soils:</strong> Chhattisgarh's soils are predominantly red and lateritic soils, with some alluvial soils along the riverbanks. The red soils are acidic and low in fertility, while alluvial soils are more fertile.</p>" +
            "<p><strong>Major Crops:</strong> The major crops grown in Chhattisgarh include rice, maize, pulses, oilseeds, sugarcane, and various fruits and vegetables.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 50-70 kg/ha<br>" +
            "Potassium (K): 50-70 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 50-70 kg/ha<br>" +
            "Potassium (K): 50-70 kg/ha</p>" +
            "<p><strong>Pulses:</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>";
            break;
        case "Goa":
        case "goa":
        case "GOA":
            fertilizerRecommendations = "<h1>Goa</h1>" +
            "<p><strong>Soils:</strong> Goa's soils are predominantly laterite soils, which are acidic and low in fertility. The coastal plains have sandy soils.</p>" +
            "<p><strong>Major Crops:</strong> The major crops grown in Goa include paddy rice, cashew, coconut, areca nut, and vegetables.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Paddy Rice:</strong></p>" +
            "<p>Laterite Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p>Coastal Sandy Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Cashew and Coconut:</strong></p>" +
            "<p>Laterite Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Coastal Sandy Soils:<br>" +
            "Nitrogen (N): 30-50 kg/ha<br>" +
            "Phosphorus (P): 20-30 kg/ha<br>" +
            "Potassium (K): 20-30 kg/ha</p>" +
            "<p><strong>Vegetables:</strong></p>" +
            "<p>Laterite Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p>Coastal Sandy Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>";
            break;
        case "Gujarat":
        case"GUJARAT":
        case "gujarat":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Gujarat</h1>" +
            "<p><strong>Soils:</strong> Gujarat has diverse soil types including black, alluvial, red, and sandy soils. The black soils are predominant in the central and southern regions, while alluvial soils are found along river basins. Red and sandy soils are common in the eastern and western parts of the state.</p>" +
            "<p><strong>Major Crops:</strong> Gujarat is known for its cultivation of cotton, groundnut, pulses, oilseeds, cereals, fruits (such as mango and banana), and vegetables.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Cotton:</strong></p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Groundnut:</strong></p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Pulses:</strong></p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Cereals (e.g., Wheat, Millets):</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Fruits and Vegetables:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): Variable, depending on the crop<br>" +
            "Phosphorus (P): Variable, depending on the crop<br>" +
            "Potassium (K): Variable, depending on the crop</p>";
            break;
        case "Haryana":
        case "HARYANA":
        case "haryana":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Haryana</h1>" +
            "<p><strong>Soils:</strong> Haryana's soils consist of predominantly alluvial soils in the Yamuna-Ghaggar plain and sandy loam soils in the southwest. These soils are generally fertile and well-drained.</p>" +
            "<p><strong>Major Crops:</strong> Haryana is a major agricultural state producing crops such as wheat, rice, maize, millets, pulses, oilseeds, sugarcane, cotton, and vegetables.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Wheat:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Sandy Loam Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Millets:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Pulses:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Cotton:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>";
            break;
        case "Himachal Pradesh":
        case "HIMACHAL PRADESH":
        case "himachal pradesh":
        case "himachalpradesh":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Himachal Pradesh</h1>" +
            "<p><strong>Soils:</strong> Himachal Pradesh's soils vary from alluvial soils in the valleys to mountain soils in the hilly and mountainous regions. These soils are generally acidic to neutral in pH and have varying fertility levels.</p>" +
            "<p><strong>Major Crops:</strong> Himachal Pradesh is known for growing crops such as apples, pears, cherries, maize, wheat, barley, pulses, vegetables, and tea.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Apples:</strong></p>" +
            "<p>Mountain Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 80-100 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Wheat:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Tea:</strong></p>" +
            "<p>Mountain Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 50-80 kg/ha<br>" +
            "Potassium (K): 50-80 kg/ha</p>" +
            "<p><strong>Barley:</strong></p>" +
            "<p>Mountain Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Pulses:</strong></p>" +
            "<p>Mountain Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>";
            break;
        case "Jharkhand":
        case "JHARKHAND":
        case "jharkhand":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Jharkhand</h1>" +
            "<p><strong>Soils:</strong> Jharkhand's soils are diverse, ranging from red and lateritic soils to sandy and loamy soils. The state also has forest soils and alluvial soils in river valleys.</p>" +
            "<p><strong>Major Crops:</strong> Jharkhand cultivates crops such as rice, maize, pulses (like arhar and urad), oilseeds (like soybean and mustard), vegetables, fruits, and spices.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice (Paddy):</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 50-80 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p>Lateritic Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Pulses (like Arhar and Urad):</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 30-50 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Lateritic Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Oilseeds (like Soybean and Mustard):</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p>Lateritic Soils:<br>" +
            "Nitrogen (N): 50-70 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Fruits and Vegetables:</strong></p>" +
            "<p>Loamy Soils:<br>" +
            "Nitrogen (N): 80-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>";
            break;
        case "Karnataka":
        case "KARNATAKA":
        case "karnataka":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Karnataka</h1>" +
            "<p><strong>Soils:</strong> Karnataka's soils vary from red soils in the central and northern regions to lateritic and coastal alluvial soils in the coastal areas. The state also has black soils (vertisols) in parts of the Deccan Plateau.</p>" +
            "<p><strong>Major Crops:</strong> Karnataka is known for the cultivation of crops such as paddy (rice), sugarcane, millets (ragi and jowar), pulses (like tur dal), oilseeds (like groundnut and sunflower), spices (like black pepper and cardamom), and fruits (like mango and banana).</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice (Paddy):</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Lateritic Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 50-80 kg/ha<br>" +
            "Potassium (K): 50-80 kg/ha</p>" +
            "<p><strong>Sugarcane:</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 80-100 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 80-100 kg/ha<br>" +
            "Potassium (K): 100-120 kg/ha</p>" +
            "<p><strong>Millets (Ragi and Jowar):</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Lateritic Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Pulses (like Tur Dal):</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 30-50 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Lateritic Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Oilseeds (like Groundnut and Sunflower):</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Spices (like Black Pepper and Cardamom):</strong></p>" +
            "<p>Lateritic Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Fruits (like Mango and Banana):</strong></p>" +
            "<p>Coastal Alluvial Soils:<br>" +
            "Nitrogen (N): 100-150 kg/ha<br>" +
            "Phosphorus (P): 50-80 kg/ha<br>" +
            "Potassium (K): 50-80 kg/ha</p>";
            break;
        case "Kerala":
        case "KERALA":
        case "kerala":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Kerala</h1>" +
            "<p><strong>Soils:</strong> Kerala's soils are mainly laterite and alluvial. The laterite soils are acidic and low in fertility, while the alluvial soils are fertile.</p>" +
            "<p><strong>Major Crops:</strong> Kerala cultivates a variety of crops including rice, coconut, spices (like pepper, cardamom, and cinnamon), tea, coffee, rubber, and tropical fruits (like banana, mango, and pineapple).</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Laterite Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 50-80 kg/ha<br>" +
            "Potassium (K): 50-80 kg/ha</p>" +
            "<p><strong>Coconut:</strong></p>" +
            "<p>Laterite Soils:<br>" +
            "Nitrogen (N): 50-80 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 80-120 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 60-100 kg/ha<br>" +
            "Phosphorus (P): 40-80 kg/ha<br>" +
            "Potassium (K): 80-120 kg/ha</p>" +
            "<p><strong>Spices (Pepper, Cardamom, Cinnamon):</strong></p>" +
            "<p>Laterite Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Tea:</strong></p>" +
            "<p>Laterite Soils:<br>" +
            "Nitrogen (N): 80-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-150 kg/ha<br>" +
            "Phosphorus (P): 50-80 kg/ha<br>" +
            "Potassium (K): 50-80 kg/ha</p>";
            break;
        case "Madhya Pradesh":
        case "MADHYA PRADESH":
        case "madhya pradesh":
        case "madhyapradesh":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Madhya Pradesh</h1>" +
            "<p><strong>Soils:</strong> Madhya Pradesh has a diverse range of soils including black soils (vertisols), red soils, alluvial soils, and mixed soils. Black soils are predominant in the Malwa Plateau and parts of the Vindhya Range, while red and alluvial soils are found in other regions.</p>" +
            "<p><strong>Major Crops:</strong> Madhya Pradesh cultivates a wide variety of crops including wheat, rice, maize, soybean, pulses (like gram, lentil, and pigeon pea), oilseeds (like mustard and groundnut), sugarcane, cotton, and spices.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Wheat:</strong></p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Soybean:</strong></p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 30-50 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>";
            break;
        case "Andhra Pradesh":
        case "andhra pradesh":
        case "ANDHRA PRADESH":
        case "andhrapradesh":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Andhra Pradesh</h1>" +
            "<p><strong>Soils:</strong> Andhra Pradesh's soils vary from red sandy soils in coastal areas to black soils (vertisols) in the inland regions. The state also has alluvial soils in river basins and delta regions.</p>" +
            "<p><strong>Major Crops:</strong> Andhra Pradesh is known for cultivating crops such as rice, maize, pulses (like pigeon pea and green gram), oilseeds (like groundnut and sunflower), cotton, sugarcane, fruits (like mango and banana), and vegetables.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice (Paddy):</strong></p>" +
            "<p>Red Sandy Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Red Sandy Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Pulses (like Pigeon Pea and Green Gram):</strong></p>" +
            "<p>Red Sandy Soils:<br>" +
            "Nitrogen (N): 20-40 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 30-50 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>";
            break;
        case "Maharashtra":
        case "maharashtra":
        case "MAHARASHTRA":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Maharashtra</h1>" +
            "<p><strong>Soils:</strong> Maharashtra has diverse soil types including black soils (vertisols), red soils, alluvial soils, and lateritic soils. Black soils are predominant in regions like Vidarbha, while red and alluvial soils are found in other parts of the state.</p>" +
            "<p><strong>Major Crops:</strong> Maharashtra cultivates a variety of crops including sugarcane, cotton, rice, pulses (like pigeon pea and chickpea), oilseeds (like soybean and groundnut), fruits (like mango and grapes), vegetables, and spices.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Sugarcane:</strong></p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 100-150 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 100-150 kg/ha</p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 80-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 80-120 kg/ha</p>" +
            "<p><strong>Cotton:</strong></p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 60-80 kg/ha</p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>";
            break;
        case "Manipur":
        case "manipur":
        case "MANIPUR":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Manipur</h1>" +
            "<p><strong>Soils:</strong> Manipur's soils are predominantly characterized by red lateritic soils and hill soils. The fertility levels of these soils can vary, with hill soils generally having lower fertility.</p>" +
            "<p><strong>Major Crops:</strong> The major crops grown in Manipur include rice, maize, pulses (like lentils and peas), oilseeds (like mustard and soybean), fruits (like orange and pineapple), and vegetables.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Red Lateritic Soils:<br>" +
            "Nitrogen (N): 80-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 60-100 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Red Lateritic Soils:<br>" +
            "Nitrogen (N): 80-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 60-100 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Pulses (like Lentils and Peas):</strong></p>" +
            "<p>Red Lateritic Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 30-50 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Oilseeds (like Mustard and Soybean):</strong></p>" +
            "<p>Red Lateritic Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 30-50 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>";
            break;
        case "Meghalaya":
        case "MEGHALAYA":
        case "meghalaya":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Meghalaya</h1>" +
            "<p><strong>Soils:</strong> Meghalaya's soils are predominantly red lateritic soils and hill soils. These soils vary in fertility, with some regions having higher organic matter content.</p>" +
            "<p><strong>Major Crops:</strong> Meghalaya grows a variety of crops including rice, maize, potatoes, fruits (like citrus and pineapple), vegetables, and spices (like ginger and turmeric).</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Red Lateritic Soils:<br>" +
            "Nitrogen (N): 80-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 60-100 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Red Lateritic Soils:<br>" +
            "Nitrogen (N): 80-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 60-100 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Potatoes:</strong></p>" +
            "<p>Red Lateritic Soils:<br>" +
            "Nitrogen (N): 80-120 kg/ha<br>" +
            "Phosphorus (P): 50-80 kg/ha<br>" +
            "Potassium (K): 60-100 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 60-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 50-80 kg/ha</p>" +
            "<p><strong>Fruits (like Citrus and Pineapple):</strong></p>" +
            "<p>Red Lateritic Soils:<br>" +
            "Nitrogen (N): 60-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 40-80 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>";
            break;
        case "Mizoram":
        case "mizoram":
        case "MIZORAM":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Mizoram</h1>" +
            "<p><strong>Soils:</strong> Mizoram's soils vary from fertile alluvial soils in the valleys to hill soils in the hilly regions. Alluvial soils are rich in organic matter and nutrients, while hill soils may have lower fertility levels.</p>" +
            "<p><strong>Major Crops:</strong> Mizoram grows a variety of crops including rice, maize, pulses, oilseeds, fruits (like banana and pineapple), and spices (like ginger and turmeric).</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Pulses:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 30-50 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Fruits (like Banana and Pineapple):</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>";
            break;
        case "Nagaland":
        case "nagaland":
        case "NAGALAND":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Nagaland</h1>" +
            "<p><strong>Soils:</strong> Nagaland's soils are diverse, including alluvial soils in the river valleys, sandy soils in some areas, and hill soils in the mountainous regions.</p>" +
            "<p><strong>Major Crops:</strong> Nagaland grows a variety of crops including rice, maize, pulses, oilseeds, fruits (like orange and pineapple), and vegetables.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Pulses:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 30-50 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Fruits (like Orange and Pineapple):</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Hill Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>";
            break;
        case "NewDelhi":
        case "NEWDELHI":
        case "newdelhi":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for NewDelhi</h1>" +
            "<p><strong>Soils:</strong> Soils in the NCR region vary from alluvial soils in parts of Haryana and Uttar Pradesh to sandy soils in Rajasthan.</p>" +
            "<p><strong>Major Crops:</strong> Common crops in the NCR region include wheat, rice, maize, vegetables, fruits, and pulses.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Wheat:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Sandy Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Sandy Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Vegetables:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): Variable depending on the crop type<br>" +
            "Phosphorus (P): Variable depending on the crop type<br>" +
            "Potassium (K): Variable depending on the crop type</p>" +
            "<p>Sandy Soils:<br>" +
            "Nitrogen (N): Variable depending on the crop type<br>" +
            "Phosphorus (P): Variable depending on the crop type<br>" +
            "Potassium (K): Variable depending on the crop type</p>";
            break;
        case "Odisha":
        case "ODISHA":
        case "odisha":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Odisha</h1>" +
            "<p><strong>Soils:</strong> Odisha's soils vary from rich alluvial soils in the coastal plains to lateritic soils and red soils in the interior regions. Alluvial soils are generally fertile, while lateritic and red soils may be low in fertility and organic matter.</p>" +
            "<p><strong>Major Crops:</strong> Odisha grows a variety of crops including rice, pulses (like pigeon pea and black gram), oilseeds (like groundnut and mustard), sugarcane, spices (like turmeric and ginger), and fruits (like mango and banana).</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Lateritic/Red Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Pulses (like Pigeon Pea and Black Gram):</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Lateritic/Red Soils:<br>" +
            "Nitrogen (N): 30-50 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Oilseeds (like Groundnut and Mustard):</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p>Lateritic/Red Soils:<br>" +
            "Nitrogen (N): 30-50 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Sugarcane:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 60-80 kg/ha</p>" +
            "<p>Lateritic/Red Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 50-70 kg/ha<br>" +
            "Potassium (K): 50-70 kg/ha</p>" +
            "<p>These recommendations serve as general guidelines and should be adjusted based on soil tests and local agronomic expertise.</p>";
            break;
        case "Punjab":
        case "PUNJAB":
        case "punjab":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Punjab</h1>" +
            "<p><strong>Soils:</strong> Punjab's soils are predominantly alluvial, known for their high fertility and good drainage. They are well-suited for intensive agriculture.</p>" +
            "<p><strong>Major Crops:</strong> Punjab is known for the cultivation of wheat, rice, maize, cotton, and pulses like chickpea and pigeon pea.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Wheat:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Cotton:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Pulses (Chickpea and Pigeon Pea):</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>These recommendations are general guidelines and should be adjusted based on soil tests and specific crop requirements.</p>";
            break;
        case "Rajasthan":
        case "rajasthan":
        case "RAJASTHAN":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Rajasthan</h1>" +
            "<p><strong>Soils:</strong> Rajasthan's soils vary from sandy desert soils to fertile alluvial soils in the plains. They are often low in organic matter and nutrients, requiring careful management.</p>" +
            "<p><strong>Major Crops:</strong> Rajasthan cultivates a variety of crops including wheat, barley, mustard, pulses (like chickpea and lentil), millets (like pearl millet), and oilseeds.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Wheat:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Barley:</strong></p>" +
            "<p>Sandy Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Mustard:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Pulses (Chickpea and Lentil):</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 20-40 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Millets (Pearl Millet):</strong></p>" +
            "<p>Sandy Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>These recommendations serve as general guidelines and should be adjusted based on soil tests and specific crop requirements in different regions of Rajasthan.</p>";
            break;
        case "Sikkim":
        case "SIKKIM":
        case "sikkim":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Sikkim</h1>" +
            "<p><strong>Soils:</strong> Sikkim's soils vary from fertile alluvial soils in the valleys to acidic soils in the hilly regions. They are generally rich in organic matter but may lack certain nutrients.</p>" +
            "<p><strong>Major Crops:</strong> Sikkim cultivates a variety of crops including rice, maize, millets (like finger millet), cardamom, fruits (like oranges and apples), and vegetables.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Acidic Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 30-50 kg/ha<br>" +
            "Potassium (K): 30-50 kg/ha</p>" +
            "<p>Acidic Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Millets (Finger Millet):</strong></p>" +
            "<p>Acidic Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Cardamom:</strong></p>" +
            "<p>Organic matter-rich Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Fruits (Oranges and Apples):</strong></p>" +
            "<p>Organic matter-rich Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Vegetables:</strong></p>" +
            "<p>Organic matter-rich Soils:<br>" +
            "Nitrogen (N): 60-80 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>These recommendations serve as general guidelines and should be adjusted based on soil tests and specific crop requirements in different regions of Sikkim.</p>";
            break;
        case "Tamil Nadu":
        case "TAMIL NADU":
        case "tamilnadu":
        case "tamil nadu":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Tamil Nadu</h1>" +
            "<p><strong>Soils:</strong> Tamil Nadu has diverse soil types including red soils, black soils, alluvial soils, and lateritic soils. The fertility and nutrient content of these soils vary across different regions.</p>" +
            "<p><strong>Major Crops:</strong> Tamil Nadu cultivates a wide range of crops including rice, sugarcane, cotton, pulses (like pigeon pea and black gram), millets (like pearl millet), spices (like turmeric and chili), and fruits (like mango and banana).</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice:</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Sugarcane:</strong></p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 80-100 kg/ha</p>" +
            "<p><strong>Cotton:</strong></p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 60-80 kg/ha</p>" +
            "<p><strong>Pulses (like Pigeon Pea and Black Gram):</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 20-40 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Millets (like Pearl Millet):</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Spices (like Turmeric and Chili):</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Fruits (like Mango and Banana):</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 60-80 kg/ha</p>" +
            "<p>These recommendations are general guidelines and should be adjusted based on soil tests and specific crop requirements in different regions of Tamil Nadu.</p>";
            break;
        case "Telangana":
        case "telangana":
        case "TELANGANA":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Telangana</h1>" +
            "<p><strong>Soils:</strong> Telangana's soils are predominantly composed of red soils and black soils. Red soils are well-drained but have low fertility, while black soils (vertisols) have high clay content and are known for their moisture retention capacity.</p>" +
            "<p><strong>Major Crops:</strong> Telangana cultivates a variety of crops including rice, cotton, maize, soybean, groundnut, pigeon pea (red gram), and various horticultural crops such as mango and banana.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice (Paddy):</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 40-50 kg/ha<br>" +
            "Potassium (K): 40-50 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-50 kg/ha<br>" +
            "Potassium (K): 40-50 kg/ha</p>" +
            "<p><strong>Cotton:</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 60-80 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Maize:</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 80-100 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Soybean:</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 20-40 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Groundnut:</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 20-40 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Pigeon Pea (Red Gram):</strong></p>" +
            "<p>Red Soils:<br>" +
            "Nitrogen (N): 20-40 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>Black Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p>These recommendations are general guidelines and should be adjusted based on soil tests and specific crop requirements in different regions of Telangana.</p>";
            break;
        case "Tripura":
        case "TRIPURA":
        case "tripura":
            fertilizerRecommendations = `<h1>Fertilizer Recommendations for Tripura</h1><p><strong>Soils:</strong> Tripura's soils vary from fertile alluvial soils in the plains to hill soils in the hilly regions. Alluvial soils are rich in organic matter and nutrients, while hill soils may have lower fertility levels.</p><p><strong>Major Crops:</strong> Tripura grows a variety of crops including rice, jute, tea, rubber, pineapple, and various spices.</p><h2>Fertilizer Recommendations:</h2><p><strong>Rice (Paddy):</strong></p><p>Alluvial Soils:<br>Nitrogen (N): 120-150 kg/ha<br>Phosphorus (P): 40-60 kg/ha<br>Potassium (K): 40-60 kg/ha</p><p>Hill Soils:<br>Nitrogen (N): 100-120 kg/ha<br>Phosphorus (P): 30-50 kg/ha<br>Potassium (K): 30-50 kg/ha</p><p><strong>Jute:</strong></p><p>Alluvial Soils:<br>Nitrogen (N): 60-80 kg/ha<br>Phosphorus (P): 40-60 kg/ha<br>Potassium (K): 40-60 kg/ha</p><p>Hill Soils:<br>Nitrogen (N): 40-60 kg/ha<br>Phosphorus (P): 30-50 kg/ha<br>Potassium (K): 30-50 kg/ha</p><p><strong>Tea:</strong></p><p>Alluvial Soils:<br>Nitrogen (N): 100-150 kg/ha<br>Phosphorus (P): 50-80 kg/ha<br>Potassium (K): 50-80 kg/ha</p><p>Hill Soils:<br>Nitrogen (N): 80-120 kg/ha<br>Phosphorus (P): 40-60 kg/ha<br>Potassium (K): 40-60 kg/ha</p><p>These recommendations are general guidelines and should be adjusted based on soil tests and specific crop requirements in different regions of Tripura.</p>`;
            break;
        case "Uttarakhand":
        case "UTTARAKHAND":
        case "uttarakhand":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Uttarakhand</h1>" +
    "<p><strong>Soils:</strong> Uttarakhand's soils vary significantly due to its diverse terrain, including alluvial soils in the plains, as well as acidic soils and mountain soils in the hilly and Himalayan regions.</p>" +
    "<p><strong>Major Crops:</strong> Uttarakhand cultivates a variety of crops such as rice, wheat, maize, millets, pulses, oilseeds, fruits, and vegetables, with agriculture being largely rain-fed.</p>" +
    "<h2>Fertilizer Recommendations:</h2>" +
    "<table>" +
    "<tr>" +
    "<th>Crop</th>" +
    "<th>Nitrogen (N) kg/ha</th>" +
    "<th>Phosphorus (P) kg/ha</th>" +
    "<th>Potassium (K) kg/ha</th>" +
    "</tr>" +
    "<tr>" +
    "<td>Rice</td>" +
    "<td>100-120</td>" +
    "<td>40-60</td>" +
    "<td>40-60</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Wheat</td>" +
    "<td>80-120</td>" +
    "<td>40-60</td>" +
    "<td>40-60</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Maize</td>" +
    "<td>100-150</td>" +
    "<td>40-60</td>" +
    "<td>40-60</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Fruits and Vegetables</td>" +
    "<td colspan='3'>Balanced fertilization with organic and inorganic sources is recommended.</td>" +
    "</tr>" +
    "</table>" +
    "<p>It's essential for farmers in Uttarakhand to adopt sustainable agricultural practices, including soil conservation measures, organic farming, and efficient water management, to ensure long-term productivity and environmental sustainability.</p>";

            break;
        case "Uttar Pradesh":
        case "UTTAR PRADESH":
        case "uttarpradesh":
        case "UTTARPRADESH":
        case "UttarPradesh":
            fertilizerRecommendations = "<h1>Fertilizer Recommendations for Uttar Pradesh</h1>" +
            "<p><strong>Major Crops:</strong> Uttar Pradesh cultivates a variety of crops including rice (paddy), wheat, sugarcane, pulses, and oilseeds.</p>" +
            "<h2>Fertilizer Recommendations:</h2>" +
            "<p><strong>Rice (Paddy):</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 120-150 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 40-60 kg/ha</p>" +
            "<p><strong>Wheat:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-120 kg/ha<br>" +
            "Phosphorus (P): 40-60 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Sugarcane:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 100-150 kg/ha<br>" +
            "Phosphorus (P): 40-80 kg/ha<br>" +
            "Potassium (K): 80-120 kg/ha</p>" +
            "<p><strong>Pulses:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 20-40 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>" +
            "<p><strong>Oilseeds:</strong></p>" +
            "<p>Alluvial Soils:<br>" +
            "Nitrogen (N): 40-60 kg/ha<br>" +
            "Phosphorus (P): 20-40 kg/ha<br>" +
            "Potassium (K): 20-40 kg/ha</p>";
            break;
        default:
            fertilizerRecommendations = "<p>No fertilizer recommendations available for the selected state OR check the spelling of the word.</p>";
            break;
    }

    // Display fertilizer recommendations
    stateSchemesDiv.innerHTML = fertilizerRecommendations;
}

// Add event listener for "Enter" key press on the search input
document.getElementById("stateSearch").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        showStateSchemes(); // Call showStateSchemes function if Enter key is pressed
    }
});
