let links = document.querySelectorAll(".links a");
let bodyId = document.querySelector("body").id;

for (let link of links) {
    // Remove 'active' class from all links
    link.classList.remove('active');

    // Add 'active' class to the link that matches the body ID
    if (link.dataset.active && link.dataset.active === bodyId) {
        link.classList.add('active');
    }

    // Add click event listener to update the active state dynamically
    link.addEventListener('click', function () {
        for (let otherLink of links) {
            otherLink.classList.remove('active');
        }
        this.classList.add('active');
    });

    function showThankYouMessage(event) {
        event.preventDefault(); // Prevent the default form submission
        const form = document.querySelector('.contactus-form');
        const thankYouMessage = document.getElementById('thank-you-message');

        // Hide the form and show the thank-you message
        form.style.display = 'none';
        thankYouMessage.style.display = 'block';
    }
}