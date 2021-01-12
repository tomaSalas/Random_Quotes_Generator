/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
      quote: "Life is what happens when you're busy making other plans.",
      source: "John Lennon",
      citation:"https://blog.hubspot.com/sales/famous-quotes",
      year:"1970",
  },
  
  {
      quote: "Always remember that you are absolutely unique. Just like everyone else.",
      source: "Margaret Mead",
      citation:"https://blog.hubspot.com/sales/famous-quotes",
      year:"1960",
  },
  
  {
      quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
      source: "Benjamin Franklin",
      citation:"https://blog.hubspot.com/sales/famous-quotes",
      year:"1785",
  },
  
  {
      quote: "When you reach the end of your rope, tie a knot in it and hang on.",
      source: "Franklin D. Roosevelt",
      citation:"https://blog.hubspot.com/sales/famous-quotes",
      year:"1944",
  },
  
  {
      quote: "If you really look closely, most overnight successes took a long time.",
      source: "Steve Jobs",
      citation:"https://blog.hubspot.com/sales/famous-quotes",
      year:"2010",
  },

  {
    quote: "If you really look closely, most overnight successes took a long time.",
    source: "Steve Jobs",
    citation:"",
    year:"2010",
  },

  {
    quote: "If you really look closely, most overnight successes took a long time.",
    source: "Steve Jobs",
    citation:"https://blog.hubspot.com/sales/famous-quotes",
    year:"",
  },
  
  
  ];

let html = ``;


/***
 * `getRandomQuote` function
***/

function getRandomInt(arr) {
  //gets random number
  return Math.floor(Math.random() * Math.floor(arr.length));
  
}

function getRandomQuote(arr) {
  //This func takes an array as input and gets a quote
  let quote = arr[getRandomInt(arr)];
  return quote;

}




/***
 * `printQuote` function
***/

function printQuote(obj) {

  if ( obj.citation  == undefined ) {

    html = `<p class="quote"> ${obj.quote} </p>
            <p class="source"> ${obj.source}
            <span class="year"> ${obj.year} </span>
            </p>`;
            console.log("dfdf")
            console.log(html);

    return document.getElementById('quote-box').innerHTML = html;

    } else if (obj.year == undefined) {
      
      html =   `<p class="quote"> ${obj.quote} </p>
                <p class="source"> ${obj.source}
                <span class="citation"> ${obj.citation} </span>
                </p>`;
                console.log("asdfasdf")
                console.log(html);
    
    return document.getElementById('quote-box').innerHTML = html;


    } else {

      html =  `<p class="quote"> ${obj.quote} </p>
      <p class="source"> ${obj.source}
      <span class="citation"> ${obj.citation} </span>
      <span class="year"> ${obj.year} </span>
      </p>`
    return document.getElementById('quote-box').innerHTML = html;


    }

    

}

function init() {
  printQuote(getRandomQuote(quotes));

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", init, false);