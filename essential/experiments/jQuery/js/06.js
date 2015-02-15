$(function () {
    $("#add").click(function () {
        add("New Text", 0, 0);
    });
    $("#save").click(save);
    $("#load").click(load);
    $("#view").click(view);
    $("#clear").click(clear);
})

function add(html, x, y) {
    var temp = $("#temp");
    var text = $("<p>");
    text.html(html)
        .attr("contenteditable", "true")
        .draggable({
            grid: [10, 10]
        });
    if (!((x == 0) && (y == 0)))
        text.css({
            "position": "absolute",
            "left": x,
            "top": y
        });    
    text.appendTo(temp);
}

function save() {
    var state = [];
    var temp = $("#temp");
    var ps = temp.find("p");
    ps.each(function (index, item) {
        var p = $(item);
        var html = p.html();
        var pos = p.position();
        var stateObj = {
            html: html,
            x: pos.left,
            y: pos.top
        };
        state.push(stateObj);
    });
    //var afterTemp = $("#after_temp");
    //var afterTempPosition = afterTemp.position();
    //var afterObj = {
    //    x: afterTempPosition.left,
    //    y: afterTempPosition.top
    //}
    //state.push(afterObj);
    var stateStr = JSON.stringify(state);    
    localStorage.setItem("Exp06State", stateStr);
}

function load() {
    var stateStr = localStorage.getItem("Exp06State");
    if (stateStr == null){
        alert("Previous state not found.");
        return;
    }
    var state = JSON.parse(stateStr);
    for (var i in state) {
        var stateObj = state[i];
        //if (stateObj.hasOwnProperty("html")) {
        var html = stateObj.html;
        var x = stateObj.x;
        var y = stateObj.y;
        add(html, x, y);
    }
    var temp = $("#temp");
    var afterTemp = $("#after_temp");
    temp.insertBefore(afterTemp);
}

function view() {
    var stateStr = localStorage.getItem("Exp06State");
    add("Exp06State: ".concat(stateStr), 0, 0);
}

function clear() {
    localStorage.removeItem("Exp06State");
}