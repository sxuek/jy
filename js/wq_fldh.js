$(function  () {
  $(".wq_fldh_title").click(function  () {
	  var index=$(".wq_fldh_title").index(this);
	 $($(".wq_list")[index]).toggle(200)
	 $($(".wq_fldh_sanjiao")[index]).toggleClass("wq_flah_daosanjiao");
   })
   $(".wq_list .wq_fldh_list:last-child").css("border","0");
   
})