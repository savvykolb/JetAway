const slideShow = document.querySelectorAll(".intro .slideshow-img");
const nextImageDelay = 3000;
let currentImgCount = 0;

// slideShow[currentImgCount].style.display = "block";

slideShow[currentImgCount].style.opacity = 1;
setInterval(nextImage, nextImageDelay);

function nextImage() {


    slideShow[currentImgCount].style.zIndex = -2;
    const tempCount = currentImgCount;
    setTimeout(() => {
        slideShow[tempCount].style.opacity= 0;
    },1000);
    currentImgCount = (currentImgCount + 1) % slideShow.length;
    // slideShow[currentImgCount].style.display = 'block';

    slideShow[currentImgCount].style.opacity = 1;

    slideShow[currentImgCount].style.zIndex = -1;


}