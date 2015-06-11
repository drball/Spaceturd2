#pragma strict
public var destination : String;
private var portalRing : Transform;
private var portalShockwave : Transform;
private var player : GameObject;

function Start () {
	portalRing = transform.Find("SpacePortal__ring"); //--have to search the transform for subobjects
	portalShockwave = transform.Find("ShockwaveParticles");
	
	player = GameObject.Find("Player");
}

function Update () {

}

function OnTriggerEnter(other: Collider) {
	if (other.tag == "Player"){
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
	//GetComponent.<Rigidbody>().AddRelativeTorque(0,50,0);
	
}