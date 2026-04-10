// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

// Characters
// Willy the Goblin
// Big Daddy
// Father Christmas
const characters = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']

// Places
// the soup kitchen
// Disneyland
// the White House
const places = ['the soup kitchen', 'Disneyland', 'the White House'];

// Events
// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and slithered away
const events = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and slithered away'];

// Partial return random string function

function returnRandomStoryString() {
  // It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.
  
  // I'm picking random items from the arrays I created
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  // I'm creating the story from the template and inserting the random items
  let storyText = `It was 94 fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, 
  then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  
  // Calling the function to get a fresh random story
  let newStory = returnRandomStoryString();
  
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace('Bob', name)
  }
  // calculating the weight in stone and the temperature
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone';
    const temperature = Math.round((94 - 32) * 5 / 9) + ' Celsius';

    // replacing the us variables in the story with the new uk values
    newStory = newStory.replace('94 fahrenheit', temperature)
    newStory = newStory.replace('300 pounds', weight);
  }

  

  // TODO: replace "" with the correct expression
  story.textContent = newStory;
  story.style.visibility = "visible";
}