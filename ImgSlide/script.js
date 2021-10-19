var img = document.getElementById("Img");

var images = [
    './assets/siv2.jpg',
    './assets/siv1.jpg',
    './assets/siv3.jpg',
    './assets/siv4.jpg',
    './assets/siv5.jpg'
];

var imageCount = 0;

function changeImage() {
    img.setAttribute('src',images[imageCount]);
    imageCount++;
    if(imageCount >=images.length){
        imageCount=0;
    }
}
setInterval(changeImage,5000);




