var quotes = [
  "Each day I examine myself upon three points. In planning for others, have I been loyal? In company with friends, have I been trustworthy? And have I practiced what has been passed on to me? (1.4)",
  "Be not concerened that no one recognizes your merits. Be concerned that you may not recognize the merits of others. (1.16)",
  "To know when you know something, and to know when you don't know - that's knowledge (2.17)",
  "When you see a worthy person, think of becoming equal to him. When you see an unworthy person, survey yourself within. (4.17)",
  "Rarely has anyone missed the mark through self-constraint. (4.23)",
  "A student willing to study for three years without obtaining a salaried position is hard to come by. (8.12)",
  "There are shoots that never come to flower; there are flowers that never come to bear fruit. (9.22)",
 ];

window.onload = function () {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quotebox').innerHTML = quotes[randomNumber];
}

 // var div = document.querySelector(".quotesdiv");
 //
 // quotes.forEach(function(quote){
 //   console.log(quote);
 //   var text = document.createElement("P");
 //   text.innerHTML = quote;
 //   div.appendChild(text);
 // });

// var div = document.querySelector(".quotesdiv");
//
// quotes.forEach(function(quote){
//   console.log(quote);
//   var text = document.createElement("P");
//   text.innerHTML = quote;
//   div.appendChild(text);
// });
