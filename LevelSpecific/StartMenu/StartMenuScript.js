#pragma strict

var CreditsPanel : GameObject;

function Start () {
	HideCreditsPanel();
}

function Update () {

	if(Input.GetKeyDown(KeyCode.Escape) == true)
	{
		Application.Quit();
	}

}


function StartGame() {
	Application.LoadLevel("intro");
}

function ShowCreditsPanel() {
	CreditsPanel.SetActive(true);
}

function HideCreditsPanel() {
	CreditsPanel.SetActive(false);
}

function CreditsLink1(){
	Application.OpenURL ("http://www.newgrounds.com/audio/listen/632657");
}

function CreditsLink2(){
	Application.OpenURL ("http://www.newgrounds.com/audio/listen/522212");
}