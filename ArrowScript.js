#pragma strict

var tex : Texture2D;    // Texture to be rotated
var target : Transform; // GameObject to point to
private var pivot : Vector2 = Vector2(Screen.width/2, Screen.height/2);    // Where to place the center of the texture
var mcamera: Camera;
private var size: float = 10f;

private var rect : Rect;
  
function Start() {
	rect = new Rect(pivot.x - size * 0.5f, pivot.y - size * 0.5f, 10f, 10f);
//	mcamera = GetComponent.<Camera>();
}

function Update() {
	Debug.DrawLine(transform.position, target.transform.position, Color.red);
}
 
  
 function OnGUI() {
 
 	
 
     if (Event.current.type == EventType.Repaint) {
         var dir = mcamera.WorldToScreenPoint(target.position);
         dir.y = Screen.height - dir.y;
         dir = dir - pivot;  
         var angle = (Mathf.Atan2(dir.y, dir.x)  * Mathf.Rad2Deg) + 5f;
 
//         var matrixBackup = GUI.matrix;
         GUIUtility.RotateAroundPivot(angle, pivot);
         GUI.DrawTexture(rect, tex);
//         GUI.matrix = matrixBackup;
     }
     
     GUI.DrawTexture(Rect(10,10,100,100), tex);
 }