const images = [
    'images/n.jpg',
    'images/b.jpg',
    'images/c.jpg',
    'images/d.jpg',
    'images/e.jpg',
    'images/f.jpg',
    'images/g.jpg',
    'images/h.jpg',
    'images/i.jpg',
    'images/j.jpg',
    'images/k.jpg',
    'images/l.jpg',
    'images/m.jpg',
    
];

let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl)
imgIndex ++;
}, 2000)
