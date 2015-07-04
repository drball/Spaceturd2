#pragma strict

private var speed : float = 10;
public var explosion : GameObject;

function Start () {
	Destroy(gameObject,2);
}

function Update () {
	//transform.position.z += 4;
	GetComponent.<Rigidbody>().velocity = transform.forward * speed;
}

function fixedUpdate() {

	//transform.forward += Vector3(4,0,0);
	//transform.position.x += 5;
}

function OnTriggerEnter(other: Collider) 
{
	//Debug.Log("laser touched "+other);
	
	if(other.tag == "Player")
	{
		return;
	} else if(other.tag == "Collectable") {
		return;
	}
	
	if(other.name == "EnemyTurd")
	{
		other.SendMessage("hit",1);
		
	} else if(other.tag == "EnemyDropping") 
	{
		other.SendMessage("hit",1);
	}
	var exp = Instantiate(explosion, transform.position, transform.rotation);
	Destroy(gameObject);
	Destroy(exp,2);
}