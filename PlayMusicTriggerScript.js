#pragma strict

//--fades out the current music (on gamecontroller) and plays this instead
var newMusic : AudioClip; //--the music to play instead
private var fadeSpeed : float = 1;
private var gameController : GameControllerScript;
private var audioController : AudioSource;

function Start () {
	//--get reference to gamecontroller object so we can get the current music
	gameController = GameObject.Find("GameController").GetComponent.<GameControllerScript>();
	
	audioController = gameController.GetComponent.<AudioSource>();
	
}

function OnTriggerEnter(other: Collider) 
{
	
	if(other.tag == "Player")
	{
		//--only switch tracks if the music is different
		if(audioController.clip != newMusic){
			Debug.Log("play new music");
			ReplaceMusic();
		}
	}
}

function ReplaceMusic (){
	
	//--fade current music out
	while(audioController.volume>0){
       audioController.volume -= Time.deltaTime * fadeSpeed;
       Debug.Log("fading"+audioController.volume);
       yield;
    }
    Debug.Log("faded out");
    
    //--plays new music
    audioController.clip = newMusic;
    audioController.volume = 1;
    audioController.Play();
}