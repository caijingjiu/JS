function getRandom(){
	var rnd = Math.floor(Math.random() * 10);
	return rnd;
}
function startGame () {
	document.getElementById('btnStart').disabled = true;
	document.getElementById('msg').style.display = 'none';
	interval1 = setInterval(function(){
		document.getElementById('box1').innerHTML = getRandom();
	}, 1);

	interval2 = setInterval(function(){
		document.getElementById('box2').innerHTML = getRandom();
	},1);

	interval3 = setInterval(function(){
		document.getElementById('box3').innerHTML = getRandom();
	},1);

	document.getElementById('btnStop1').onclick = function(){
		clearInterval(interval1);
		interval1 = null;
		check();
	}
	document.getElementById('btnStop2').onclick = function(){
		clearInterval(interval2);
		interval2 = null;
		check();
	}
	document.getElementById('btnStop3').onclick = function(){
		clearInterval(interval3);
		interval3 = null;
		check();
	}
}

function check(){
	if(interval1 == null &interval2 == null && interval3 == null){
		endGame();
	}
}

function endGame(){
	if(document.getElementById('box1').innerHTML == '7' && doucment.getElementById('box2').innerHTML
		== '7'&& document.getElementById('box3').innerHTML == '7'){
		document.getElementById('msg').style.display = 'block';
		document.getElementById('msg').innerHTML = "Lucky Seven!!!";
	}else {
		document.getElementById('msg').style.display = 'block';
		document.getElementById('msg').innerHTML = 'Bad Lucky';
	}
	document.getElementById('btnStart').disabled = false;

}
function init(){
	document.getElementById('btnStart').onclick = function(){
		startGame();
	}
}