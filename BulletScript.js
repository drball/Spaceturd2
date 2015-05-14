#pragma strict

private var speed : float = 10;
public var explosion : GameObject;

function Start () {
	
}

function Update () {
	//transform.position.z += 4;
	rigidbody.velocity = transform.forward * speed;
}

function fixedUpdate() {

	//transform.forward += Vector3(4,0,0);
	//transform.position.x += 5;
}

function OnTriggerEnter(other: Collider) 
{
	//Debug.Log("laser touched "+other);
	
	if (other.tag == "Player")
	{
	    //Debug.Log("hit player");
	    return;
	}
	
	if(other.gameObject.name == "Asteroid-blue")
	{
		Debug.Log("Hit blue");
		return;
	}
	if(other.name == "Enemy-turd")
	{
		other.SendMessage("hit",5);
	}
	var exp = Instantiate(explosion, transform.position, transform.rotation);
	Destroy(gameObject);
	Destroy(exp,2);
}