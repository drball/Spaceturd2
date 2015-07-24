#pragma strict

//--for showing a canvas (maybe instructional text) which can be dismissed by pressing anything

public var amtOfSeconds : float = 0.5;
public var secondsOnScreen : int = 1; //--how many seconds before we can click this off
private var endTime : int; 

private var gameController : GameControllerScript;

function Start () {
	gameObject.SetActive(false);
	Invoke("Show",amtOfSeconds);
	
	//--find gameController so we can call functions
	gameController = GameObject.Find("GameController").GetComponent.<GameControllerScript>();
	
}

function Show () {
	gameObject.SetActive(true);
	endTime = secondsOnScreen + Time.time;
	gameController.PauseGame(true);
	Debug.Log("pause time = "+Time.time);
}

function Update () {

	if(Input.anyKey && (Time.realtimeSinceStartup >= endTime))
	{
		//--make sure this has been on screen at least 1 second before skipping
		Debug.Log("dismiss canvas");
		gameController.PauseGame(false);
		Destroy(gameObject);

	}
}


