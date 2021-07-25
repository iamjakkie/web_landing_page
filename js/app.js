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
const nav = document.getElementById('navbar__list');
const section = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};

const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: yellow;";
    };
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBuilder = () => {
    let navHTML = '';
    section.forEach(section => {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navHTML += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    });
    nav.innerHTML = navHTML;
};

// Add class 'active' to section when near top of viewport
const sectionActivation = () => {
    section.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

// Scroll to anchor ID using scrollTO event
const scrolling = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<section ; i++){
                section[i].addEventListener("click",sectioncroll(link));
            }
        });
    });

};

/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 
navBuilder();
// Scroll to section on link click
window.addEventListener('scroll' ,sectionActivation);
scrolling();
// Set sections as active




