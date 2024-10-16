document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const formData = {
        name: document.getElementById('name').value,
        regNumber: document.getElementById('regNumber').value,
        department: document.getElementById('department').value,
        school: document.getElementById('school').value,
        courseCode: document.getElementById('courseCode').value,
        faculty: document.getElementById('faculty').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        location: document.getElementById('location').value,
        bio: document.getElementById('bio').value,
    };

    const apiKey = 'AIzaSyDXHI62I8Ys_DBxBTayMJ0yDAnkqTQsuQE';
    const spreadsheetId = '10JJYfBf_w89DPhcrOFV5Dom11HrA15FbUdvaaVjhIbc';
    const sheetName = 'CIT306'; // Change to your sheet name if needed

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}!A1:J1?valueInputOption=USER_ENTERED&key=${apiKey}`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            values: [Object.values(formData)],
        }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});



