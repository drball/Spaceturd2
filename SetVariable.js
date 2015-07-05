#pragma strict
private var levelController : Level1Script;


function Start () {
	//--get reference to levelController object so we can call local functions
	levelController = GameObject.Find("LevelController").GetComponent.<Level1Script>();
}

function OnTriggerEnter(other: Collider) 
{

	if (other.tag == "Player"){
		levelController.escaping = true;
	}
}