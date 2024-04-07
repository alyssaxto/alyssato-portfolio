const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const PortfolioMenu = document.querySelector('#Portfolio-page');
  const aboutMenu = document.querySelector('#about-page');
  const ProjectsMenu = document.querySelector('#Projects-page');
  let scrollPos = window.scrollY;

  // Remove 'highlight' class from 'about' menu item when scrolling down
  if (scrollPos >= 600 && scrollPos < 1400) {
    aboutMenu.classList.remove('highlight');
  }

  // Other logic to add 'highlight' class to menu items based on scroll position
  if (window.innerWidth > 960 && scrollPos < 600) {
    PortfolioMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight'); // Make sure 'about' menu item doesn't have 'highlight' class
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    PortfolioMenu.classList.remove('highlight');
    ProjectsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    ProjectsMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }
};


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
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