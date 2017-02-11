function hiddenClick (id) {
	var myElement = document.getElementById(id).style;
	console.log("triggered", myElement);
	if (myElement.display == 'block') {
		myElement.display = 'none';
	} else {
		myElement.display = 'block';
	}
}