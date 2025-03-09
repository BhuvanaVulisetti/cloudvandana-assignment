const images = [
    "https://picsum.photos/id/1018/400/300",
    "https://picsum.photos/id/1025/400/300",
    "https://picsum.photos/id/1032/400/300",
    "https://picsum.photos/id/1050/400/300"
];

let index = 0;
const imgElement = document.getElementById("slider");

// Set the initial image
imgElement.src = images[index];

function nextImage() {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    imgElement.src = images[index];
}
