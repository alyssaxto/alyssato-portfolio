const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');



// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
// Show active menu when scrolling
const highlightMenu = () => {
  const PortfolioMenu = document.querySelector('#Portfolio-page');
  const aboutMenu = document.querySelector('#about-page');
  const ProjectsMenu = document.querySelector('#Projects-page');
  
  // Remove 'highlight' class from all menu items
  PortfolioMenu.classList.remove('highlight');
  aboutMenu.classList.remove('highlight');
  ProjectsMenu.classList.remove('highlight');
  
  // Get the position of the "Projects" section
  const projectsSection = document.querySelector('#Projects');
  const projectsSectionPosition = projectsSection.offsetTop;
  
  // Get the current scroll position
  const scrollPos = window.scrollY;
  
  // Add 'highlight' class to the "Projects" menu item if the page scrolls to the "Projects" section
  if (scrollPos >= projectsSectionPosition) {
    ProjectsMenu.classList.add('highlight');
  }
};
window.addEventListener('scroll', highlightMenu);


//  Close mobile Menu when clicking on a menu item
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
