/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navlist = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNav = () => {
    sections.forEach(section => {
        let li = document.createElement('li');
        li.className ='menu__link';
        li.id = `nav_${section.id}`;
        li.innerHTML =`<a href="#${section.id}">${section.dataset.nav}</a>`;
        navlist.appendChild(li);
    })
}

function isInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', () => {
    // iterate over sections
    sections.forEach((section) => {
        let navItem = document.getElementById(`nav_${section.id}`);
        if(isInViewport(section)){
            navItem.classList.add('active');
            section.className = 'active';
        } else {
            navItem.classList.remove('active');
            section.className = '';
        }
    })

}, {
    passive: true
});

// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
// Scroll to section on link click

// Set sections as active
