#pragma strict
public var amtOfSeconds : float = 1;

function Start () {
	gameObject.SetActive(false);
	Invoke("Show",amtOfSeconds);
}

function Show () {
	gameObject.SetActive(true);
}