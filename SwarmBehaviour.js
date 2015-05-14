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
	    renderer.material.color = Color.yellow;
	    lookAtTarget();
	
    }   
    if(distance > lookAtDistance)
    {
    	renderer.material.color = Color.green; 
    }
    if(distance < attackRange)
    {
		isItAttacking = true;
    	renderer.material.color = Color.red;
    	
    	if(distance >= minDistance)
    	{
    		moveToTarget ();
    	}	
		
    }
    if(isItAttacking)
    {
		renderer.material.color = Color.red;
    }
}
 
 
//--rotates closer towards a target
function lookAtTarget ()
{
	var rotation = Quaternion.LookRotation(target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
}
 
//--moves closer to a target
function moveToTarget ()
{
    
 
    transform.Translate(Vector3.forward * moveSpeed *Time.deltaTime);
}