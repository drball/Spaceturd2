#pragma strict

private var speed : float = 10;
public var explosion : GameObject;
private var player : GameObject;
private var playerScript : PlayerScript;

function Start () {
	player = GameObject.Find("Player");
	playerScript = player.GetComponent.<PlayerScript>();
	Destroy(gameObject,2);
}

function Update () {
	GetComponent.<Rigidbody>().velocity = transform.forward * speed;
}

function OnTriggerEnter(other: Collider) 
{
	//Debug.Log("enemy laser touched "+other);
	
	if(other.tag == "Player")
	{
		//--create explosion
		var exp = Instantiate(explosion, transform.position, transform.rotation);
		
		//--knock back player
		player.GetComponent.<Rigidbody>().AddRelativeForce (transform.forward * 20,ForceMode.Impulse);
		player.GetComponent.<Rigidbody>().AddRelativeTorque (0,50,0);
		
		//--clean up
		Destroy(gameObject);
		Destroy(exp,2);
	} 
	
	
}