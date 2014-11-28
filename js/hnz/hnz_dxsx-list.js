$(function(){
	var hnz_dxsxImg=$('.hnz_rt-list ul li a img');	
	var hnz_dxsxT;
	hnz_dxsxImg.hover(function(){
		var aa=$(this);
		hnz_dxsxT= setTimeout(function(){
		aa.animate({width:213,height:281},200)
		},150)
		},function(){
			clearInterval(hnz_dxsxT);	
			hnz_dxsxImg.stop();
			hnz_dxsxImg.animate({width:201,height:269},100)
			})
	})