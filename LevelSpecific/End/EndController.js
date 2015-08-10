#pragma strict

/* ====================================================
Fade text out when key pressed
======================================================= */

var scrollingText : GameObject;
var honestText : GameObject;

function Start () {

	honestText.GetComponent.<CanvasGroup>().alpha = 0;
	
}

function FixedUpdate () {


	if(Input.anyKey && (Time.time > 2))
	{

		HideScrollingText();
		
		

	}
}

function HideScrollingText() {

	while(scrollingText.GetComponent.<CanvasGroup>().alpha > 0){
		scrollingText.GetComponent.<CanvasGroup>().alpha -= 0.01;
		yield WaitForSeconds (.01);
	}
	
	yield WaitForSeconds (1);
			
	while(honestText.GetComponent.<CanvasGroup>().alpha < 1){
		honestText.GetComponent.<CanvasGroup>().alpha += 0.01;
		yield WaitForSeconds (.01);
	}

}


public function ClickedSubscribe() {
	Debug.Log("clicked");
	Application.OpenURL ("http://eepurl.com/bvGQRT");
}

function ClickedFb() {
	Application.OpenURL ("https://www.facebook.com/drball");
}

function ClickedTwitter() {
	Application.OpenURL ("https://twitter.com/davidonionball");
}