const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling

const highLightMenu = () => {
    const elem = document.querySelector('highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const skillsMenu = document.querySelector('#skills-page');
    let scrollPos = window.scrollY;
    // permet de regler mes breakpoint pour le scroll.
    // console.log(scrollPos);
    // faire les modifs necessaire pour le scroll les dimension sont mis au hasard pour le moment !
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return 
    } else if (window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        skillsMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345){
        skillsMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }

    if((elem && window.innerWidth > 960 && scrollPos < 600) || elem){
        elem.classList.remove("highlight");
    }
}

window.addEventListener('scroll', highLightMenu);
window.addEventListener('click', highLightMenu);
// pour fermer le menu lorsque l'on clique sur un items.
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 960 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

