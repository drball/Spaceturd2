#pragma strict

public var minPlayerDistance : int;
public var startHealth : int = 2;
public var health : int = startHealth;

private var player : GameObject;
private var vfx : GameObject;

private var restartPoint : Transform;
private var target : Transform;

private var defaultMat;
private var isAlive : boolean = true;
private var distanceToPlayer : float;

private var enemyMovementScript : MoveToWaypoint;
private var gameController : GameControllerScript;

private var levelController : Component;


function Start () {

	//--get reference to gamecomtroller object so we can call functions
	gameController = GameObject.Find("GameController").GetComponent.<GameControllerScript>();
	
	//--get reference to levelController object so we can call local functions
	levelController = GameObject.Find("LevelController").GetComponent(Level1Script);
		
	player = GameObject.Find("Player");
	target = player.transform;	
	
	restartPoint = GameObject.Find("EnemySpawnHelper").transform;
	
	vfx = GameObject.Find("EnemyVFX");
	
	enemyMovementScript = GetComponent(MoveToWaypoint);
	
	defaultMat = vfx.GetComponent.<Renderer>().material.color;
	
	InvokeRepeating("SpawnDropping", 1, 4); //--spawn a new dropping every few seconds
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
		enemyMovementScript.SendMessage("stopMoving");
		isAlive = false;
		
		GameObject.Find("Main Camera").GetComponent.<CameraTrackPlayer>().SwitchToTarget("EnemyTurd");
		
		levelController.SendMessage("GoalCompleted");
		
		var exp1helper : GameObject = GameObject.Find("Exp1Helper");
		var exp2helper : GameObject = GameObject.Find("Exp2Helper");
		var exp3helper : GameObject = GameObject.Find("Exp3Helper");
		var exp4helper : GameObject = GameObject.Find("Exp4Helper");
		var exp5helper : GameObject = GameObject.Find("Exp5Helper");
		var exp6helper : GameObject = GameObject.Find("Exp6Helper");
		
		var exp1 = Instantiate(Resources.Load("Explosion", GameObject), exp1helper.transform.position, transform.rotation);

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

		Destroy(exp1,2);
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

		//--destroy the vfx subobject
		//Destroy(vfx);
		vfx.SetActive(false);
		
		yield WaitForSeconds (.25);
		
		var exp12 = Instantiate(Resources.Load("Explosion", GameObject), exp3helper.transform.position, transform.rotation);

		yield WaitForSeconds (.25);
		
		var exp13 = Instantiate(Resources.Load("Explosion", GameObject), exp1helper.transform.position, transform.rotation);

		Destroy(exp7);
		Destroy(exp8);
		Destroy(exp9);
		Destroy(exp10);
		Destroy(exp11);
		Destroy(exp12,1);
		Destroy(exp13,1);
		
		yield WaitForSeconds (.25);
		
		//--hide the enemy
		gameObject.SetActive(false);
		vfx.SetActive(true); //--ready for enemy to be enabled again

		
	}
	
}

function Restart(){
	gameObject.transform.position = restartPoint.position;
	gameObject.transform.rotation = restartPoint.rotation;
	isAlive = true;
	health = startHealth;
	enemyMovementScript.SendMessage("startMoving");
}



function SpawnDropping () {

	if (isAlive) {
		Instantiate(Resources.Load("Dropping", GameObject), transform.position, transform.rotation);
	}

}
