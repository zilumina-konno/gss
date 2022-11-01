(function(window, $){
    $(window).on("load",function(){
        $('iframe.autoHeight').each(function(){
            var D = $(this).get(0).contentWindow.document;
/*
            console.log(
                D.body.scrollHeight, D.documentElement.scrollHeight,
                D.body.offsetHeight, D.documentElement.offsetHeight,
                D.body.clientHeight, D.documentElement.clientHeight
            );
*/
            var innerHeight = Math.max(
                D.body.scrollHeight, D.documentElement.scrollHeight,
                D.body.offsetHeight, D.documentElement.offsetHeight,
                D.body.clientHeight, D.documentElement.clientHeight
                );
            $(this).removeAttr("height").css('height', innerHeight + 'px');
        });
    });
})(window, jQuery);