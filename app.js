const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Add 'active' class to the corresponding menu item based on the current page URL
var currentPageURL = window.location.href;

if (currentPageURL.includes("about.html")) {
    document.getElementById("about-page").parentElement.classList.add("active");
} else if (currentPageURL.includes("index.html")) { // Assuming 'index.html' is your homepage
    document.getElementById("Portfolio-page").parentElement.classList.add("active");
}

// Add 'active' class to the corresponding menu item when scrolling
const highlightMenu = () => {
  const PortfolioMenu = document.querySelector('#Portfolio-page');
  const aboutMenu = document.querySelector('#about-page');
  const ProjectsMenu = document.querySelector('#Projects-page');
  
  // Remove 'active' class from all menu items
  PortfolioMenu.parentElement.classList.remove('active');
  aboutMenu.parentElement.classList.remove('active');
  ProjectsMenu.parentElement.classList.remove('active');
  
  // Get the position of the "Projects" section
  const projectsSection = document.querySelector('#Projects');
  const projectsSectionPosition = projectsSection.offsetTop;
  
  // Get the current scroll position
  const scrollPos = window.scrollY;
  
  // Add 'active' class to the corresponding menu item if the page scrolls to the corresponding section
  if (scrollPos >= projectsSectionPosition) {
    ProjectsMenu.parentElement.classList.add('active');
  } else if (scrollPos < projectsSectionPosition && currentPageURL.includes("index.html")) {
    PortfolioMenu.parentElement.classList.add('active');
  } else if (scrollPos < projectsSectionPosition && currentPageURL.includes("about.html")) {
    aboutMenu.parentElement.classList.add('active');
  }
};

window.addEventListener('scroll', highlightMenu);
const hideMobileMenu = () => {
  if (window.innerWidth <= 768) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

document.querySelectorAll('.bullet-image img').forEach(item => {
  item.addEventListener('click', event => {
    const src = event.target.getAttribute('src');
    const expandedImage = document.createElement('div');
    expandedImage.classList.add('expanded-image');
    expandedImage.innerHTML = `<img src="${src}" alt="Expanded Image">`;
    document.body.appendChild(expandedImage);

    // Trigger smooth transition by adding active class after a short delay
    setTimeout(() => {
      expandedImage.classList.add('active');
    }, 50);

    // Close the expanded image when clicked on it
    expandedImage.addEventListener('click', () => {
      expandedImage.classList.remove('active');
      // Delay the removal of the expanded image to allow the transition to complete
      setTimeout(() => {
        expandedImage.remove();
      }, 300); // Should match the duration of CSS transition
    });
  });
});
