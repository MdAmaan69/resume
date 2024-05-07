document.addEventListener("DOMContentLoaded", function() {
  const header = document.getElementById('header');
  let lastScrollTop = 0;

  // Add smooth scrolling to all links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Add in/out animations to header based on scroll direction
  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      header.classList.remove('header-animated');
      header.classList.add('header-hidden');
    } else {
      // Scrolling up
      header.classList.remove('header-hidden');
      header.classList.add('header-animated');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const projects = document.querySelectorAll('.project-card');

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to show project cards when they come into view
  function showProjects() {
    projects.forEach(project => {
      if (isInViewport(project)) {
        project.classList.add('show');
      } else {
        project.classList.remove('show'); // Remove class if not in viewport
      }
    });
  }

  // Listen for scroll events and show project cards
  window.addEventListener('scroll', showProjects);
  window.addEventListener('resize', showProjects);

  // Show project cards initially if they are in viewport
  showProjects();
});
