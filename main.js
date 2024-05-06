const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
}); 

// Select the heading element
const myHeading = document.getElementById('myHeading');

// Function to add fade-in animation
function fadeIn(element) {
  let opacity = 0;
  const interval = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
    }
  }, 100);
}

// Call the fadeIn function when the page loads
/* window.addEventListener('load', () => {
  fadeIn(myHeading);
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        spans.forEach((span, index) => {
            const percentage = percentages[index];
            if (entry.isIntersecting) {
                span.classList.add('animate');
                percentage.classList.add('animate');
            } else {
                span.classList.remove('animate');
                percentage.classList.remove('animate');
            }
        });
    });
}); */

/* const skillContainer = document.querySelector('.skills-container');
const spans = document.querySelectorAll('.bar span');
const percentages = document.querySelectorAll('.percentage');

window.addEventListener('load', () => {
    updatePercentagePositions();
});

function updatePercentagePositions() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const barWidth = bar.clientWidth;
        const percentage = bar.nextElementSibling;
        const widthPercentage = parseFloat(percentage.textContent) / 100;
        percentage.style.left = `${barWidth * widthPercentage - 12.5}px`;
    });
} */

