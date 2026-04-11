const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// doing an array for my pictures and alt text.
const images = [
  { filename: 'pic1.jpg', alt: 'Closeup of a human eye' },
  { filename: 'pic2.jpg', alt: 'Rock that looks like a wave' },
  { filename: 'pic3.jpg', alt: 'Purple and white pansies' },
  { filename: 'pic4.jpg', alt: "Section of wall from a pharaoh's tomb" },
  { filename: 'pic5.jpg', alt: 'Large moth on a leaf' }
];

// setting the base url for my images to be stored but since my imgs are already in the same file, ill keep it empty.
const baseURL = '';

// looping through each image in my array
for (const image of images) {
    const newImage = document.createElement('img');

    // setting source by combining base url and filename
    newImage.setAttribute('src', baseURL + image.filename);
    newImage.setAttribute('alt', image.alt)

    // making it so I can select this with my keyboard
    newImage.setAttribute('tabindex', '0')

    // adding it to the thumb bar
    thumbBar.appendChild(newImage);

    // adding a click listener to change the big image
    newImage.addEventListener('click', updateDisplayedImage);

    // adding a listener for the enter key
    newImage.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            updateDisplayedImage(e);
        }
    })
}

// creating the function that swaps the big image with alt text
function updateDisplayedImage(e) {
    const newSrc = e.target.getAttribute('src');
    const newAlt = e.target.getAttribute('alt');

    // applying those values to main large img
    displayedImage.setAttribute('src', newSrc);
    displayedImage.setAttribute('alt', newAlt);
}
