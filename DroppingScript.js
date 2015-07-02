#pragma strict

//--for the turd droppings

var vfxObj : GameObject;

function Start () {
	Invoke("DestroyThis", 25);
}

function Update () {

}

function hit(damageAmt : int){
	
	Destroy(gameObject);
}

function DestroyThis(){

    Destroy(gameObject);
}