//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

// trailer playback wiring
const trailerButtons = carouselDom.querySelectorAll('.trailer-btn');
const trailerVideos = carouselDom.querySelectorAll('.vid-trailer');

const stopAllTrailers = () => {
    trailerVideos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
};

trailerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const container = button.closest('.item');
        if (!container) return;
        const video = container.querySelector('.vid-trailer');
        if (!video) return;
        stopAllTrailers();
        video.play();
    });
});


thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    stopAllTrailers();
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');

        
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');

    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

}