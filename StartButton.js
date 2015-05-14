#pragma strict

public var overColor: Color =  Color(0.2, 0.3, 0.4, 0.5);
private var normalColor : Color;
 
function Awake () {
    normalColor = guiTexture.color;
}
 
function OnMouseEnter () {
    guiTexture.color = overColor;
}
 
function OnMouseExit () {
    guiTexture.color = normalColor;
}

function OnMouseDown () {
	Debug.Log("Pressed to start game");
	Application.LoadLevel("intro");
}