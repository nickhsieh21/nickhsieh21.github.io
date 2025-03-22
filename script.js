// Select the 'About' section
const aboutSection = document.querySelector('#about');

// Create an intersection observer with a callback function
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'show' class when the About section comes into view
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Stop observing after it appears
    }
  });
}, {
  threshold: 0.5  // Trigger when 50% of the section is visible
});

// Start observing the About section
observer.observe(aboutSection);
