#pragma strict

private var speed : float = 10;
public var explosion : GameObject;

function Start () {
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
		var exp = Instantiate(explosion, transform.position, transform.rotation);
		Destroy(gameObject);
		Destroy(exp,2);
	} 
	
	
}