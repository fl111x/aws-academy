// style/script.js

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.content-container');

  const observerOptions = {
    root: null, 
    threshold: 0.5, 
    rootMargin: '0px'
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});