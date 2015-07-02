#pragma strict
private var target : GameObject;
private var cameraHeight : float = 18;
private var followSpeedInitial : float = 100;
private var followSpeed : float = followSpeedInitial;
private var cameraDistance : float;

function Start () {

	transform.rotation = Quaternion.Euler(80, 0, 0);
	transform.position.x = target.transform.position.x;
	transform.position.z = target.transform.position.z - 3.2;
	transform.position.y = cameraHeight;
	SwitchToTarget("Player");
}

function Update () {
	
	//--to follow the object directly
//	transform.position.x = target.transform.position.x;
//	transform.position.z = target.transform.position.z - 3.2;
//	transform.position.y = 18;
	
	//var camerapos = transform.position - target.transform.position;
	
	//--to lerp to the object 
	transform.position = Vector3.Lerp(transform.position, Vector3(target.transform.position.x,cameraHeight,target.transform.position.z - 3.2), followSpeed * Time.deltaTime);
	cameraDistance = Vector3.Distance(target.transform.position, transform.position) - cameraHeight;

}


function FixedUpdate () {
	if(Input.GetKey("c") && cameraDistance < 1)
	{
		followSpeed = 4;
		
		//Debug.Log("current target is "+target.name);
	
		if(target.name == "EnemyTurd"){
			SwitchToTarget("Player");
		}else{
			SwitchToTarget("EnemyTurd");
		}
	
		Invoke("ResetFollowSpeed", 1.5);
	}
}

function SwitchToTarget(newTargetName : String) {
	target = GameObject.FindGameObjectWithTag(newTargetName);
}

function ResetFollowSpeed() {
	followSpeed = followSpeedInitial;
}