 $(function(){
	  var flag=true;;
	$(".wq_paixu").click(function(){
	   $(".wq_rightpic").toggleClass("wq_rightpicss");
	   	if(flag==true){
		 $(".wq_paixu span").text("升序");
		 flag=false;	
			}
		else{
		  $(".wq_paixu span").text("降序");
		  flag=true;	
			}	
		}) 
	 $(".wq_paixu span").click(function(e){
		var ev=e||e.event;
	if (ev.preventDefault) {ev.preventDefault()} 
     else{ ev.returnValue = false;}
     })
	 })