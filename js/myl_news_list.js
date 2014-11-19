$(function(){
    $('.news-item').hover(function(){
        $el = $(this).find('.news-item-image-zhezhao');
        $el2 = $(this).find('.news-item-image-zhezhao-wenzi');
        $el.show();
        $el2.show();
        $el.css('opacity','0.6');
    },function(){
        $(this).find('.news-item-image-zhezhao').hide();
        $(this).find('.news-item-image-zhezhao-wenzi').hide();
    });
})