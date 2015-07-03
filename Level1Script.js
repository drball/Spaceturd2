#pragma strict

private var gameController : GameControllerScript;
private var goalCompleteCanvas : GameObject;
private var enemy : GameObject;
private var enemyScript : Component;
private var timesPlayed : int = 0;
private var cameraScript : CameraTrackPlayer;

function Start () {

	//--get reference to gameController object so we can call functions
	var gameControllerObj : GameObject = GameObject.Find("GameController");
	gameController = gameControllerObj.GetComponent(GameControllerScript);
	
	goalCompleteCanvas = GameObject.Find("GoalCompleteCanvas");
	//goalCompleteCanvas.GetComponent(Canvas).enabled = false;
	goalCompleteCanvas.SetActive(false);

	enemy = GameObject.Find("EnemyTurd");
	enemyScript = enemy.GetComponent(EnemyScript);
	
	//--get camera so we can focus on enemy at end
	cameraScript = GameObject.Find("Main Camera").GetComponent.<CameraTrackPlayer>();
	
	StartGame();
	
}

function StartGame() {
	goalCompleteCanvas.SetActive(false);
	
	//--activate the enemy
	enemy.SetActive(true);
	enemyScript.SendMessage("Restart");
	
	//--reset the camera script
	cameraScript.Start();
	
	//--clear anything spawned
	var enemyDroppings =  GameObject.FindGameObjectsWithTag ("EnemyDropping");
 
    for(var i = 0 ; i < enemyDroppings.length ; i ++) {
    	Destroy(enemyDroppings[i]);
 	}
	
	yield WaitForSeconds (2);
	
	if (timesPlayed == 0){
		gameController.ShowDialogue("We believe the giant turd came from the galactic rectum of Annus IX. God speed Major Plumber!");

	} else if (timesPlayed > 1){
		gameController.ShowDialogue("There's another giant turd on the rampage. Sorry Major, you have the crappest job in the world.");

	} else if (timesPlayed > 2){
		gameController.ShowDialogue("Another giant turd has arrived. Do your thing Major!");

		gameController.ShowPlayerDialogue("I'm getting sick of this shitty job. If only there was a way to escape...");

	} else if (timesPlayed > 3){

		gameController.ShowPlayerDialogue("What a shit day I'm having. I want to get out of here.");

	}
	
}

function Update () {

}

function GoalCompleted () {

	timesPlayed++;

	gameController.ShowDialogue("The turd is breaking up!");

	yield WaitForSeconds (3);
	
	gameController.ShowDialogue("Well done Major, you’ve saved us all!");
	
	yield WaitForSeconds (3);
	
	//--show the end screen ui
	//goalCompleteCanvas.GetComponent(Canvas).enabled = true;
	goalCompleteCanvas.SetActive(true);
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



