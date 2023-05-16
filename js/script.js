"use strict"

Fancybox.bind("[data-fancybox]", {});

document.addEventListener('click', (e) => {
    const targetElement = e.target;

    if (targetElement.closest('.menu__icon')) {
        targetElement.closest('.menu__icon').classList.toggle('active');
        document.querySelector('.menu__body').classList.toggle('open');
        document.body.classList.toggle('dark');
    } else if (!targetElement.closest('.menu__body')) {
        document.querySelector('.menu__icon').classList.remove('active');
        document.querySelector('.menu__body').classList.remove('open');
        document.body.classList.remove('dark');
    }
});