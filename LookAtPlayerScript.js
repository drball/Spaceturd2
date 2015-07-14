#pragma strict

private var target : GameObject;


function Start () {
	target = GameObject.Find("Player");
}

function Update () {
	transform.LookAt(target.transform);
}