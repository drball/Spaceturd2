#pragma strict
public var speed : float = 40;
public var rotationSpeed : float = 2.5;

private var nextFire : float;
private var ThrustParticle : GameObject;
private var ThrustParticleFar : GameObject;
private var ParticleTrail : GameObject;
private var fireFrom : GameObject;
private var gameController : GameControllerScript;

private var Thrust : GameObject;

public var bulletDelay : float;
//public var bulletType : GameObject;

function Start () {
	

	fireFrom = GameObject.Find("FireFrom");
	
	//--find gameController so we can call functions
	gameController = GameObject.Find("GameController").GetComponent.<GameControllerScript>();
	
	Thrust = GameObject.Find("Thrust");
	Thrust.active = false;
	
	ThrustParticle = GameObject.Find("ParticleNear");
	ThrustParticleFar = GameObject.Find("ParticleFar");
	ParticleTrail = GameObject.Find("ParticleTrail");
	
//	ThrustParticle.GetComponent.<ParticleSystem>().Stop();
//	ThrustParticleFar.GetComponent.<ParticleSystem>().Stop();

	// Accelerate out of the last portal
	GetComponent.<Rigidbody>().AddRelativeForce(Vector3.forward * (speed/2), ForceMode.Impulse);

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
		//Thrust.active = true;
		ParticleTrail.GetComponent.<ParticleSystem>().emissionRate = 100;

	} else if (Input.GetKey("down") && (gameController.isPaused == false))
	{ 
		
		GetComponent.<Rigidbody>().AddRelativeForce (Vector3.back * speed);
	}else {
//		ThrustParticle.GetComponent.<ParticleSystem>().Stop();
//		ThrustParticleFar.GetComponent.<ParticleSystem>().Stop();
		//Thrust.active = false;
		ParticleTrail.GetComponent.<ParticleSystem>().emissionRate = 0;
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

//	if (other.tag == "Portal")
//	{
//	  
//	    gameController.ShowDialogue("Have hit portal yeah!");
//	    
//	    //--get a variable from the portal for where to go next
//	    Debug.Log("going to.... ");
//	    
//	    //--make portal animate
//	    return;
//	}

}

