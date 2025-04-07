// Example JavaScript code for interaction (optional)
document.querySelectorAll('.column').forEach(column => {
    column.addEventListener('click', () => {
        alert(`You clicked on ${column.querySelector('h2').innerText}`);
    });
});






function handleSubmit(event) {
    event.preventDefault();  // Prevent the default form submission

    // Clear previous messages
    document.getElementById('message').textContent = '';
    document.getElementById('error').textContent = '';

    // Show the loading spinner
    document.getElementById('loading').style.display = 'block';

    // Get the form data
    const Name = document.getElementById('Name').value;
    const Email = document.getElementById('Email').value;
    const UID = document.getElementById('UID').value;
    const Department = document.getElementById('Department').value;
    const Title = document.getElementById('Title').value;
    const Author = document.getElementById('Author').value;
    const Publisher = document.getElementById('Publisher').value;
    const Edition = document.getElementById('Edition').value;
    const Cost = document.getElementById('Cost').value;
    const Reason = document.getElementById('Reason').value;

    // Replace with your actual Google Apps Script Web App URL
    const scriptUrl = "https://script.google.com/macros/s/AKfycbw2jMpVGeg_GBE7b00Zk8gA3UqQYSsr15E-zngnagjJ4y3cvXrjdbw9oItSk4XP1Kz98g/exec";

    // Create a FormData object
    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Email", Email);
    formData.append("UID", UID);
    formData.append("Department", Department);
    formData.append("Title", Title);
    formData.append("Author", Author);
    formData.append("Publisher", Publisher);
    formData.append("Edition", Edition);
    formData.append("Cost", Cost);
    formData.append("Reason", Reason);

    // Send the form data to the Google Apps Script via POST
    fetch(scriptUrl, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Hide the loading spinner and show the success message
        document.getElementById('loading').style.display = 'none';
        document.getElementById('message').textContent = `Thank you for recommending "${Title}" by ${Author}. We will contact you at ${Email}.`;
        document.getElementById('bookForm').reset(); // Reset the form after submission
    })
    .catch(error => {
        // Hide the loading spinner and show the error message
        document.getElementById('loading').style.display = 'none';
        document.getElementById('error').textContent = "There was an error with the form submission. Please try again.";
    });
}
