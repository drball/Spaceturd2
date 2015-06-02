#pragma strict

private var gameController : GameControllerScript;
private var GoalCompleteCanvas : GameObject;

function Start () {
	GoalCompleteCanvas = GameObject.Find("GoalCompleteCanvas");
	GoalCompleteCanvas.GetComponent(Canvas).enabled = false;

	//yield WaitForSeconds (2);
	//gameController.ShowDialogue("this is the start of level 1");
}

function Update () {

}

