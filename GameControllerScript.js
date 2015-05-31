#pragma strict
import UnityEngine.UI;

static var isPaused : boolean = false;
private var playerSpawn : GameObject;
private var DialogueCanvas2 : Canvas;
private var DialogueTextbox : Text;

function Start () {

	playerSpawn = GameObject.Find("PlayerSpawn");
	var playerInstance : GameObject = Instantiate(
		Resources.Load("Player", GameObject),
		Vector3(playerSpawn.transform.position.x, 0, playerSpawn.transform.position.z), 
		playerSpawn.transform.rotation);
		
	var DialogueCanvas2 : Canvas = Instantiate(
		Resources.Load("DialogueCanvas", Canvas));

				
	 DialogueCanvas2.GetComponent(CanvasGroup).alpha = 0;
	 
	 yield WaitForSeconds (2);
	 ShowDialogue("this is the start");
			
}

function Update () {
	if (Input.GetKeyDown ("p"))
	{
		Debug.Log("pressed");
		
		if(isPaused == false)
		{
			isPaused = true;
			
			var PausedCanvasInstance : Canvas = Instantiate(Resources.Load("PausedCanvas", Canvas));
			
			Debug.Log("setting to true");
			
		} else {
			Destroy(GameObject.Find("PausedCanvas(Clone)"));
			
			isPaused = false;
			
			Debug.Log("setting to false");
			
		}
		
		//PausedCanvas.enabled = isPaused;
		
	}
}

function ShowDialogue (DialogueText : String) {
	
	var DialogueInstance = GameObject.FindGameObjectWithTag("Dialogue");
	GameObject.Find("DialogueTextBox").GetComponent.<Text>().text = DialogueText;
	
	Debug.Log("say "+DialogueText);
	DialogueInstance.GetComponent(CanvasGroup).alpha = 1;
	
	yield WaitForSeconds (3);
	
	DialogueInstance.GetComponent(CanvasGroup).alpha = 0;
	
}

function GoalCompleted () {
	ShowDialogue("You've done it!");
	
	yield WaitForSeconds (2);
}