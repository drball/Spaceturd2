#pragma strict
//--shows dialogue when player collides
private var gameController : GameControllerScript;

public var isPlayer : boolean = false; //--is it the player saying this? 
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
	    if(isPlayer == true) {
	    	gameController.ShowPlayerDialogue(dialogue);
	    	return;
	    }else {
	    	gameController.ShowDialogue(dialogue);
	    	return;
	    }
	    
	}

}