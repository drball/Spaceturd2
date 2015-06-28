#pragma strict

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

	//Debug.Log("time out");
	
	//var blinkingAmt : int = 0;
		
//	while(blinkingAmt < 6) {
//        yield WaitForSeconds(0.1);
//        vfxObj.GetComponent.<Renderer>().enabled = !vfxObj.GetComponent.<Renderer>().enabled;
//        blinkingAmt++;
//        Debug.Log("blinking = "+blinkingAmt);
//    }
    Destroy(gameObject);
}