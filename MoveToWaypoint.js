#pragma strict

public var target1 : GameObject;
public var target2 : GameObject;
public var target3 : GameObject;
public var target4 : GameObject;
public var target5 : GameObject;
public var target6 : GameObject;

public var moveSpeed : float = 5.0f;
public var rotateSpeed : float = 6.0f;
public var distanceToTarget : float;
public var currentTargetNum : int = 1;

private var currentTarget : GameObject;
static var moving : boolean = false;

function Start () {
	currentTarget = target1;
}

function Update () {

	if(moving == true){

		distanceToTarget = Vector3.Distance(currentTarget.transform.position, transform.position);
		
		if(distanceToTarget > 2)
	    {

		    lookAtTarget();
		    moveToTarget();
		
	    }else {
	    	//--switch to next target
	    	currentTargetNum++;
	    	if(currentTargetNum>6){
	    		currentTargetNum = 1;
	    	}
	    	
	    	if(currentTargetNum == 1){
	    		currentTarget = target1;
	    	}else if(currentTargetNum == 2){
	    		currentTarget = target2;
	    	}else if (currentTargetNum == 3){
	    		currentTarget = target3;
	    	}else if (currentTargetNum == 4){
	    		currentTarget = target4;
	    	}else if (currentTargetNum == 5){
	    		currentTarget = target5;
	    	}else if (currentTargetNum == 6){
	    		currentTarget = target6;
	    	}
	    	
	    }
    }
}

//--rotates closer towards a target
function lookAtTarget ()
{
	var rotation = Quaternion.LookRotation(currentTarget.transform.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * rotateSpeed);
}
 
//--moves closer to a target
function moveToTarget ()
{
    transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
}