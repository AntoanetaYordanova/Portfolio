start();

function start() {
    const navButtons = document.querySelectorAll('li');
    const nav = document.querySelector('.nav-background');

    window.onscroll = function () {
        scrollHandler();
    };

    navButtons.forEach((el) => el.addEventListener('click', navButtonHandler));

    function scrollHandler(ev) {
        const y = window.scrollY;

        if (y > 200) {
            nav.classList.add('active');
        } else if (y == 0) {
            nav.classList.remove('active');
        }
    }

    function navButtonHandler(ev) {
        navButtons.forEach((el) => el.classList.remove('active'));
        ev.currentTarget.classList.add('active');
    }
}
