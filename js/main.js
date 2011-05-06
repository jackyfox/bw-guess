/**
 * 
 */
var card;
var attempts = 0;
var guesses = 0;
function new_card()
{
	return Math.round(Math.random());
}
function attempt(btn)
{
	attempts++;
	card = new_card();

	if (card == btn)
	{
		guesses++;
		$("span#right").text(guesses);
	}
	$("span#total").text(attempts);
	
	// card rotation step 1
	$(".card img").animate({
		width: 1,
		height: 450
	}, 150 );

	// change card color to black or white
	if (card == 0)
		$(".card img").attr("src","images/card_black.svg");
	else
		$(".card img").attr("src","images/card_white.svg");
	
	// card rotation step 2
	$(".card img").animate({
		width: 300,
		height: 450
	}, 150 ).delay(500).animate({
		width: 1,
		height: 450
	}, 150 );
	
	// return card back
	$(".card img").attr("src","images/card_back.svg");

	// card rotation step 3
	$(".card img").animate({
		width: 300,
		height: 450
	}, 150 );

}
$(document).ready(function() {
	$("button[name='black']").click(function() {
		attempt(0);
	});
	$("button[name='white']").click(function() {
		attempt(1);
	});
});