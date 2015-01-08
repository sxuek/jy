$(function(){

    $(".sdws-list-box dd").hide();
    $(".sdws-list-box dl:first").find('dd').show();
    $(".plus-button:first").find("img").attr("src","../images/myl/new-myl-sdws-jianhao.png");
    $('.plus-button:first').addClass('zhankai');

    $(".plus-button").click(function(){
        $(this).parent().parent().find("dd").toggle();
        $(this).toggleClass('zhankai');

        if($(this).hasClass('zhankai')){
            $(this).find('img').attr("src","../images/myl/new-myl-sdws-jianhao.png");
        }else{
            $(this).find('img').attr("src","../images/myl/new-myl-sdws-jiahao.png");
        }
    });
});