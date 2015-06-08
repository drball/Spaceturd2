#pragma strict

private var gameController : GameControllerScript;
private var goalCompleteCanvas : GameObject;
private var enemy : GameObject;
private var enemyScript : Component;

function Start () {

	//--get reference to gameController object so we can call functions
	var gameControllerObj : GameObject = GameObject.Find("GameController");
	gameController = gameControllerObj.GetComponent(GameControllerScript);
	
	goalCompleteCanvas = GameObject.Find("GoalCompleteCanvas");
	goalCompleteCanvas.GetComponent(Canvas).enabled = false;


	enemy = GameObject.Find("EnemyTurd");
	enemyScript = enemy.GetComponent(EnemyScript);
	
//	yield WaitForSeconds (2);
//	gameController.ShowDialogue("this is the start of level 1");
}

function StartGame() {
	goalCompleteCanvas.GetComponent(Canvas).enabled = false;
	
	//--activate the enemy
	enemy.SetActive(true);
	enemyScript.SendMessage("Restart");
	
	
	//enemyScript.SendMessage("Restart");
}

function Update () {

}

function GoalCompleted () {
	gameController.ShowDialogue("You've done it!");
	
	yield WaitForSeconds (3);
	
	//--show the end screen ui
	goalCompleteCanvas.GetComponent(Canvas).enabled = true;
}

function KeepPlaying() {
	//--when button pressed
	Debug.Log("Just keep playing");
	
	StartGame();
}

function ToMenu() {
	//--when button pressed
	Application.LoadLevel ("menu");
}

