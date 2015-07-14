#pragma strict


  
public var lookAtDistance : float = 6.6;
public var attackRange : float = 6.3;
public var moveSpeed = 3.0;
public var distance : float;
public var fireRate : float = 1.8;

private var isAttacking = false;
private var player : GameObject;
private var target : GameObject;
private var turretVfx : GameObject;
private var fireFrom : GameObject;

function Start() {
	target = GameObject.Find("Player");
	turretVfx = GameObject.Find("TurretVFX");
	fireFrom = transform.Find("FireFrom").gameObject;
	
	
	InvokeRepeating("fire",0,fireRate);
}
 
function Update () 
{
    distance = Vector3.Distance(target.transform.position, transform.position);
 
    if(distance <= lookAtDistance)
    {
	    
	    //Debug.Log("look. distance = "+distance+" should be less than "+lookAtDistance);
	    lookAtTarget();
	    //turretVfx.GetComponent.<Renderer>().material.color = Color.yellow;
	    
	    if((distance <= attackRange)){
	    	//Debug.Log("attack. distance = "+distance+" should be less than "+attackRange);
	    	//turretVfx.GetComponent.<Renderer>().material.color = Color.red;
	    	isAttacking = true;
	    }
	
    } else {
    	//turretVfx.GetComponent.<Renderer>().material.color = Color.green; 
    	isAttacking = false;
	}   

}
 
 
function lookAtTarget ()
{
	var rotation = Quaternion.LookRotation(target.transform.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * moveSpeed);
}

function fire() {
	
	//--this is invoked every few seconds
	if (isAttacking) {
		//Debug.Log("fire");
		var bulletInstance : GameObject = Instantiate(Resources.Load("EnemyBullet", GameObject),
			Vector3(fireFrom.transform.position.x,fireFrom.transform.position.y,fireFrom.transform.position.z), 
			fireFrom.transform.rotation);
	}
}