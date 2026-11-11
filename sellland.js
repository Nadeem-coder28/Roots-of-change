document.getElementById('landForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form values
    var passbookNumber = document.getElementById('passbookNumber').value;
    var personName = document.getElementById('personName').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var location = document.getElementById('location').value;
    var landType = document.getElementById('landType').value;
    var acres = document.getElementById('acres').value;
  
    // Data validation
    var nameRegex = /^[a-zA-Z\s]+$/;
    var mobileRegex = /^\d{10}$/;
    var integerRegex = /^\d+$/;
  
    if (!nameRegex.test(personName)) {
        alert("Please enter a valid name.");
        return;
    }
  
    if (!mobileRegex.test(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }
  
    if (!integerRegex.test(acres)) {
        alert("Please enter a valid integer for Acres.");
        return;
    }
  
    // Create land object
    var land = {
        passbookNumber: passbookNumber,
        personName: personName,
        mobileNumber: mobileNumber,
        location: location,
        landType: landType,
        acres: acres
    };
  
    // Save land details to local storage
    saveLandDetails(land);
  
    // Display all land details
    displayAllLandDetails();
  });
  
  // Function to save land details to local storage
  function saveLandDetails(land) {
    // Get existing lands from localStorage or initialize as empty array
    var lands = JSON.parse(localStorage.getItem('lands')) || [];
  
    // Add new land to lands array
    lands.push(land);
  
    // Save updated lands array to localStorage
    localStorage.setItem('lands', JSON.stringify(lands));
  }
  
  // Function to display all land details
  // Function to display all land details
  function displayAllLandDetails() {
    var lands = JSON.parse(localStorage.getItem('lands')) || [];
  
    var details = '';
    lands.forEach(function(land, index) {
        details += `
            <div class="land-details">
                <h3>Land ${index + 1}</h3>
                <p><strong>Passbook Number:</strong> ${land.passbookNumber}</p>
                <p><strong>Person Name:</strong> ${land.personName}</p>
                <p><strong>Mobile Number:</strong> ${land.mobileNumber}</p>
                <p><strong>Location:</strong> ${land.location}</p>
                <p><strong>Type of Land:</strong> ${land.landType}</p>
                <p><strong>Number of Acres:</strong> ${land.acres}</p>
            </div>
        `;
    });
  
    document.getElementById('displayDetails').innerHTML = details;
  }
  
  // Display all land details initially
  displayAllLandDetails();
  
  
  // After saving and displaying the land details, reset the form fields
  document.getElementById('landForm').reset();
  