#pragma strict

var fadeTexture : Texture2D;
var fadeSpeed = 0.2;
var drawDepth = -1000;

private var alpha = 1.0; 
private var fadeDir = -1;

function OnGUI(){

	alpha += fadeDir * fadeSpeed * Time.deltaTime;  
	alpha = Mathf.Clamp01(alpha);   

	GUI.color.a = alpha;

	GUI.depth = drawDepth;

	GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), fadeTexture);
}

public function BeginFade(direction : int){
	fadeDir = direction;
	return (fadeSpeed);
}

function OnLevelWasLoaded (level : int) {
	Debug.Log("level"+level+" was loaded");
	BeginFade(-1);
}