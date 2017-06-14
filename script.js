var quotes = [
  "Here we go, off the rails. Don't you know it's time to raise our sails? It's freedom like you never knew.",
  "Moving fast, from the past, Say the word, I'll be there in a flash. You could say my hat is off to you.",
  "Oh we can zoom all the way to the moon from this great wide wacky world, Jump with me, grab coins with me, Oh yeah!",
];

var div = document.querySelector(".quotesdiv");

quotes.forEach(function(quote){
  console.log(quote);
  var text = document.createElement("P");
  text.innerHTML = quote;
  div.appendChild(text);
});
