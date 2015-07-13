#pragma strict


  
public var lookAtDistance : float = 6.5;
public var attackRange : float = 5;
public var moveSpeed = 3.0;
public var distance : float;

private var isAttacking = false;
private var player : GameObject;
private var target : GameObject;
private var turretVfx : GameObject;
private var fireFrom : GameObject;

function Start() {
	target = GameObject.Find("Player");
	turretVfx = GameObject.Find("TurretVFX");
	fireFrom = transform.Find("FireFrom").gameObject;
	
	
	InvokeRepeating("fire",1,3);
}
 
function Update () 
{
    distance = Vector3.Distance(target.transform.position, transform.position);
 
    if(distance <= lookAtDistance)
    {
	    
	    
	    lookAtTarget();
	    turretVfx.GetComponent.<Renderer>().material.color = Color.yellow;
	    
	    if((distance <= attackRange)){
	    	turretVfx.GetComponent.<Renderer>().material.color = Color.red;
	    	isAttacking = true;
	    }
	
    } else {
    	turretVfx.GetComponent.<Renderer>().material.color = Color.green; 
    	isAttacking = false;
	}   

}
 
 
function lookAtTarget ()
{
	var rotation = Quaternion.LookRotation(target.transform.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * moveSpeed);
}

function fire() {
	Debug.Log("fire");
	var bulletInstance : GameObject = Instantiate(Resources.Load("EnemyBullet", GameObject),
		Vector3(fireFrom.transform.position.x,fireFrom.transform.position.y,fireFrom.transform.position.z), 
		fireFrom.transform.rotation);
}