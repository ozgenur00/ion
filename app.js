document.addEventListener('DOMContentLoaded', (event) => {
    const scrollContainer = document.querySelector('.video-scroll-container');
    const leftArrow = document.querySelector('.slide-arrow.left');
    const rightArrow = document.querySelector('.slide-arrow.right');
  
    leftArrow.addEventListener('click', () => {
      // Scroll left by half the container's width
      scrollContainer.scrollLeft -= scrollContainer.offsetWidth / 2;
    });
  
    rightArrow.addEventListener('click', () => {
      // Scroll right by half the container's width
      scrollContainer.scrollLeft += scrollContainer.offsetWidth / 2;
    });
  });
  

  document.getElementById('about-us-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var element = document.getElementById('who-we-are');
    element.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the element
  });

  document.getElementById('how-to-use-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var element = document.getElementById('how-to-use');
    element.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the element
  });

  document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var element = document.getElementById('contact');
    element.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the element
  });
  document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector(".video-scroll-container");
    document.querySelector(".prev-arrow").addEventListener("click", function() {
      scrollContainer.scrollBy({ left: -300, behavior: 'smooth' }); // Scrolls left
    });
    document.querySelector(".next-arrow").addEventListener("click", function() {
      scrollContainer.scrollBy({ left: 300, behavior: 'smooth' }); // Scrolls right
    });
  });