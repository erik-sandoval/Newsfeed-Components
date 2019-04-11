const menu1 = document.querySelector(".menu-button")
const menu2 = document.querySelector('.menu')
const img = document.querySelector('.menu-button')
const expBtn = document.querySelectorAll('.expandButton')


TweenMax.from(".header h1", 3, { y: "-120", opacity: 0, ease: Back.easeOut.config(1) })

TweenMax.from(".header", 2, { backgroundColor: 'dodgerblue', repeat: 0 })

img.addEventListener('mouseover', () => {
    TweenMax.to(menu1, 1, { rotation: "360", repeat: 0, transformOrigin: "50% 50%" });
});

img.addEventListener('mouseleave', () => {
    TweenMax.to(menu1, 1, { rotation: "0", repeat: 0, transformOrigin: "50% 50%" });
})

menu1.addEventListener('click', () => {
    TweenMax.from('.menu--open', 2, { x: "-100%", ease: Power1.easeOut })

})