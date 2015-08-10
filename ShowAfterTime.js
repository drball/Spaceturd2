#pragma strict

/* ====================================================
Hide something initially, then show it some time later
======================================================= */

public var amtOfSeconds : float = 1; //--time to wait before appearing

function Start () {
	gameObject.SetActive(false);
	Invoke("Show",amtOfSeconds);
}

function Show () {
	gameObject.SetActive(true);
}