/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Brian Buitrago
******************************************/

//Declaring Variables early on in the program.

let blue;
let red;
let green;

//Array that stores the quotes in object form, with its necessary information.

let quotes = [
  {
    quote: "Your focus determines your reality.",
    source: "Quigon-jinn",
    citation: "Star Wars: The Phantom Menace",
    year: 1999,
    tags: " Movies"
  },

  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    citation: "",
    year: "",
    tags: " Politics"
  },

  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    citation: "",
    year: "",
    tags: " Business"
  },

  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "Steve Jobs",
    citation: "",
    year: "",
    tags: " Business"
  },

  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    source: "Mother Theresa",
    citation: "",
    year: "",
    tags: " Faith"
  },

  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin",
    citation: "",
    year: "",
    tags: " Politics"
  },

  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    source: "Aristotle",
    citation: "",
    year: "",
    tags: " Philosophy"
  },

  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    source: "Ralph Waldo Emerson",
    citation: "",
    year: "",
    tags: " Life"
  },

  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    source: "Abraham Lincoln",
    citation: "",
    year: "",
    tags: " Politics"
  },

  {
    quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    source: "Dr. Seuss",
    citation: "",
    year: "",
    tags: " Poetry"
  },

  {
    quote: "What is life without purpose, what is purpose without love.",
    source: "La Dispute",
    citation: "Sad Prayers For Guilty Bodies",
    year: 2008,
    tags: " Poetry"
  },

  {
    quote: "Love the life you live. Live the life you love.",
    source: "Bob Marley",
    citation: "",
    year: "",
    tags: " Life"
  },

  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    source: "Thomas Jefferson",
    citation: "",
    year: "",
    tags: " Politics"
  },

  {
    quote: "Try not to become a man of success. Rather become a man of value.",
    source: "Albert Einstein",
    citation: "",
    year: "",
    tags: " Life"
  },

  {
    quote:
      "True wisdom comes to each of us when we realize how little we understand about life, ourselves and the world around us.",
    source: "Socrates",
    citation: "",
    year: "",
    tags: " Philosophy"
  }
];

//This function stores a random number between zero and the length of the quote, in order to retrieve a random object from the array and places it within this variable.

function getRandomQuote() {
  let getRandomQuote = Math.floor(Math.random() * quotes.length);

  let randomQuote = quotes[getRandomQuote];

  return randomQuote;
}

//Function that changes the background color of the page.

function randomBackGroundColor() {
  let blue = Math.floor(Math.random() * 256);
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + blue + "," + red + "," + green + ")";

  document.body.style.backgroundColor = bgColor;

  return bgColor;
}

//This function calls on myRandomQuote-function and stores it in a variable. I can then summon the quote associated with it and print it on screen via it's HTML properties.

function printQuote() {
  let rQuote = getRandomQuote();
  let pageColor = randomBackGroundColor();
  let timedQuote = refreshQuote();

  string = "";
  string += '<p class="quote">' + rQuote.quote + "</p>";
  string += '<p class="source">' + rQuote.source;

  //The following if statement are applied in the functionality of the app, only if they exist within properties of a given object in the array, if not it skips over said property.

  if (rQuote.citation !== "") {
    string += '<span class="citation">' + rQuote.citation + "</span>";
  }
  if (rQuote.year !== "") {
    string += '<span class="year">' + rQuote.year + "</span>";
  }
  if (rQuote.tags !== "") {
    string += '<span class="tags">' + "," + rQuote.tags + "</span>";
  }
  string += "</p>";

  document.getElementById("quote-box").innerHTML = string;

  return printQuote;
}

//This function refreshes the quote after a set time.

function refreshQuote() {
  let reloadQuote = setInterval(printQuote, 10000);

  return reloadQuote;
}

//Event listener to respond to when the button on the page is clicked.

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

//Thank you for taking a look at my code. I am going for the "Exceeds Expectations" grade. If its not on par with that grade, then please reject this project for resubmission.
