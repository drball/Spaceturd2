#pragma strict

@script ExecuteInEditMode;
private var btnStart : GameObject;


function Start () {
	menuEvents();
	
	btnStart = GameObject.Find("btnStart");
}


function Update () {

	if(Input.GetKeyDown(KeyCode.Escape) == true)
	{
		Application.Quit();
	}

}

function OnGUI () {


	
}

function menuEvents() {


}