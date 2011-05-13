/**
 * 
 */
var card;
var attempts = 0;
var guesses = 0;
var percent = 0;
function new_card()
{
	return Math.round(Math.random());
}
function clear()
{
	attempts = 0;
	guesses  = 0;
	percent  = 0;
	$("span#right").text(guesses);
	$("span#total").text(attempts);
	$("span#percent").text(percent);
	// remove cookies
	$.cookie("bow_right", null);
	$.cookie("bow_total", null);
}
function attempt(btn)
{
	if (attempts == 0)
		$("div.stat").fadeIn("slow");
	
	attempts++;
	card = new_card();

	if (card == btn)
	{
		guesses++;
		$("span#right").text(guesses);
	}
	$("span#total").text(attempts);
	
	// percent calculating
	percent = Math.round(guesses / attempts * 100);
	$("span#percent").text(percent);
	
	// sets cookie
	$.cookie("bow_right", guesses);
	$.cookie("bow_total", attempts);
	
	// Stop the prev animation
	$("#card").stop(true, true);
	
	// card rotation step 1
	$("#card").animate({
		width: 1,
		height: $(this).height
	}, 150, function() {
		// change card color to black or white
		if (card == 0)
			$(this).attr("src","images/card_black.png");
		else
			$(this).attr("src","images/card_white.png");
	});
	
	// card rotation step 2
	$("#card").animate({
		width: 300,
		height: $(this).height
	}, 150 ).delay(500).animate({
		width: 1,
		height: $(this).height
	}, 150, function() {
		// return card back
		$(this).attr("src","images/card_back.png");
	});

	// card rotation step 3
	$("#card").animate({
		width: 300,
		height: $(this).height
	}, 150 );
}
$(document).ready(function() {
	// if last results stored in cookies
	if ($.cookie("bow_right"))
	{
		// restore them
		guesses = $.cookie("bow_right");
		attempts = $.cookie("bow_total");
		percent = Math.round(guesses / attempts * 100);
		
		$("span#right").text(guesses);
		$("span#total").text(attempts);
		$("span#percent").text(percent);
		
		$("div.stat").show();
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
	// Hotkeys for black and white buttons
	$(document).bind('keypress', 'b', function() {
		attempt(0);
	});
	$(document).bind('keypress', 'n', function() {
		attempt(1);
	});
	$(document).bind('keypress', 'и', function() {
		attempt(0);
	});
	$(document).bind('keypress', 'т', function() {
		attempt(1);
	});
});