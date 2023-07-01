//for player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // generate image b/w 1-6

var randomImage1 = 'images/dice' + randomNumber1 + '.png'; // generating images for dice

var image1 = document.querySelectorAll('img')[0]; 

image1.setAttribute("src", randomImage1);

//for player2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = 'images/dice' + randomNumber2 + '.png';

var image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src", randomImage2)

  //comparing result.
var result = '';
if(randomNumber1>randomNumber2){
  result = '🚩player1 wins';
}else if(randomImage1<randomImage2){
  result = '🚩player2 wins';
}else{
  result = 'tie';
}

var display_result = document.querySelector('.result').innerHTML = `SCORE : ${result}`;

