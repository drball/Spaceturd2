#pragma strict
//-- this moves object to a position, then back again with a delay (in seconds)

var pointB : Vector3;
var delay : float = 0;
var speed : float = 0.1;

function Start () { 
	var pointA = transform.localPosition; 
		
	while (true) { 
		yield MoveObject(transform, pointA, pointB, 3.0); 
		yield MoveObject(transform, pointB, pointA, 3.0); 
	} 
}

function MoveObject (thisTransform : Transform, startPos : Vector3, endPos : Vector3, time : float) 
{ 
	var i = 0.0; 
	var rate = speed/time; 
	while (i < 1.0) 
	{ 
		i += Time.deltaTime * rate; 
		thisTransform.localPosition = Vector3.Lerp(startPos, endPos, i); 
		yield;
	} 
	yield WaitForSeconds (delay);
}
