function hover(e){
	console.log("got here");
	console.log(e);
	console.log(e.className);
	if(e.className=="date"|| e.className=="date note"){
		e.style.backgroundColor='blue';
		e.style.color='white';
	}
	else if(e.className=="current"){
		e.style.backgroundColor='blue';
		e.style.color='white';
	}
}
function unhover(e){
	if(e.className=="date"){
		e.style.backgroundColor="#FFFFF0";	
		e.style.color='black';
	}
	else if (e.className=="date note"){
		e.style.backgroundColor="#00FFFF";
		e.sytle.color='black';
	}
	else if(e.className=="current"){
		e.style.backgroundColor="orange";	
		e.style.color="black";
	}
}
