$(function () {
    $("title, h1").html("Week3 - Change Content");

    var p1 = $("#p1");
    var p2 = $("#p2");
    p1.hide();    
    p2.hide();
    $(".btnTextHide").hide();

    function btnControl(btn, p) {
        var btnTextShow = btn.find(".btnTextShow");
        var btnTextHide = btn.find(".btnTextHide");

        btn.toggle(
        function () {
            p.show();
            btnTextShow.hide();
            btnTextHide.show();
        },
        function () {
            p.hide();
            btnTextShow.show();
            btnTextHide.hide();
        });
    }

    btnControl($("#btnP1"), p1);
    btnControl($("#btnP2"), p2);

    $("[id^='p']").append(" This is appended to the paragraph.");
    $("[id^='p']").prepend(" This is prepended to the paragraph.");
})