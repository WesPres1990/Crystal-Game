var crystalNo1= Math.floor(Math.random()*11+1)
var crystalNo2= Math.floor(Math.random()*11+1)
var crystalNo3= Math.floor(Math.random()*11+1)
var crystalNo4= Math.floor(Math.random()*11+1)

var randomGameNumber=Math.floor(Math.random()*101+19)
 
var wins= 0;
var losses = 0;
var score= 0;



function reset(){
    console.log(randomGameNumber)
    $('#randomGameNumber').text(randomGameNumber);
    crystalNo1;
    crystalNo2;
    crystalNo3;
    crystalNo4;
    score;
    $('#score').text(score);
}; 

var logic = function (){
	if (score == randomGameNumber) {
		wins = wins + 1;
		$('#wins').text(wins);
		reset();
	}else if(score > randomGameNumber){
		losses = losses + 1;
		$('#loss').text(losses);
        reset();
    }
};

$(document).ready(function(){
	$('#Crystal_cosmic').click(function(){
		score = score + crystalNo1;
		logic();
	})
	$('#Crystal_lottery').click(function(){
		score = score + crystalNo2;
		logic();
	})
	$('#Crystal_quest').click(function(){
		score = score + crystalNo3;
		logic();
	})
	$('#Crystal_rare').click(function(){
		score = score + crystalNo4;
		logic();
	})
});