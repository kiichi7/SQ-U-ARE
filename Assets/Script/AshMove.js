#pragma strict
var theFlowArea : GameObject;
private var xPosition : int;
private var zPosition : int;

function Start () {

}

function Update () {

	xPosition = (transform.position.x + 25)/5;
	zPosition = (transform.position.z + 25)/5;

	constantForce.force = theFlowArea.GetComponent(Airflow).flowArea[10 * xPosition + zPosition];
	
	if (transform.position.x > 25) transform.position.x -= 50;
	else if (transform.position.x < -25) transform.position.x += 50;
	if (transform.position.z > 25) transform.position.z -= 50;
	else if (transform.position.z < -25) transform.position.z += 50;

}