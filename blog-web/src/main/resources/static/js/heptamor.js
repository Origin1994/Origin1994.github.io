/**
 * Created by egzosn on 2019/9/4.
 */
$(function () {
    load("./json/heptamor.json", '[js-do="list"]',{
        cllack:function (rows, data) {
            $("#image").attr("src", data.image);
            initEvent();
        }
    })

    var initEvent = function () {
        $('[js-do="list"] .item').click(function () {
            var action = $(this).attr("data-action") || "";
            location.hash="page=heptamorDetails&action=" + action;
            initLoad();
        })
    }
})