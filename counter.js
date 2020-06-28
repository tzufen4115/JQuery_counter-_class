// 頁面跑完再執行JS
$('document').ready(function(){

    // 視窗捲動時變化
    $(window).scroll(function () { 
        // 取得元素位移資料
        // jqOffsetGet
        var offset = $('#test').offset();
        var top = offset.top;
        var left = offset.left;

        console.log('元素的上方:' + top);

        var windowTop = $(window).scrollTop();

        console.log('視窗的上方:' + windowTop);

        if(windowTop > top){
            $('#test').animate({
                num:999
            },{
                duration:2000,
                step:(now) => {
                    $('#test').text(now);
                }
            });
        }
    });
    
    
    
});