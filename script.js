var element = document.getElementById("content");

function dropdownStyles(event){
	var style = event.target.id;
	var value = event.target.value;
	element.style[style] = value;
}

for( var i = 0; i < prop.length; i++ ){
	document.getElementById("prop").addEventListener( "change", dropdownStyles );
}
