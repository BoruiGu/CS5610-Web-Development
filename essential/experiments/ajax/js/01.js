$(function () {
    var parent = $(".parent");
    var template = $(".template");
    parent.empty();

    $("#get").click(function () {
        var title = $("#title").val();        
        $.ajax({
            url: "http://www.myapifilms.com/imdb?title=" + title + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N",
            dataType: "jsonp",
            success: function (movies) {
                render(movies, parent, template);
            }
        })
    })
})

function render(movies, parent, template) {        
    for (var i in movies) {
        var movie = movies[i];
        if (!movie.urlPoster) continue;
        var title = movie.title;
        var urlPoster = movie.urlPoster;
        var plot = movie.plot;
        var rating = movie.rating;
        var year = movie.year;
        var item = template.clone();
        item.find(".title").html(title);
        item.find(".poster").attr("src", urlPoster);
        item.find(".plot").html(plot);
        item.find(".rating").html(rating);
        item.find(".year").html(year);
        parent.append(item);
    }
}