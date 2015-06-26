#pragma strict
public var destination : String;
private var portalRing : Transform;
private var portalShockwave : Transform;
private var player : GameObject;
private var fadeTime : float;
private var fadingScript : FadingScript;

function Start () {
	portalRing = transform.Find("SpacePortal__ring"); //--have to search the transform for subobjects
	portalShockwave = transform.Find("ShockwaveParticles");
	
	player = GameObject.Find("Player");
	
	var gameControllerObj : GameObject = GameObject.Find("GameController");
	fadingScript = gameControllerObj.GetComponent(FadingScript);
}

function Update () {
	Debug.Log(Time.time);
}

function OnTriggerEnter(other: Collider) {
	if ((other.tag == "Player") && Time.time > 2){
		ActivateAnim();		
	}
}

function ActivateAnim () {
	Debug.Log("Going to "+destination);
	//portalRing.position.x = 100;
	GetComponent.<Rigidbody>().AddRelativeTorque(0,-50,0);
	portalRing.GetComponent.<Rigidbody>().AddTorque(0,50,0);
	
	yield WaitForSeconds (0.25);
	
	portalShockwave.gameObject.SetActive(true);
	player.SetActive(false);

	fadeTime = fadingScript.BeginFade(1);
	
	yield WaitForSeconds (fadeTime + 1);
	
	Application.LoadLevel (destination);
}