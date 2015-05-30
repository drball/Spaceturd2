#pragma strict


  
public var lookAtDistance : float = 25.0;
public var attackRange : float = 20.0;
public var moveSpeed = 5.0;
public var damping = 6.0;
public var distance : float;
public var minDistance : float = 10;

private var isItAttacking = false;
private var player : GameObject;
private var target : Transform;  

function Start() {
	player = GameObject.Find("Player");
	
	target = player.transform;
}
 
function Update () 
{
    distance = Vector3.Distance(target.position, transform.position);
 
    if(distance < lookAtDistance)
    {
	    isItAttacking = false;
	    GetComponent.<Renderer>().material.color = Color.yellow;
	    lookAtTarget();
	
    }   
    if(distance > lookAtDistance)
    {
    	GetComponent.<Renderer>().material.color = Color.green; 
    }
    if((distance < attackRange) && (distance >= minDistance))
    {
		moveToTarget ();
    }
    if(isItAttacking)
    {
		GetComponent.<Renderer>().material.color = Color.red;
    }
}
 
 
function lookAtTarget ()
{
	var rotation = Quaternion.LookRotation(target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
}
 
function moveToTarget ()
{
    isItAttacking = true;
    GetComponent.<Renderer>().material.color = Color.red;
 
    transform.Translate(Vector3.forward * moveSpeed *Time.deltaTime);
}