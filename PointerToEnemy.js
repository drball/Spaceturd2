#pragma strict

var target : GameObject;
var myCamera : Camera;
var directionArrow : Texture;
var mySprite : GameObject;

function Start () {
	
}

function Update () {
	if (target != null) {
		Debug.DrawLine(transform.position, target.transform.position, Color.red);
	}
	
//	
//	var viewPos : Vector3 = myCamera.WorldToScreenPoint(target.transform.position);
//                       
//	var angle : float = Mathf.Atan2(viewPos.x - 240, viewPos.y - 160) * Mathf.Rad2Deg;
//	       
//	if (viewPos.z < 0)
//	{
//	    if (viewPos.x > 240)
//	        angle = 270;
//	    else
//	        angle = 90;
//	}  
//	       
//	GUIUtility.RotateAroundPivot(angle, Vector2(240, 160));
	//GUI.DrawTexture(Rect(80, 0, 320, 320), directionArrow);
	mySprite.transform.LookAt(target.transform);
}


