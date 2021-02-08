if ( window.innerWidth <= 630 ) { 
const carouselSlide = document.querySelector('.carousel-slide')
const carouselDiv = document.querySelectorAll('.carousel-slide .projects-card')

const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')

let counter = 1
const size = carouselDiv[0].clientWidth

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

nextBtn.addEventListener('click', ()=>{
    if( counter >=  carouselDiv.length - 3) return
    carouselSlide.style.transition = 'transform 0.4s ease-in-out'
    counter++
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

})

prevBtn.addEventListener('click', ()=>{
    if( counter < 0) return
    carouselSlide.style.transition = 'transform 0.4s ease-in-out'
    counter--
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

carouselSlide.addEventListener('transitionend', () => {
    if(carouselDiv[counter].id === 'lastSlide') 
    {
        carouselSlide.style.transtion = 'none'
        counter = carouselDiv.length - 3
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if(carouselDiv[counter].id === 'firstSlide') 
    {
        carouselSlide.style.transtion = 'none'
        counter = carouselDiv.length - 3
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})
}
