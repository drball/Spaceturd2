#pragma strict
import UnityEngine.UI;

static var isPaused : boolean = false;
private var DialogueCanvas : Canvas;
private var DialogueTextbox : Text;
private var scoreText : Text;
public var score : int = 0;


function Start () {
		
	//--create the dialogue, but initially disable it
	var DialogueCanvas : Canvas = Instantiate(
		Resources.Load("DialogueCanvas", Canvas));

	DialogueCanvas.GetComponent(Canvas).enabled = false;
	
	Debug.Log("starting. score = "+score);
	scoreText = GameObject.Find("ScoreText").GetComponent.<Text>();
	
	//--load the score if there is one
	if(PlayerPrefs.GetInt("score")){
		score = PlayerPrefs.GetInt("score");
		Debug.Log("loaded existing score");
	}
	scoreText.text = score.ToString();
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

	Debug.Log("Show dialogue");
	
	var DialogueInstance = GameObject.FindGameObjectWithTag("Dialogue");
	GameObject.Find("DialogueTextBox").GetComponent.<Text>().text = dialogueText;
	
	DialogueInstance.GetComponent(Canvas).enabled = true;
	
	//--show correct avatar
	GameObject.Find("AvatarDefault").GetComponent.<Image>().enabled = true;
	GameObject.Find("AvatarPlayer").GetComponent.<Image>().enabled = false;
	
	yield WaitForSeconds (3);
	
	DialogueInstance.GetComponent(Canvas).enabled = false;
	
}

function ShowPlayerDialogue (dialogueText : String) {

	Debug.Log("Show player dialogue");
	
	var DialogueInstance = GameObject.FindGameObjectWithTag("Dialogue");
	GameObject.Find("DialogueTextBox").GetComponent.<Text>().text = dialogueText;
	
	DialogueInstance.GetComponent(Canvas).enabled = true;

	//--show correct avatar
	GameObject.Find("AvatarDefault").GetComponent.<Image>().enabled = false;
	GameObject.Find("AvatarPlayer").GetComponent.<Image>().enabled = true;
	
	yield WaitForSeconds (3);
	
	DialogueInstance.GetComponent(Canvas).enabled = false;
	
}

function IncreaseScore(amt : int) {
	score += amt;
	UpdateScore(score);
	
}

function GoToLevel(destination:String){

	//--save score so we can use it next level
	PlayerPrefs.SetInt("score", score);
	
	//--switch level
	Application.LoadLevel (destination);
}

function UpdateScore(newScore : int){
	if(newScore){
		score = newScore;
	}
	scoreText.text = score.ToString();
	//Debug.Log("Score is "+score);
	
}



