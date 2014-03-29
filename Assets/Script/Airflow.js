#pragma strict
var flowArea : Vector3[];

function Start () {

	for (var i = 0; i < 100; i ++){
	
		flowArea[i].x = Random.Range(-1.0, 1.0);
		flowArea[i].z = Random.Range(-1.0, 1.0);
	
	}

}

function Update () {

}