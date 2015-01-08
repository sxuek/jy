$(function(){
	var _leftbtn=$(".new_hnz_left");
	var _rightbtn=$(".new_hnz_right");
	var _pointer=$(".new_hnz_pointer");
	var _pnum=_pointer.size();
	var _pW=_pnum*130;
	var _box=$(".new_hnz_c_box");
	$(".new_hnz_c_box").css({width:_pW});
	var _boxWidth=$(".new_hnz_c_box").width();
	_leftbtn.click(function(){
		var _boxL=parseInt(_box.css("marginLeft"));
		if(_boxWidth-678<_boxL*-1){
			}else{
		_box.animate({marginLeft:_boxL-650},1000);
			}
		
	})
		_rightbtn.click(function(){
		var _boxL=parseInt(_box.css("marginLeft"));
		if(_boxL*-1<10){
			}else{
		_box.animate({marginLeft:_boxL+650},1000)
		}
		
	})
	})