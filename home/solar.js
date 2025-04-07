//solar system code java
// Change the Sun's color every 5 seconds
let sun = document.querySelector('.sun');

setInterval(function () {
    sun.style.backgroundColor = getRandomColor();
    sun.style.boxShadow = `0 0 50px ${getRandomColor()}`;
}, 5000);

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
