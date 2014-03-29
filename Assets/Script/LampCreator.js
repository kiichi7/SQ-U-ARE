#pragma strict
var lamp : GameObject;

function Start () {

	for (var y = -22.5; y < 25; y += 5){
		for (var x = -22.5; x < 25; x += 5){
			Instantiate(lamp, Vector3(x, 0.1, y), Quaternion.identity);
		}
	}

}

function Update () {

}