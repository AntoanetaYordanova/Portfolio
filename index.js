start();

function start() {
    const navButtons = document.querySelectorAll('ul a');
    const navBackground = document.querySelector('.nav-background');
    const nav = document.querySelector('nav');
    const hamburgerMenu = document.querySelector('.hamburger');

    const aboutSection = document.querySelector('#about');
    const skillsSection = document.querySelector('#skills');
    const projectsSection = document.querySelector('#projects');
    const certificatesSection = document.querySelector('#certificates');
    const headerSection = document.querySelector('#header');

    const aboutLink = document.querySelector('.about-link');
    const skillsLink = document.querySelector('.skills-link');
    const projectsLink = document.querySelector('.projects-link');
    const certificatesLink = document.querySelector('.certificates-link');
    const contactsLink = document.querySelector('.contacts-link');

    let isClick = false;
    let isMenuAcive = false;

    window.onscroll = function () {
        scrollHandler();
    };

    navButtons.forEach((e) => e.addEventListener('click', navButtonHandler));

    hamburgerMenu.addEventListener('click', hamburgerMenuHandler);

    function scrollHandler() {
        const y = window.scrollY;

        if (y > 0) {
            navBackground.classList.add('active');
            navButtons.forEach((e) => e.classList.add('scroll'));
        } else if (y == 0) {
            navBackground.classList.remove('active');
            navButtons.forEach((e) => e.classList.remove('scroll'));
            navButtons.forEach((e) => e.classList.remove('acitve'));
        }

        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;

        if(!isClick || documentHeight >= currentScroll) {
            if(y <= getPosition(headerSection)){
                navButtons.forEach((e) => e.classList.remove('active'));
            } else if (y >= getPosition(aboutSection) && y <= getPosition(skillsSection)) {
                navButtons.forEach((e) => e.classList.remove('active'));
                aboutLink.classList.add('active');
            } else if(y >= getPosition(skillsSection) && y <= getPosition(projectsSection)) {
                navButtons.forEach((e) => e.classList.remove('active'));
                skillsLink.classList.add('active');
            } else if(y >= getPosition(projectsSection) && y <= getPosition(certificatesSection)) {
                navButtons.forEach((e) => e.classList.remove('active'));
                projectsLink.classList.add('active');
            } else if (y >= getPosition(certificatesSection) && !(currentScroll + 5 >= documentHeight)) {
                navButtons.forEach((e) => e.classList.remove('active'));
                certificatesLink.classList.add('active');
            } else if (currentScroll + 5 >= documentHeight){
                navButtons.forEach((e) => e.classList.remove('active'));
                contactsLink.classList.add('active');
            }
        }
    }   

    function getPosition(element) {
        var yPosition = 0;

        while (element) {
            yPosition +=
                element.offsetTop - element.scrollTop + element.clientTop;
            element = element.offsetParent;
        }

        return yPosition;
    }

    function navButtonHandler(ev) {
        isClick = true;
        navButtons.forEach((el) => el.classList.remove('active'));
        ev.currentTarget.classList.add('active');
        setTimeout(() => {
            isClick = false;
        }, 1000);
    }

    function hamburgerMenuHandler() {
        if(isMenuAcive) {
            hamburgerMenu.classList.remove('active');
            nav.classList.remove('active');
        } else {
            hamburgerMenu.classList.add('active');
            nav.classList.add('active');
        }

        isMenuAcive = !isMenuAcive;
    }
}
