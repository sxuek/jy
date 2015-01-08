$(function(){

    $(".sdws-list-box dd").hide();
    $(".sdws-list-box dl:first").find('dd').show();

    $(".plus-button:first").find("img").attr("src","../images/myl/new-myl-sdws-jianhao.png");
    $('.sdws-item dt:first').addClass('zhankai');

    $('.sdws-item').each(function(){
        $(this).find('dd:last').css('border','none');
    })

    $(".sdws-item dt").click(function(){
        $(this).parent().find("dd").toggle();
        $(this).toggleClass('zhankai');

        if($(this).hasClass('zhankai')){
            $(this).find('.plus-button img').attr("src","../images/myl/new-myl-sdws-jianhao.png");
        }else{
            $(this).find('.plus-button img').attr("src","../images/myl/new-myl-sdws-jiahao.png");
        }
    });
});