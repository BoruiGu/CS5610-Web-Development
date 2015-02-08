$(function () {
    var list = $("ul#worklist");
    var items = ["Meet", "Your", "Makers"];

    list.find("li").each(function (index) {
        console.log($(this).text());
        $(this).html(items[index]);
    })

    list = $("ul#worklist1");
    list.empty();

    for (var i in items) {
        var li = $("<li>" + items[i] + "</li>");
        list.append(li);
    }
})