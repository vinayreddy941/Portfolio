/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')




if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')

    })
}

if(navClose){
    navClose.addEventListener('click' , ()=> {
        navMenu.classList.remove('show-menu')
    })
}









/*=============== CHANGE BACKGROUND HEADER ===============*/

const bgHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50  ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')

}

window.addEventListener('scroll', bgHeader)
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Function to set the theme
const setTheme = (theme, icon) => {
    document.body.classList.add(theme);
    themeButton.classList.add(icon);
};

// Function to toggle the theme
const toggleTheme = () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
};

// Check if there's a selected theme in localStorage
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
} else {
    // If no theme is selected in localStorage, set dark theme as default
    setTheme(darkTheme, 'ri-moon-line');
    localStorage.setItem('selected-theme', 'dark');
    localStorage.setItem('selected-icon', 'ri-moon-line');
}

themeButton.addEventListener('click', () => {
    toggleTheme();
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';



// Check if the device is a mobile device based on screen width.
function isMobileDevice() {
    return window.innerWidth <= 768; // Assuming 768px is your mobile breakpoint.
  }
  
  // Function to check if an element is in the viewport.
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to scale a social link.
  function scaleSocialLink(link) {
    link.classList.add('footer__social-link--scaled');
  }
  
  // Add an event listener to check for scroll.
  window.addEventListener('scroll', function() {
    if (isMobileDevice()) {
      const socialLinks = document.querySelectorAll('.footer__social-link');
      socialLinks.forEach(link => {
        if (isElementInViewport(link)) {
          scaleSocialLink(link);
        }
      });
    }
  });
  