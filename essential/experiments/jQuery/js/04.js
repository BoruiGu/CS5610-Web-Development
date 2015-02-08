$(function () {
    var content = [
        { c1: "I", c2: "1", c3: "2", c4: "3" },
        { c1: "II", c2: "4", c3: "5", c4: "6" },
        { c1: "III", c2: "7", c3: "8", c4: "9" },
    ];

    var tbody = $("#table tbody");

    for (var i in content) {
        var r = content[i];
        var tr = $("<tr>");
        var td = $("<td>");
        td.append(r.c1);
        td.append("</td>");
        tr.append(td);

        td = $("<td>");
        td.append(r.c2);
        td.append("</td>");
        tr.append(td);

        td = $("<td>");
        td.append(r.c3);
        td.append("</td>");
        tr.append(td);

        td = $("<td>");
        td.append(r.c4);
        td.append("</td>");
        tr.append(td);

        tbody.append(tr);
    }
})