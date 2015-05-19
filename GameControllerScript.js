#pragma strict

static var isPaused : boolean = false;
private var playerSpawn : GameObject;

function Start () {

	playerSpawn = GameObject.Find("PlayerSpawn");
	var playerInstance : GameObject = Instantiate(
		Resources.Load("Player", GameObject),
		Vector3(playerSpawn.transform.position.x, 0, playerSpawn.transform.position.y), 
		playerSpawn.transform.rotation);
	
}

function Update () {

}