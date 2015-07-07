#pragma strict


  
public var lookAtDistance : float = 6.5;
public var attackRange : float = 5;
public var moveSpeed = 3.0;
public var distance : float;

private var isAttacking = false;
private var player : GameObject;
private var target : Transform;  

function Start() {
	player = GameObject.Find("Player");
	
	target = player.transform;
}
 
function Update () 
{
    distance = Vector3.Distance(target.position, transform.position);
 
    if(distance <= lookAtDistance)
    {
	    
	    GetComponent.<Renderer>().material.color = Color.yellow;
	    lookAtTarget();
	    
	    if((distance <= attackRange)){
	    	GetComponent.<Renderer>().material.color = Color.red;
	    	isAttacking = true;
	    }
	    
	
    } else {
    	GetComponent.<Renderer>().material.color = Color.green; 
    	isAttacking = false;
	}   

}
 
 
function lookAtTarget ()
{
	var rotation = Quaternion.LookRotation(target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * moveSpeed);
}