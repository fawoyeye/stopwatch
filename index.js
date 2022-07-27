       var hour = 00;
				var min = 00;
				var sec = 00;
				var ms = 00;
				var start =document.querySelector('.start');
				var reset =document.querySelector('.reset');
				var stop =document.querySelector('.stop');
				
				 function count()
				{ms++;
				document.querySelector(".ms").innerHTML = ms;
document.querySelector(".secs").innerHTML = sec;
	document.querySelector(".mins").innerHTML = min;
	document.querySelector(".hours").innerHTML = hour;
				if(ms==100){
				sec++;
				ms=0;	}
				if(sec==60){
								min++;
								sec=0;	}
				if(min==60){
								hour++;
								min=0;}
				if(ms<10)
				{ms="0"+ms;};}
				
				start.onclick = function(){
						 var man =	setInterval(count, 1);
						man;
 	
								
								stop.onclick = function(){
												clearInterval(man);
	document.querySelector(".ms").innerHTML = ms;
document.querySelector(".secs").innerHTML = sec;
document.querySelector(".mins").innerHTML = min;
document.querySelector(".hours").innerHTML = hour;};
								
								reset.onclick = function(){
								
												clearInterval(man);
												ms = 0;
												hour = 0;
												min = 0;
												sec = 0;
												
												
											document.querySelector(".ms").innerHTML = ms;
document.querySelector(".secs").innerHTML = sec;
	document.querySelector(".mins").innerHTML = min;
	document.querySelector(".hours").innerHTML = hour;									
								};};
								
								
							
