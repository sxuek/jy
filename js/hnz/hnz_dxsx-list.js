$(function(){
	var hnz_dxsxImg=$('.hnz_rt-list ul li a img');	
	var hnz_dxsxT;
	hnz_dxsxImg.hover(function(){
		var aa=$(this);
		aa.animate({width:213,height:281},200)	
		},function(){
			var aa=$(this);
			hnz_dxsxImg.stop();
			aa.animate({width:201,height:269},100)
			})
	})