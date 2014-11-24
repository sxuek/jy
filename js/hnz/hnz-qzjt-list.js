$(function(){
	var qzjtNum=0;
	var bqL=$('.hnz_xybq li').length;
	var bqTT=setInterval(function(){
		if(qzjtNum>bqL){
			clearInterval(bqTT);
			}
		$('.hnz_xybq li:eq('+qzjtNum+')').toggle(180);
		var a= parseInt(Math.random()*255);
		var b= parseInt(Math.random()*255);
		var c= parseInt(Math.random()*255);
		console.log(a);
		$('.hnz_xybq li a:eq('+qzjtNum+')').css({color:'rgb('+a+','+b+','+c+')'})
		qzjtNum++;
		},200)
	
	
	})