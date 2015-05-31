#pragma strict

private var gameController : GameControllerScript;

function Start () {

	//var bounds = GameObject.Find("Bounds");
	//bounds.active = false;
	
	yield WaitForSeconds (2);
	gameController.ShowDialogue("this is the start of level 1");
}

function Update () {

}

