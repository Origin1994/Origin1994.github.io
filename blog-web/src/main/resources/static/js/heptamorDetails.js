/**
 * Created by egzosn on 2019/9/4.
 */
$(function () {
    loadOne("./json/heptamorDetails.json", '[js-do="list"]',{
        callback:function (row, data) {
            $(".prev").attr("data-page", data.prev);
            $(".next").attr("data-page", data.next);

        }
    })


})