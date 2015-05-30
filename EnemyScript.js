#pragma strict

public var minPlayerDistance : int;
public var health : int = 100;

private var player : GameObject;
private var target : Transform;
private var vfx : GameObject;
//private var defaultMat 

function Start () {
	player = GameObject.Find("Player");
	target = player.transform;	
	
	vfx = GameObject.Find("EnemyVFX");
}

function Update () {
	var distance = Vector3.Distance(target.position, transform.position);
}

function hit(damageAmt : int){
	Debug.Log("Enemy is hit");
	
	vfx.GetComponent.<Renderer>().material.color = Color.red;
	//Debug.Log("vfx = "+vfx);
	
	yield WaitForSeconds (.1);
	vfx.GetComponent.<Renderer>().material.color = Color.white;
	
}