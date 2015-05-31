#pragma strict
public var speed : float = 40;
public var rotationSpeed : float = 2.5;

private var nextFire : float;
private var ThrustParticle : ParticleSystem;
private var fireFrom : GameObject;
private var gameController : GameControllerScript;

public var bulletDelay : float;
//public var bulletType : GameObject;

function Start () {
	//ThrustParticle.enableEmission = false;
	//ThrustParticle.emissionRate = 10;
	fireFrom = GameObject.Find("FireFrom");
	
	var gameControllerObj : GameObject = GameObject.Find("GameController");
	gameController = gameControllerObj.GetComponent(GameControllerScript);
}

function Update () {

}


function FixedUpdate () {


	if(Input.GetKey("left") && (gameController.isPaused == false))
	{
		GetComponent.<Rigidbody>().AddRelativeTorque (0,-rotationSpeed,0);


	} else if(Input.GetKey("right") && (gameController.isPaused == false))
	{
		GetComponent.<Rigidbody>().AddRelativeTorque (0,rotationSpeed,0);

	} 
	
	if(Input.GetKey("up") && (gameController.isPaused == false))
	{

		GetComponent.<Rigidbody>().AddRelativeForce (Vector3.forward * speed);
		
		//ThrustParticle.enableEmission = true;
		//ThrustParticle.emissionRate = 55;

	} else if (Input.GetKey("down") && (gameController.isPaused == false))
	{ 
		
		GetComponent.<Rigidbody>().AddRelativeForce (Vector3.back * speed);
	}else {
		//ThrustParticle.enableEmission = false;
		//ThrustParticle.emissionRate = 10;
	}
	
	//FIRE WEAPON
	if(Input.GetKey("space") && (gameController.isPaused == false) && (Time.time >= nextFire) )
	{
		nextFire = Time.time + bulletDelay;
		var bulletInstance : GameObject = Instantiate(Resources.Load("Bullet", GameObject),
			Vector3(fireFrom.transform.position.x,0,fireFrom.transform.position.z), 
			transform.rotation);
	}
	
	var vel = GetComponent.<Rigidbody>().velocity; 
	var speed = vel.magnitude;
	//Debug.Log("Player speed = "+speed);
	
}


function OnTriggerEnter(other: Collider) 
{
	if (other.tag == "Helper")
	{
	    Debug.Log("Have hit a helper = "+other.name);
	    return;
	}

	if (other.name == "Trigger1")
	{
	  
	    gameController.ShowDialogue("Have hit trigger1 yeah!");
	    return;
	}

}

