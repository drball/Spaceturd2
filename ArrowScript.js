#pragma strict

var tex : Texture2D;    // Texture to be rotated
var target : Transform; // GameObject to point to
var pivot : Vector2;    // Where to place the center of the texture
var mcamera: Camera;

private var rect : Rect;
  
function Start() {
	rect = new Rect(pivot.x - tex.width * 0.5f, pivot.y - tex.height * 0.5f, tex.width, tex.height);
	mcamera = GetComponent.<Camera>();
}
 
  
 function OnGUI() {
     if (Event.current.type == EventType.Repaint) {
         var dir = mcamera.WorldToScreenPoint(target.position);
         dir.y = Screen.height - dir.y;
         dir = dir - pivot;  
         var angle = Mathf.Atan2(dir.y, dir.x)  * Mathf.Rad2Deg;
 
         var matrixBackup = GUI.matrix;
         GUIUtility.RotateAroundPivot(angle, pivot);
         GUI.DrawTexture(rect, tex);
         GUI.matrix = matrixBackup;
     }
 }