//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

// overlay player
const overlay = document.querySelector('.player-overlay');
const overlayVideo = document.querySelector('.player-overlay .player-video');
const overlayClose = document.querySelector('.player-overlay .player-close');

// trailer playback wiring
const trailerButtons = carouselDom.querySelectorAll('.trailer-btn');
const trailerVideos = carouselDom.querySelectorAll('.vid-trailer');

const stopAllTrailers = () => {
    trailerVideos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
    if (overlayVideo) {
        overlayVideo.pause();
        overlayVideo.currentTime = 0;
    }
};

const openOverlay = (src) => {
    if (!overlay || !overlayVideo || !src) return;
    stopAllTrailers();
    overlayVideo.src = src;
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    overlayVideo.play();
};

const closeOverlay = () => {
    if (!overlay || !overlayVideo) return;
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    overlayVideo.pause();
    overlayVideo.currentTime = 0;
    overlayVideo.removeAttribute('src');
    overlayVideo.load();
};

trailerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const container = button.closest('.item');
        if (!container) return;
        const title = container.querySelector('h1');
        const isSquid = title && title.textContent.trim().toLowerCase() === 'squid game';
        if (!isSquid) return; // only Squid Game trailer works
        const video = container.querySelector('.vid-trailer');
        const src = video ? video.getAttribute('src') : null;
        openOverlay(src);
    });
});

if (overlayClose) {
    overlayClose.addEventListener('click', closeOverlay);
}

if (overlay) {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeOverlay();
        }
    });
}


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