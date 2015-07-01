#pragma strict
private var target : GameObject;
private var cameraHeight : float = 18;
private var followSpeedStart : float = 100;
private var followSpeed : float = followSpeedStart;

function Start () {

	transform.rotation = Quaternion.Euler(80, 0, 0);
	transform.position.y = cameraHeight;
	
	FollowPlayer();
	
	transform.position.x = target.transform.position.x;
	transform.position.z = target.transform.position.z - 3.2;
	transform.position.y = cameraHeight;
}

function Update () {
	
	//--to follow the object directly
//	transform.position.x = target.transform.position.x;
//	transform.position.z = target.transform.position.z - 3.2;
//	transform.position.y = 18;
	
	//var camerapos = transform.position - target.transform.position;
	
	//--to lerp to the object quickly
	transform.position = Vector3.Lerp(transform.position, Vector3(target.transform.position.x,cameraHeight,target.transform.position.z - 3.2), followSpeed * Time.deltaTime);

}


function FixedUpdate () {
	if(Input.GetKey("a"))
	{
		followSpeed = 1;
		FollowEnemy();

		//--now need to reset camera speed back somewhere
	}
}

function FollowEnemy() {
	target = GameObject.FindGameObjectWithTag("Enemy");
}

function FollowPlayer() {
	target = GameObject.FindGameObjectWithTag("Player");
}