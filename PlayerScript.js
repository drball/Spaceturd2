#pragma strict
public var speed : float = 40;
public var rotationSpeed : float = 2.5;
private var gameController : GameControllerScript;
private var nextFire : float;
private var ThrustParticle : ParticleSystem;
private var fireFrom : GameObject;

public var bulletDelay : float;
//public var bulletType : GameObject;



function Start () {
	//ThrustParticle.enableEmission = false;
	//ThrustParticle.emissionRate = 10;
	fireFrom = GameObject.Find("FireFrom");
}

function Update () {

}


function FixedUpdate () {


	if(Input.GetKey("left") && (gameController.isPaused == false))
	{
		rigidbody.AddRelativeTorque (0,-rotationSpeed,0);


	} else if(Input.GetKey("right") && (gameController.isPaused == false))
	{
		rigidbody.AddRelativeTorque (0,rotationSpeed,0);

	} 
	
	if(Input.GetKey("up") && (gameController.isPaused == false))
	{

		rigidbody.AddRelativeForce (Vector3.forward * speed);
		
		//ThrustParticle.enableEmission = true;
		//ThrustParticle.emissionRate = 55;

	} else if (Input.GetKey("down") && (gameController.isPaused == false))
	{ 
		
		rigidbody.AddRelativeForce (Vector3.back * speed);
	}else {
		//ThrustParticle.enableEmission = false;
		//ThrustParticle.emissionRate = 10;
	}
	
	//FIRE WEAPON
	if(Input.GetKey("space") && (gameController.isPaused == false) && (Time.time >= nextFire) )
	{
		nextFire = Time.time + bulletDelay;
		//var bulletInstance = Instantiate(bulletType,Vector3(fireFrom.transform.position.x,0,fireFrom.transform.position.z), transform.rotation);
		var bulletInstance : GameObject = Instantiate(Resources.Load("Bullet", GameObject),Vector3(fireFrom.transform.position.x,0,fireFrom.transform.position.z), transform.rotation);
	}
	
}


function OnTriggerEnter(other: Collider) 
{
	if (other.tag == "Helper")
	{
	    Debug.Log("Have hit a helper = "+other.name);
	    return;
	}

	

}

