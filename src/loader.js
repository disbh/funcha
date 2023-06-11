document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.querySelector('#preloader');

  const fadeEffect = () => {
    preloader.style.opacity = 0;
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500); // Wait for the transition to complete before hiding the preloader
  };

  window.addEventListener('load', fadeEffect);
});
