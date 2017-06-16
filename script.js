var element = document.getElementById("content");

function dropdownStyles(event){
	var style = event.target.id;
	var value = event.target.value;
	element.style[style] = value;
}

document.getElementById("prop").addEventListener( "change", dropdownStyles );

