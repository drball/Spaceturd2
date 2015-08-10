#pragma strict

/* ====================================================
Load a level when any key pressed
======================================================= */

function FixedUpdate () {


	if(Input.anyKey && (Time.time > 2))
	{

		Application.LoadLevel("level1");

	}
}

