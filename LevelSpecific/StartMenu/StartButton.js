#pragma strict

public var overColor: Color =  Color(0.2, 0.3, 0.4, 0.5);
private var normalColor : Color;
 
function Awake () {
    normalColor = GetComponent.<GUITexture>().color;
}
 
function OnMouseEnter () {
    GetComponent.<GUITexture>().color = overColor;
}
 
function OnMouseExit () {
    GetComponent.<GUITexture>().color = normalColor;
}

function OnMouseDown () {
	Debug.Log("Pressed to start game");
	
}