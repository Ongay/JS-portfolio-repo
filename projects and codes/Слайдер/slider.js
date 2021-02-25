var images = [];
var block = document.createElement('div');
block.classList.add('block');
document.querySelector('section').append(block);

for(i = 0; i < 4; i++){
	images[i] = document.createElement('img');
	images[i].id = "image_" + (i + 1);
	images[i].src = "images/slide_" + (i + 1) + ".jpeg";
	document.querySelector('.block').append(images[i]);
}

var buttons = document.querySelectorAll('button');

images[0].style.left = "0px";

buttons[0].onclick = btnLeft;
buttons[1].onclick = btnRight;

function btnLeft(){
	for(i = 0; i < images.length; i++){
		if(images[i + 1] == undefined){
			images[0].style.left = "0px";
			for(i = 1; i < images.length; i++){
				images[i].style.left = "-100%";
			}
			console.log("Normal");
			break;
		}
		else if(images[i].style.left == "0px"){			
			images[i].style.left = "100%";
			images[i + 1].style.left = "0px";
			break;
		}
	}
}

function btnRight(){
	for(i = (images.length - 1); i >= 0; i--){
		if(images[i - 1] == undefined){
			images[images.length - 1].style.left = "0px";
			for(i = 0; i < (images.length-1); i++){
				images[i].style.left = "100%";
			}
			break;
		}
		else if(images[i].style.left == "0px"){
			images[i].style.left = "-100%";
			images[i - 1].style.left = "0px";
			break;
		}
	}
}