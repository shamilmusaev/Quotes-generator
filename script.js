const quotes = [
  {
    author: "- Babe Ruth",
    quote: '"Every strike brings me closer to the next home run."',
  },
  {
    author: "- Erma Bombeck",
    quote:
      '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
  },

  {
    author: "- Charles Swindoll",
    quote: '"Life is 10% what happens to me and 90% of how I react to it."',
  },
  {
    author: "- Steve Jobs",
    quote:
      '"Your time is limited, so don’t waste it living someone else’s life."',
  },
  {
    author: "- Aristotle",
    quote:
      '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
  },
  {
    author: "- Walt Disney",
    quote: '"The Way Get Started Is To Quit Talking And Begin Doing."',
  },
  {
    author: "- Florence Nightingale",
    quote: '"I attribute my success to this: I never gave or took any excuse."',
  },
  {
    author: "- Frank Sinatra",
    quote: '"The best revenge is massive success."',
  },
  {
    author: "- Christopher Columbus",
    quote:
      '"You can never cross the ocean until you have the courage to lose sight of the shore."',
  },
  {
    author: "- Khasan Zugairaev",
    quote: '"So bid bu !"',
  },
];



const btn = document.querySelector("#btn-gen");
const quote = document.querySelector(".quote-container");
const author = document.querySelector(".author-container");
const listDB = document.querySelector(".listDB");



 function generatorByDefault () {
  const randomByDefault = Math.floor(Math.random() * quotes.length);

  const defaultQuotesMap = quotes.map((el) => el.quote);
  const defaultAuthorsMap = quotes.map((el) => el.author);

  quote.innerHTML = defaultQuotesMap[randomByDefault];
  author.innerHTML = defaultAuthorsMap[randomByDefault];

  
};
generatorByDefault();




 const generatorOnClick = () => {
  const random = Math.floor(Math.random() * quotes.length);

  const quotesMap = quotes.map((quot) => {
    return quot.quote;
  });
  const authorsMap = quotes.map((auth) => {
    return auth.author;
  });

  quote.innerHTML = quotesMap[random];
  author.innerHTML = authorsMap[random];
};


btn.addEventListener("click", generatorOnClick);


const db = quotes.map(elem => {
  return elem.quote 
})

listDB.innerHTML = db

