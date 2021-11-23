const menuBtn = document.querySelector(".hamburger");
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', function () {
    nav.classList.toggle('active')
})