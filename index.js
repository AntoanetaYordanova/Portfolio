start();

function start() {
    const navButtons = document.querySelectorAll('ul a');
    const nav = document.querySelector('.nav-background');

    window.onscroll = function () {
        scrollHandler();
    };

    navButtons.forEach((e) => e.addEventListener('click', navButtonHandler));

    function scrollHandler() {
        const y = window.scrollY;

        if (y > 0) {
            nav.classList.add('active');
            navButtons.forEach(e => e.classList.add('scroll'));
        } else if (y == 0) {
            nav.classList.remove('active');
            navButtons.forEach(e => e.classList.remove('scroll'));
        }
    }

    function navButtonHandler(ev) {
        navButtons.forEach((el) => el.classList.remove('active'));
        ev.currentTarget.classList.add('active');
    }
}
