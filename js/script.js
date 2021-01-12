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

//  changed to its own file for other developers to work with the data

// var html to hold content diplay in the document 
let html = ``;


/***
 * `getRandomQuote` function
***/


function getRandomInt(arr) {
  //func gets a random number
  return Math.floor(Math.random() * Math.floor(arr.length));
  
}

function getRandomQuote(arr) {
  //This func takes an array as input and retuns an object
  let quote = arr[getRandomInt(arr)];
  return quote;

}

/***
 * `background color` function
***/

// got from w3Schools
function randomBackGroundColor () {
 {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = bgColor;
  }


}



/***
 * `printQuote` function
***/

function printQuote(obj) {
  
  if ( obj["citation"]  === false ) {

    html = `<p class="quote"> ${obj["quote"]} </p>
            <p class="source"> ${obj["source"]}
            <span class="year"> ${obj["year"]} </span>
            </p>`;

    return document.getElementById('quote-box').innerHTML = html;

    } else if ( obj["year"] === false ) {
      
      html =   `<p class="quote"> ${obj.quote} </p>
                <p class="source"> ${obj.source}
                <span class="citation"> ${obj.citation} </span>
                </p>`;
                
      return document.getElementById('quote-box').innerHTML = html;


    } else if ( obj["tags"] === false) { 

      html =  `<p class="quote"> ${obj["quote"]} </p>
              <p class="source"> ${obj["source"]}
              <span class="citation"> ${obj["citation"]} </span>
              <span class="year"> ${obj["year"]} </span>
              </p>`;

      return document.getElementById('quote-box').innerHTML = html;

    } else {

      html =  `<p class="quote"> ${obj["quote"]} </p>
              <p class="source"> ${obj["source"]}
              <span class="citation"> ${obj["citation"]} </span>
              <span class="year"> ${obj["year"]} </span>
              <span class="year"> tags: ${obj["tags"].join(", ")} </span>
              </p>`;
      return document.getElementById('quote-box').innerHTML = html;


    }

    

  }  

// func init all the other functions 
function init() {
  printQuote(getRandomQuote(quotes));
  randomBackGroundColor();

}
// changes the quote automatically
setInterval(function(){ init(); }, 8000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", init, false);