#pragma strict

//--for the turd droppings

var vfxObj : GameObject;
private var gameController : GameControllerScript;

function Start () {
	gameController = GameObject.Find("GameController").GetComponent.<GameControllerScript>();
	Invoke("DestroyThis", 25);
}

function Update () {

}

function hit(damageAmt : int){
	gameController.IncreaseScore(1);
	Destroy(gameObject);
}

function DestroyThis(){

    Destroy(gameObject);
}