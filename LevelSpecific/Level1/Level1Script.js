#pragma strict

private var gameController : GameControllerScript;
private var goalCompleteCanvas : GameObject;
private var enemy : GameObject;
private var enemyVfx : GameObject;
private var enemyScript : Component;
private var timesPlayed : int = 0;
private var cameraScript : CameraTrackPlayer;
private var scoreField : Text;
private var timeField : Text;
private var elapsedSeconds : int = 0;

public var escaping = false;


function Start () {

	//--get reference to gameController object so we can call functions
	gameController = GameObject.Find("GameController").GetComponent.<GameControllerScript>();
	
	goalCompleteCanvas = GameObject.Find("GoalCompleteCanvas");

	scoreField = GameObject.Find("ScoreField").GetComponent.<Text>();
	timeField = GameObject.Find("TimeField").GetComponent.<Text>();
	
	enemy = GameObject.Find("EnemyTurd");
	enemyScript = enemy.GetComponent(EnemyScript);
	enemyVfx = GameObject.Find("EnemyVFX");
	
	//--get camera so we can focus on enemy at end
	cameraScript = GameObject.Find("Main Camera").GetComponent.<CameraTrackPlayer>();
	
	StartLevel();
	
	//--begin the game - these variables are only set ONCE
	gameController.score = 0;
	gameController.UpdateScore();
	
	InvokeRepeating("TimedDialogue", 20,30);
	
	InvokeRepeating("LevelTimer",1,1);
	
}

function StartLevel() {
	//--this level can reset, load this again if it does
	goalCompleteCanvas.SetActive(false);
	scoreField.text = "000"; //--the score field shown at the end
	
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
	
	elapsedSeconds = 0;
	
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
	Debug.Log("score = "+gameController.score);
	scoreField.text = gameController.score.ToString();
	
	var minutes = Mathf.FloorToInt(elapsedSeconds / 60F);
	var seconds = Mathf.FloorToInt(elapsedSeconds - minutes * 60);

	timeField.text = String.Format("{0:0}:{1:00}", minutes, seconds); 
	
	goalCompleteCanvas.SetActive(true);
}

function KeepPlaying() {
	//--when button pressed
	Debug.Log("Just keep playing");
	
	StartLevel();
}

function ToMenu() {
	//--when button pressed
	Application.LoadLevel ("menu");
}

function TimedDialogue(){

	//--if enemy isn't currently visible, show some dialogue
	if((enemyVfx.GetComponent.<Renderer>().isVisible == false) && (escaping != true) && enemy.active ){
		gameController.ShowDialogue("You need to get to that turd and destroy it, fast!");
	}
	
}

function LevelTimer(){
	//--increase counter each second
	elapsedSeconds++;
}

