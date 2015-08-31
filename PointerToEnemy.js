#pragma strict


var target : GameObject; // GameObject to point to
var arrow : GameObject;
var fadeSpeed : float = .05;
var distanceToTarget : float;

private var amt : float = 0;
private var angle : float;
  
function Start() {
	arrow.GetComponent.<CanvasGroup>().alpha = 0;
}

function Update() {
	//Debug.DrawLine(transform.position, target.transform.position, Color.red);
	
	//--point arrow to enemy
	var dir = transform.position - target.transform.position;
 	var angle = Mathf.Atan2(dir.z, dir.x) * Mathf.Rad2Deg;
	arrow.transform.rotation = Quaternion.AngleAxis(angle+90, Vector3.forward);
	
	//--get distance
	distanceToTarget = Vector3.Distance(transform.position,target.transform.position);

	if(distanceToTarget < 4.5){
		//--fade out
		if(amt > 0){
			amt -= fadeSpeed;
		}
		
	} else {
		//--fade in
		if(amt < 1){
			amt += fadeSpeed;
		}
	}
	
	arrow.GetComponent.<CanvasGroup>().alpha = amt;

}