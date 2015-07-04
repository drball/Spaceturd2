#pragma strict

var target : GameObject;

function Start () {

}

function Update () {
	transform.LookAt(target.transform);
}