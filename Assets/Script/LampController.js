#pragma strict
private var firstState : boolean;

function Start () {

	firstState = (Random.Range(0,2)==1);

}

function Update () {

	renderer.enabled = firstState;

}