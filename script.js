const carouselSlide = document.querySelector('.carousel-slide')
const carouselDiv = document.querySelectorAll('.carousel-slide .projects-card')

const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')

let counter = 1
const size = carouselDiv[0].clientWidth

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

nextBtn.addEventListener('click', ()=>{
    if( counter >=  carouselDiv.length - 2) return
    carouselSlide.style.transition = 'transform 0.4s ease-in-out'
    counter++
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

})

prevBtn.addEventListener('click', ()=>{
    if( counter <= -1) return
    carouselSlide.style.transition = 'transform 0.4s ease-in-out'
    counter--
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

