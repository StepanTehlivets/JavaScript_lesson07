function addText() {
	var elements = document.querySelectorAll('ul>li');
	for (var i = 0; i < elements.length; i++) {
		var elementInList = elements[i];
		elementInList.innerHTML = "Some interesting text"
	}
}

function countLI() {
	var elements = document.querySelectorAll('ul>li');
	alert(elements.length);

}
function externalLink(){
	var elements = document.querySelectorAll('li>a');
	var outerElements=[];
	for (var i = 0; i < elements.length; i++) {
		let href = elements[i].getAttribute('href');
		if (href.includes('http')){
			outerElements.push(elements[i]);
		}else if(href.includes('ftp')){
			outerElements.push(elements[i]);
		}
	}

	for (var i = 0; i < outerElements.length; i++) {
		if(outerElements[i].getAttribute('href').includes('internal')){
		outerElements.splice(i,1);
		}
	}
	for (var i = 0; i < outerElements.length; i++) {
		outerElements[i].setAttribute('class','external-red');

	}
	
}


