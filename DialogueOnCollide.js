#pragma strict
//--shows dialogue when player collides
private var gameController : GameControllerScript;

public var dialogue : String;

function Start () {

	//--find gameController so we can call functions
	var gameControllerObj : GameObject = GameObject.Find("GameController");
	gameController = gameControllerObj.GetComponent(GameControllerScript);
}

function Update () {

}

function OnTriggerEnter(other: Collider) 
{

	if (other.tag == "Player")
	{
	  
	    gameController.ShowDialogue(dialogue);
	    return;
	}

}