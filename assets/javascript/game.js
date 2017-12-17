var crystalNo1= Math.floor((Math.random() * 12) + 1);
var crystalNo2= Math.floor((Math.random() * 12) + 1);
var crystalNo3= Math.floor((Math.random() * 12) + 1);
var crystalNo4= Math.floor((Math.random() * 12) + 1);

var randomGameNumber=Math.floor((Math.random() * 120) + 19);

$('#randomGameNumber').text(randomGameNumber);
 
var wins= 0;
var losses = 0;
var score= 0;



function reset(){
    randomGameNumber=Math.floor((Math.random() * 120) + 19);
    console.log(randomGameNumber);
    $('#randomGameNumber').text(randomGameNumber);
    crystalNo1= Math.floor((Math.random() * 12) + 1);
    crystalNo2= Math.floor((Math.random() * 12) + 1);
    crystalNo3= Math.floor((Math.random() * 12) + 1);
    crystalNo4= Math.floor((Math.random() * 12) + 1);
    score=0;
    $('#finalScore').text(score);
}; 

var logic = function (){
	if (score == randomGameNumber) {
		wins = wins + 1;
        $('#wins').text(wins);
        alert("WIN!");
		reset();
	}else if(score > randomGameNumber){
		losses = losses + 1;
        $('#loss').text(losses);
        alert("LOSE!!");
        reset();
    }
};

$(document).ready(function(){
	$('#Crystal_cosmic').click(function(){
        score = score + crystalNo1;
        console.log("New score= " + score);
        $('#finalScore').text(score);
		logic();
	})
	$('#Crystal_lottery').click(function(){
        score = score + crystalNo2;
        console.log("New score= " + score);
        $('#finalScore').text(score);
		logic();
	})
	$('#Crystal_quest').click(function(){
        score = score + crystalNo3;
        console.log("New score= " + score);
        $('#finalScore').text(score);
		logic();
	})
	$('#Crystal_rare').click(function(){
        score = score + crystalNo4;
        console.log("New score= " + score);
        $('#finalScore').text(score);
		logic();
	})
});