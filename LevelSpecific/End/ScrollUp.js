#pragma strict

var maxPos : int = 1450; 

function Start () {

//	gameObject.transform.position.y = -155;

}

function Update () {
	if (gameObject.transform.position.y < maxPos){
		gameObject.transform.position.y += 1.5;
	}
}