#pragma strict


function FixedUpdate () {


	if(Input.anyKey && (Time.time > 2))
	{

		Application.LoadLevel("level1");

	}
}

