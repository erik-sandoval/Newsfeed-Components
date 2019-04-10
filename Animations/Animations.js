const img = document.querySelector('.menu-button')
const header = document.querySelector('.header')
const article = document.querySelectorAll('.article')



TweenMax.to(header, 1, {backgroundColor: 'red', repeat: 1, yoyo: true})

img.addEventListener('mouseover', event =>{
    TweenMax.to(img, 1, { rotation: "360", repeat: 1, transformOrigin: "50% 50%" })
})




TweenMax.to(article, 0.1, {x: "+=20", yoyo: true, repeat: 5 });