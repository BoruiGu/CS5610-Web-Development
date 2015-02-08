$(function () {
    var h1 = $("h1");
    h1.css("color", "brown");

    $("[class*='description']").css("font-style", "italic");

    $("p:odd").css({
        "color": "white",
        "background-color": "black"
    });

    $("p.uppercase").css({
        "text-transform": "uppercase",
        "color": "firebrick"
    });    

    $("p#bgColor").css("background-color", "grey");
});