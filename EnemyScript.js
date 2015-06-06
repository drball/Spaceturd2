#pragma strict

public var minPlayerDistance : int;
public var health : int = 2;

private var player : GameObject;
private var target : Transform;
private var vfx : GameObject;
private var defaultMat;
private var isAlive : boolean = true;
private var distanceToPlayer : float;
private var enemyMovementScript : MoveToWaypoint;


function Start () {
	player = GameObject.Find("Player");
	target = player.transform;	
	
	vfx = GameObject.Find("EnemyVFX");
	
	defaultMat = vfx.GetComponent.<Renderer>().material.color;
}

function Update () {
	//--calculate distance to target (player)
	distanceToPlayer = Vector3.Distance(target.position, transform.position);

}

function hit(damageAmt : int){
	Debug.Log("Enemy is hit");
	
	vfx.GetComponent.<Renderer>().material.color = Color.red;
	//Debug.Log("vfx = "+vfx);
	
	yield WaitForSeconds (.1);
	vfx.GetComponent.<Renderer>().material.color = defaultMat;
	
	health--;
	
	if((health <= 0) && (isAlive == true) ){
		//--die
		enemyMovementScript.moving = false;
		isAlive = false;
		
		var exp1helper : GameObject = GameObject.Find("Exp1Helper");
		var exp2helper : GameObject = GameObject.Find("Exp2Helper");
		var exp3helper : GameObject = GameObject.Find("Exp3Helper");
		var exp4helper : GameObject = GameObject.Find("Exp4Helper");
		var exp5helper : GameObject = GameObject.Find("Exp5Helper");
		var exp6helper : GameObject = GameObject.Find("Exp6Helper");
		
		var exp = Instantiate(Resources.Load("Explosion", GameObject), exp1helper.transform.position, transform.rotation);

		yield WaitForSeconds (.25);
		
		var exp2 = Instantiate(Resources.Load("Explosion", GameObject), exp6helper.transform.position, transform.rotation);

		yield WaitForSeconds (.25);
		
		var exp3 = Instantiate(Resources.Load("Explosion", GameObject), exp3helper.transform.position, transform.rotation);
		
		yield WaitForSeconds (.25);
		
		var exp4 = Instantiate(Resources.Load("Explosion", GameObject), exp4helper.transform.position, transform.rotation);

		yield WaitForSeconds (.25);
		
		var exp5 = Instantiate(Resources.Load("Explosion", GameObject), exp3helper.transform.position, transform.rotation);

		yield WaitForSeconds (.25);
		
		var exp6 = Instantiate(Resources.Load("Explosion", GameObject), exp6helper.transform.position, transform.rotation);

		Destroy(exp,2);
		Destroy(exp2,2);
		Destroy(exp3,2);
		Destroy(exp4,2);
		Destroy(exp5,2);
		Destroy(exp6,2);
		yield WaitForSeconds (.25);
		
		var exp7 = Instantiate(Resources.Load("Explosion", GameObject), exp1helper.transform.position, transform.rotation);

		yield WaitForSeconds (.25);
		
		var exp8 = Instantiate(Resources.Load("Explosion", GameObject), exp6helper.transform.position, transform.rotation);

		yield WaitForSeconds (.25);
		
		var exp9 = Instantiate(Resources.Load("Explosion", GameObject), exp3helper.transform.position, transform.rotation);
		
		yield WaitForSeconds (.25);
		
		var exp10 = Instantiate(Resources.Load("Explosion", GameObject), exp4helper.transform.position, transform.rotation);

		yield WaitForSeconds (.25);
		
		var exp11 = Instantiate(Resources.Load("Explosion", GameObject), exp5helper.transform.position, transform.rotation);

		Destroy(vfx);
		
		yield WaitForSeconds (.25);
		
		var exp12 = Instantiate(Resources.Load("Explosion", GameObject), exp3helper.transform.position, transform.rotation);

		yield WaitForSeconds (.25);
		
		var exp13 = Instantiate(Resources.Load("Explosion", GameObject), exp1helper.transform.position, transform.rotation);

		Destroy(exp7,2);
		Destroy(exp8,2);
		Destroy(exp9,2);
		Destroy(exp10,2);
		Destroy(exp11,2);
		Destroy(exp12,2);
		Destroy(exp13,2);
		
		
		Destroy(gameObject,3);
		
	}
	
}
