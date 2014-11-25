$(function(){
	//标签云 效果
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
		$('.hnz_xybq li a:eq('+qzjtNum+')').css({color:'rgb('+a+','+b+','+c+')'})
		qzjtNum++;
		},200)
		$('.hnz_xybq li a').hover(function(){
			$(this).css({'font-weight':'bold'});
			$(this).css({'background':'#f4f4f4','border-radius':10 });
			},function(){
				$(this).css({'font-weight':''});
				$(this).css({'background':''});
				})
	
	
	})