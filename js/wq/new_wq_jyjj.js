$(function(){
   var wq_title=$(".new_wq_jy_listone");
   var wq_mao=$(".new_wq_jy_rwsp>a");	
   var wq_arr=["one","two","three","four","five","six","seven","eight"];
   for(var i=0;i<wq_title.length;i++){
	  wq_title[i].href="#"+wq_arr[i];
	  wq_mao[i].name=wq_arr[i]; 
	   }
	})