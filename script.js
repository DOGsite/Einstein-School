let p = document.querySelector('#timenow');
setInterval(function(){
	let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	if(hours<10){
		hours = "0" + hours;
		 }
		 if(minutes<10){
			 minutes = "0" + minutes;
			  }
			  if(seconds<10){
				 seconds = "0" + seconds;
				  }


		p.innerHTML =   hours + ":" + minutes + ":" + seconds;
		
	
},0001)

//  alert("Здраствуйте!Вы зашли на сайт тренировки мозга и улутшения навыков счета в уме. Хорошой тренировки!");

window.onload = function() {
    document.querySelector('.start').onclick = function (){
        training();
    }
}


	


function MathOpt(a,b,op){		
	var res;

	if (op == '+') {
		 res = a + b 
	}
	else if (op == '-') {
		 res = a - b 
	} 
	 else if (op == '*') {
		  res = a * b 
	 }
	 else if (op == '/') {
		if(b == 0){
		   res = false;
	 } 
		 else{
			res = a / b 
		 }
	  }
	 else{
	  res = false;
	 }

	 return res;


	 }  
	//  function codeToOp(num){
		
		//  return variants[num];
		//  if (num == 0){
        //        res = '+' 			 
		//  }
		//  else if (num == 1){
		// 	 res = '-';
		//  }
		//  else if (num == 2){
		// 	 res = '*';
		//  }
		//  else if (num == 3){
		// 	 res = '/';
		//  }
		//  else {
		// 	 res = '';
		//  }
		//  return res;
	//  }
	
	function randomInt(min,max) {
	     var blabla = max - min + 1;
    	 var rand = Math.floor(Math.random() * blabla) + min;
	     return rand;
	}
	function training () {
	var x, y, code, op, res, answerStr, answer, good = 0, error = 0, errors = [], goodUn = [];
	var variants = ['+', '-', '*', '/'];
	for(var i = 0; i < 10; i++){
		x = randomInt(4, 20);
		y = randomInt(4, 20);
		code = randomInt(0, 3);
		op = variants[code];
		res = MathOpt(x, y, op);

		if(x<10){
			variants == "*";
		}
		// answer = +prompt(x + '*' + y + '= ?');
		
		do{
			answerStr = prompt( x + '' + op + '' + y + " = ?" );
			answer = +answerStr;
		  }
		  while(answerStr == '' || isNaN(answer));

		if(res.toFixed(2) == answer.toFixed(2)){
            // console.log('Good job'  + x + '*' + y + '=' + res.toFixed(2));
		  good++;
		  goodUn.push(' True' + ' : ' + x + '' + op + '' + y + " = " + res.toFixed(2));
		
		   
        } 		
        else{
            // console.log('Bad job' + x + '*' + y + '=' + res.toFixed(2));
		   error++;
		   errors.push( ' Faulse' + ' : ' + x + '' + op + '' + y + " = " + res.toFixed(2) + ' , but your answer' + ' ' + answer + ' !');
		}  
	}	
	document.querySelector('.good').innerHTML = good + '' + ' True';
	let q = good * 100 / 10;
	let gproc = document.querySelector('.gproc');
		gproc.innerHTML = ("Процент правильных ответов" + " : " + q + "%");
	// alert (q + "%");
	document.querySelector('.bad').innerHTML = error + '' + ' Faulse';
	let bpr = error * 100 / 10;
	let bproc = document.querySelector('.bproc');
		bproc.innerHTML = ( "Процент неправильных ответов" + " : " + bpr + "%");
		if(error>good){
			var noProb = document.querySelector('.noProb');
			   noProb.innerHTML = ("Со времинем ты научишся считать в уме!");
		   }
		if(good>error){
			var noProb = document.querySelector('.noProb');
			   noProb.innerHTML = ("Так держать!");
		   }
	// alert (bpr + "%"); 
	// console.log('Good job:' + good);
	// console.log('Bad job:'  + error);

	var divErrors = document.querySelector('.errors');
	divErrors.innerHTML = ''; 

	var divGoodUn = document.querySelector('.goodUn');
	divGoodUn.innerHTML = ''; 
	
	for(var i = 0; i < errors.length; i++){
		// console.log(errors[i]);
		divErrors.innerHTML +=(  errors[i] + "<br> ");
	}
	for(var i = 0; i < goodUn.length; i++){
			//  console.log( goodUn[i]);
			divGoodUn.innerHTML +=( goodUn[i] + "<br>" );
		   }
		   
		   
		  
		}
	



