#pragma strict

/* ====================================================
Spins a portal when it's touched, then loads new destination
======================================================= */

public var destination : String;
public var activePortal : boolean = true;

private var portalRing : Transform;
private var portalShockwave : Transform;
private var player : GameObject;
private var fadeTime : float;
private var fadingScript : FadingScript;
private var gameController : GameControllerScript;


function Start () {
	portalRing = transform.Find("SpacePortal__ring"); //--have to search the transform for subobjects
	portalShockwave = transform.Find("ShockwaveParticles");
	
	player = GameObject.Find("Player");
	
	var gameControllerObj : GameObject = GameObject.Find("GameController");
	gameController = gameControllerObj.GetComponent.<GameControllerScript>();
	fadingScript = gameControllerObj.GetComponent.<FadingScript>();
	
}

function OnTriggerEnter(other: Collider) {
	//--if player going through portal
	if ((other.tag == "Player") && (Time.time > 2) && (activePortal == true)) {
		Debug.Log("Going to "+destination);

		GetComponent.<Rigidbody>().AddRelativeTorque(0,-50,0);
		portalRing.GetComponent.<Rigidbody>().AddTorque(0,50,0);
		
		yield WaitForSeconds (0.25);
		
		portalShockwave.gameObject.SetActive(true);
		player.SetActive(false);

		fadeTime = fadingScript.BeginFade(1);
		
		yield WaitForSeconds (fadeTime + 1);
		
		gameController.GoToLevel(destination);	
	}
}

