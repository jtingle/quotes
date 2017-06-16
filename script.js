var quotes = [
  "Heaven and earth act but don't care, treat everything like flowers by the grave. - Dao de Jing [5]",
  "Those who follow (ts'ung) their greater part become great humans. Those who follow their petty part become petty humans. - Mengzi",
  "To be wealthy and honored in an unjust society is a disgrace. - Confucious",
];

var div = document.querySelector(".quotesdiv");

quotes.forEach(function(quote){
  console.log(quote);
  var text = document.createElement("P");
  text.innerHTML = quote;
  div.appendChild(text);
});
