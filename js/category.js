// JavaScript Document
$(function (){
	//category 图片效果
 $(".tushuo-item").hover(function (e){
	 var heights=$(this).height(); 
    var first=$(this).find(".tushuo-item-top");
	var last=$(this).find(".tushuo-item-bottom");
	first.stop();
	last.stop();
	var cy=e.originalEvent.y || e.originalEvent.layerY || 0;
	first.animate({"top":-(heights-cy),opacity:0.6},800);
	last.animate({"top":cy,opacity:0.6},800);
  },function(){
	
	   var first=$(this).find(".tushuo-item-top");
	var last=$(this).find(".tushuo-item-bottom");
	 first.stop();
	 last.stop();
	first.animate({"top":"-100%",opacity:1},800);
	last.animate({"top":"100%",opacity:1},800);
	  })
})