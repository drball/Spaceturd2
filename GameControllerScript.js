#pragma strict
import UnityEngine.UI;

static var isPaused : boolean = false;
private var DialogueCanvas : Canvas;
private var DialogueTextbox : Text;

function Start () {
		
	//--create the dialogue, but initially disable it
	var DialogueCanvas : Canvas = Instantiate(
		Resources.Load("DialogueCanvas", Canvas));

	 DialogueCanvas.GetComponent(Canvas).enabled = false;

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

function ShowDialogue (dialogueText : String) {
	
	var DialogueInstance = GameObject.FindGameObjectWithTag("Dialogue");
	GameObject.Find("DialogueTextBox").GetComponent.<Text>().text = dialogueText;
	
	DialogueInstance.GetComponent(Canvas).enabled = true;
	
	yield WaitForSeconds (3);
	
	DialogueInstance.GetComponent(Canvas).enabled = false;
	
}

function ShowPlayerDialogue (dialogueText : String) {
	
	var DialogueInstance = GameObject.FindGameObjectWithTag("Dialogue");
	GameObject.Find("DialogueTextBox").GetComponent.<Text>().text = dialogueText;
	
	Debug.Log("Player says this!");
	
	DialogueInstance.GetComponent(Canvas).enabled = true;
	
	yield WaitForSeconds (3);
	
	DialogueInstance.GetComponent(Canvas).enabled = false;
	
}

