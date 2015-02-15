$(function () {
    $("#bold").click(function () {
        document.execCommand("Bold", false, null);
    });
    $("#italic").click(function () {
        document.execCommand("Italic", false, null);
    });
    $("#underline").click(function () {
        document.execCommand("Underline", false, null);
    });
})