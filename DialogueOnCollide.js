#pragma strict
//--shows dialogue when player collides
private var gameController : GameControllerScript;

public var isPlayer : boolean = false; //--is it the player saying this? 
public var dialogue : String;
public var timeBeforeActive : int = 0; //--amount of seconds before this can be triggered

function Start () {

	//--find gameController so we can call functions
	gameController = GameObject.Find("GameController").GetComponent.<GameControllerScript>();
}

function Update () {

}

function OnTriggerEnter(other: Collider) 
{

	if ((other.tag == "Player") && (Time.time > timeBeforeActive) )
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