#pragma strict

//--for showing a canvas (maybe instructional text) which can be dismissed by pressing anything

public var amtOfSeconds : float = 1;

private var gameController : GameControllerScript;

function Start () {
	gameObject.SetActive(false);
	Invoke("Show",amtOfSeconds);
	
	//--find gameController so we can call functions
	gameController = GameObject.Find("GameController").GetComponent.<GameControllerScript>();
	
}

function Show () {
	gameObject.SetActive(true);
	gameController.PauseGame(true);
	Debug.Log("pause time = "+Time.time);
}

function Update () {

	if(Input.anyKey && (Time.time >= 1))
	{
		//--make sure this has been on screen at least 1 second before skipping
		Debug.Log("dismiss canvas");
		gameController.PauseGame(false);
		Destroy(gameObject);

	}
}
