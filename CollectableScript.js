#pragma strict

private var gameController : GameControllerScript;
private var isCollectable : boolean = true;
var vfxObj : GameObject;


function Start () {
	//--find gameController so we can call functions
	gameController = GameObject.Find("GameController").GetComponent.<GameControllerScript>();
	


}


function OnTriggerEnter(other: Collider) 
{

	if (other.tag == "Player" && isCollectable)
	{
	    gameController.IncreaseScore(1);
	    //vfxObj.SetActive(false);
	    
	    var sparkInstance : GameObject = Instantiate(Resources.Load("CollectionSparks", GameObject),
			Vector3(gameObject.transform.position.x,gameObject.transform.position.y,gameObject.transform.position.z), 
			transform.rotation);
			
		Destroy(sparkInstance,1);
		
	    vfxObj.SetActive(false);
	    isCollectable = false;
	    
	    yield WaitForSeconds (10);
	    
		vfxObj.SetActive(true);
		
		//--come back and blink for a bit
		
		var blinkingAmt : int = 0;
		
		while(blinkingAmt < 6) {
	        yield WaitForSeconds(0.1);
	        vfxObj.GetComponent.<Renderer>().enabled = !vfxObj.GetComponent.<Renderer>().enabled;
	        blinkingAmt++;
	        Debug.Log("blinking = "+blinkingAmt);
	    }
	    vfxObj.GetComponent.<Renderer>().enabled = true;
	    isCollectable = true;
	    
	}

}

