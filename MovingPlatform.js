#pragma strict

private var Xpos : float;
private var Ypos : float;
var countdown: int;
var max : boolean;
var Vert : boolean;
var Horiz : boolean;
var maxAmountY : int;
var maxAmountX : int;
var step : float;
var delayTime : int;
 
function Start () {
     Xpos = transform.position.x;
     Ypos = transform.position.y;
}


function Update () {


	if (countdown > 0) {
		countdown--;
	} else {
	
		//SET THE MAX
		if(Vert){ //Vertical
			if(transform.position.y >= Ypos + maxAmountY){
				max = true;
				countdown = delayTime;
			} else if(transform.position.y <= Ypos){
				max = false;
				countdown = delayTime;
			}
		}

		if(Horiz){//Horizontal
			if(transform.position.x >= Xpos + maxAmountX){
				max = true;
				countdown = delayTime;
			} else if(transform.position.x <= Xpos){
				max = false;
				countdown = delayTime;
			}
		}

		//MOVING THE PLATFORM
		if(Vert){ // Vertical movement
			if(!max){
				transform.position.y += (step * Time.deltaTime);
			} else {
				transform.position.y -= (step * Time.deltaTime);
			} 
		}

		if(Horiz){ //Horizontal movement
			if(!max){
				transform.position.x += (step * Time.deltaTime);
			} else {
				transform.position.x -= (step * Time.deltaTime);
			} 
		}
	}
}

