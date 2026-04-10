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

// setting the base url for my images to be stored
const baseURL = ''