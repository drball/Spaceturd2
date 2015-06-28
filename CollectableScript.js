#pragma strict

private var gameController : GameControllerScript;

function Start () {
	//--find gameController so we can call functions
	gameController = GameObject.Find("GameController").GetComponent.<GameControllerScript>();
}

function Update () {

}

function OnTriggerEnter(other: Collider) 
{

	if (other.tag == "Player")
	{
	    gameController.IncreaseScore(1);
	    gameObject.SetActive(false);
	    
	}

}