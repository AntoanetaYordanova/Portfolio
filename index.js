start();

function start() {
    const navButtons = document.querySelectorAll('ul a');
    const nav = document.querySelector('.nav-background');

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

    window.onscroll = function () {
        scrollHandler();
    };

    navButtons.forEach((e) => e.addEventListener('click', navButtonHandler));

    function scrollHandler() {
        const y = window.scrollY;

        if (y > 0) {
            nav.classList.add('active');
            navButtons.forEach((e) => e.classList.add('scroll'));
        } else if (y == 0) {
            nav.classList.remove('active');
            navButtons.forEach((e) => e.classList.remove('scroll'));
            navButtons.forEach((e) => e.classList.remove('acitve'));
        }

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
        } else if (y >= getPosition(certificatesSection) && !((window.innerHeight + window.scrollY) >= document.body.scrollHeight)) {
            navButtons.forEach((e) => e.classList.remove('active'));
            certificatesLink.classList.add('active');
        } else if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight)){
            navButtons.forEach((e) => e.classList.remove('active'));
            contactsLink.classList.add('active');
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
        navButtons.forEach((el) => el.classList.remove('active'));
        ev.currentTarget.classList.add('active');
    }
}
