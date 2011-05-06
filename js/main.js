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
function clear()
{
	attempts = 0;
	guesses  = 0;
	$("span#right").text(guesses);
	$("span#total").text(attempts);
	// remove cookies
	$.cookie("bow_right", null);
	$.cookie("bow_total", null);
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
	
	// sets cookie
	$.cookie("bow_right", guesses);
	$.cookie("bow_total", attempts);
	
	// card rotation step 1
	$(".card img").animate({
		width: 1,
		height: 450
	}, 150, function() {
		// change card color to black or white
		if (card == 0)
			$(".card img").attr("src","images/card_black.svg");
		else
			$(".card img").attr("src","images/card_white.svg");
	});
	
	// card rotation step 2
	$(".card img").animate({
		width: 300,
		height: 450
	}, 150 ).delay(500).animate({
		width: 1,
		height: 450
	}, 150, function() {
		// return card back
		$(".card img").attr("src","images/card_back.svg");
	});

	// card rotation step 3
	$(".card img").animate({
		width: 300,
		height: 450
	}, 150 );

}
$(document).ready(function() {
	// if last results stored in cookies
	if ($.cookie("bow_right"))
	{
		// restore them
		guesses = $.cookie("bow_right");
		attempts = $.cookie("bow_total");
		
		$("span#right").text(guesses);
		$("span#total").text(attempts);
	}
	$("button[name='black']").click(function() {
		attempt(0);
	});
	$("button[name='white']").click(function() {
		attempt(1);
	});
	$("button[name='clear']").click(function() {
		clear();
	});
});