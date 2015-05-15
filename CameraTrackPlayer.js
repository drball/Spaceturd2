#pragma strict
private var player : GameObject;

function Start () {
	//player = GameObject.Find("Player");
	player = GameObject.FindGameObjectWithTag("Player");
	
	
}

function Update () {
	transform.position.x = player.transform.position.x;
	transform.position.z = player.transform.position.z;
	
}


