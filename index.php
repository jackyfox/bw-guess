<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="css/screen.css" type="text/css" media="screen, projection">
<link rel="stylesheet" href="css/print.css" type="text/css" media="print"> 
<!--[if lt IE 8]>
  <link rel="stylesheet" href="css/ie.css" type="text/css" media="screen, projection">
<![endif]-->
<script type="text/javascript" src="js/jquery-1.6.min.js"></script>
<title>Black or white</title>
</head>
<body>
<div class="container">
	<center>
  	<div class="span-24">
  		<h1>Черная или белая?</h1>
  	</div>
	
  	<div class="span-8 prepend-8 append-8">
  		<div class="card" style="padding: 10px">
  			<img alt="Card" src="images/card_back.svg" width="300">
  		</div>
  		<div class="buttons">
  			<button name="black">Black</button>
  			<button name="white">White</button>
  		</div>
  		<div class="stat" style="padding: 10px">
  			<p>Правильно: <span id="right">0</span> <br />
  			Всего попыток: <span id="total">0</span></p>
  		</div>
  	</div>
  	
  	<div class="span-24">
  		<p>All rights ok &copy; 2011 <a href="http://www.jackyfox.com">jackyfox</a><br />
  		Powered on <a href="http://jquery.com/">jQuery</a> and <a href="http://www.blueprintcss.org/">Blueprint</a></p>
  	</div>
  	</center>
  </div>
<script type="text/javascript">
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
 </script>
</body>
</html>