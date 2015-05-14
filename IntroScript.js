#pragma strict

public var text1 : GameObject;
public var text1b : GameObject;
public var text2 : GameObject;
public var text3 : GameObject;
public var text4 : GameObject;
public var image1 : GameObject;

function Start () {
	text1.active = false;
	text1b.active = false;
	text2.active = false;
	text3.active = false;
	text4.active = false;
	image1.active = false;
	
	introEvents();
}

function FixedUpdate () {


	if(Input.anyKey)
	{

		Application.LoadLevel("level1");

	}
}

function introEvents()
{
	yield WaitForSeconds (.5);

	text1.active = true;
	yield WaitForSeconds (2);
	text1b.active = true;
	yield WaitForSeconds (3);
	text2.active = true;
	yield WaitForSeconds (2);
	text3.active = true;
	yield WaitForSeconds (1);
	image1.active = true;
	yield WaitForSeconds (2);
	text4.active = true;
	yield WaitForSeconds (2);
}

