#pragma strict
private var player : GameObject;

function Start () {

	player = GameObject.FindGameObjectWithTag("Player");
	
	//Debug.Log("players xpos = "+player.transform.position.x);
	
	transform.rotation = Quaternion.Euler(80, 0, 0);
	transform.position.y = 18;
}

function Update () {
	//player = GameObject.FindGameObjectWithTag("Player");
	
	transform.position.x = player.transform.position.x;
	transform.position.z = player.transform.position.z - 3.2;
	transform.position.y = 18;
	
	var camerapos = transform.position - player.transform.position;
	//Debug.Log(camerapos);
	//Debug.Log("player s.activespeed = "+player.speed);
}


