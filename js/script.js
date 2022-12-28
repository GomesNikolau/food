let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// menu.addEventListener("click", function () {
//     navbar.classList.toggle('navbar');
// });
// window.onscroll = () => {
//     navbar.classList.remove('navbar');
// };

menu.addEventListener("scroll", function () {
    navbar.classList.toggle("sticky",window.scrollY > 0);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('navbar');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('navbar');
};

// link video no youtube
// https://www.youtube.com/watch?v=lk99tsBF9Kw