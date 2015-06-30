#pragma strict
private var target : GameObject;

function Start () {

	transform.rotation = Quaternion.Euler(80, 0, 0);
	transform.position.y = 18;
	
	FollowPlayer();
}

function Update () {
	
	transform.position.x = target.transform.position.x;
	transform.position.z = target.transform.position.z - 3.2;
	transform.position.y = 18;
	
	var camerapos = transform.position - target.transform.position;

}


function FixedUpdate () {
	if(Input.GetKey("a"))
	{
		FollowEnemy();
	}
}

function FollowEnemy() {
	target = GameObject.FindGameObjectWithTag("Enemy");
}

function FollowPlayer() {
	target = GameObject.FindGameObjectWithTag("Player");
}