// 頁面跑完再執行JS
$('document').ready(function(){

    // 視窗捲動時變化
    $(window).scroll(function () { 

        // 縮寫 : jqEachElement
        $('*').each(function (index, element) {
            // element == this
            
            // 取得元素位移資料
        // jqOffsetGet
        var offset = $('#test').offset();
        var top = offset.top;
        var left = offset.left;

        // console.log('元素的上方:' + top);

        var windowTop = $(window).scrollTop();

        // console.log('視窗的上方:' + windowTop);

        // 取得參數:數字、時間、位移
        // attribute  規定要獲取其值的屬性。
        // 代號 >>> jqatt >變成>  $( selector ).attr( attribute )
        var number = $('#test').attr('data-counter-number');
        var time = $('#test').attr('data-counter-time');
        var offset = $('#test').attr('data-counter-offset');

        // console.log('數字' + number);
        // console.log('時間' + time);
        // console.log('位移' + offset);

        // 判斷式
        // if (條件) {程式}
        // 如果 發生什麼 就...
        if (windowTop > top - offset) {
            $('#test').animate({
                num : number
            }, {
                duration: parseInt(time),
                step: (now) => {
                    $('#test').text(Math.floor(now));
                }
            });
        }
        });
    });
});