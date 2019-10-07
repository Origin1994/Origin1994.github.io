/**
 * Created by egzosn on 2019/8/17.
 */
$(function () {

    $('.action').click(function () {
        var action =  $(this).attr("data-page");
        location.hash = "page=" + action;
        $('#main').load(action + ".html");
    });

    $('.activity').click(function () {
        var that = $(this);
        var nextDom = that.next()
        if (nextDom.hasClass("dropdown-toggle")){
            var url = nextDom.attr("href");
            location.href = url;
            $('#main').load( url.replace("index.html#page=", "")+ ".html");
        }
       /* var w = that.parent().outerWidth();
        that.css("left", ((w)/4) + "px");*/


    })
})