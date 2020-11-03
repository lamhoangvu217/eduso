const toggleBtn = document.getElementsByClassName('nav__button')[0]
const navMenu = document.getElementsByClassName('nav__menu')[0]

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active')
})
// gsap.from('.slide', {opacity:0, duration: 1.5, y: -50})
// gsap.from('.about', {opacity:0, duration: 1, y: -50, delay: 1.2})
// var options = {
//     animateThreshold: 100,
//     scrollPollInterval: 20
// }
// $('.aniview').AniView(options);
