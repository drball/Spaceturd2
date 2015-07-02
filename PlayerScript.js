#pragma strict
private var speed : float = 40;
private var rotationSpeed : float = 2.5;

private var nextFire : float;
private var ThrustParticle : GameObject;
private var ThrustParticleFar : GameObject;
private var ParticleTrail : GameObject;
private var fireFrom : GameObject;
private var gameController : GameControllerScript;

private var bulletDelay : float = 0.4;

function Start () {
	

	fireFrom = GameObject.Find("FireFrom");
	
	//--find gameController so we can call functions
	gameController = GameObject.Find("GameController").GetComponent.<GameControllerScript>();
	
//	Thrust = GameObject.Find("Thrust");
//	Thrust.active = false;
	
	ThrustParticle = GameObject.Find("ParticleNear");
	ThrustParticleFar = GameObject.Find("ParticleFar");
	ParticleTrail = GameObject.Find("ParticleTrail");
	
//	ThrustParticle.GetComponent.<ParticleSystem>().Stop();
//	ThrustParticleFar.GetComponent.<ParticleSystem>().Stop();

	// Accelerate out of the last portal
	GetComponent.<Rigidbody>().AddRelativeForce(Vector3.forward * (speed/2), ForceMode.Impulse);

}


function FixedUpdate () {

	var moveHorizontal : float= Input.GetAxis ("Horizontal");
    var moveVertical : float= Input.GetAxis ("Vertical");
    
    if(gameController.isPaused == false){
    
		if((moveHorizontal < 0) || Input.GetKey("a"))
		{
			GetComponent.<Rigidbody>().AddRelativeTorque (0,-rotationSpeed,0);


		} else if((moveHorizontal > 0) || Input.GetKey("d"))
		{
			GetComponent.<Rigidbody>().AddRelativeTorque (0,rotationSpeed,0);

		} 
		
		if ((moveVertical > 0) || Input.GetKey("w"))
		{

			GetComponent.<Rigidbody>().AddRelativeForce (Vector3.forward * speed);
	
			ParticleTrail.GetComponent.<ParticleSystem>().emissionRate = 100;

		} else if ((moveVertical < 0) || Input.GetKey("s"))
		{ 
			
			GetComponent.<Rigidbody>().AddRelativeForce (Vector3.back * speed);
		}else {

			ParticleTrail.GetComponent.<ParticleSystem>().emissionRate = 0;
		}
		
		//FIRE WEAPON
		if((Input.GetKey("space") || Input.GetKey(KeyCode.RightControl)) && (Time.time >= nextFire) )
		{
			nextFire = Time.time + bulletDelay;
			var bulletInstance : GameObject = Instantiate(Resources.Load("Bullet", GameObject),
				Vector3(fireFrom.transform.position.x,0,fireFrom.transform.position.z), 
				transform.rotation);
		}
		
		//var vel = GetComponent.<Rigidbody>().velocity; 
		//var speed = vel.magnitude;
	}

	
}




