var app = angular.module('tableApp', ['ngTouch', 'ngAnimate']);

app.controller('tableController', function ($scope) {
    var result = [
        { rank: 1, name: 'Reimu', total: '7777', weight: 1.0 },
        { rank: 2, name: 'Tenshi', total: '77', weight: 0.5 },
        { rank: 3, name: 'Kaguya', total: '0', weight: 0.3 },
        { rank: 4, name: 'Sakuya', total: '0', weight: 0.25 },
        { rank: 5, name: 'Kedama A', total: '0', weight: 0.25 },
        { rank: 6, name: 'Kedama B', total: '0', weight: 0.25 },
        { rank: 7, name: 'Kedama C', total: '0', weight: 0.25 },
        { rank: 8, name: 'Kedama D', total: '0', weight: 0.25 },
        { rank: 9, name: 'Kedama E', total: '0', weight: 0.25 },
        { rank: 10, name: 'Kedama F', total: '0', weight: 0.25 },
        { rank: 11, name: 'Kedama 10', total: '0', weight: 0.25 },
        { rank: 12, name: 'Kedama 11', total: '0', weight: 0.25 },
        { rank: 13, name: 'Kedama 12', total: '0', weight: 0.25 },
        { rank: 14, name: 'Kedama 13', total: '0', weight: 0.25 },
        { rank: 15, name: 'Kedama 14', total: '0', weight: 0.25 },
    ];

    var dummy_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna est, volutpat et feugiat ut, elementum ac libero. Maecenas eget fringilla orci. Morbi nec ultrices ex, ac mollis quam. Ut et turpis risus. Vivamus luctus iaculis risus nec posuere. Aenean laoreet elit vitae nulla sagittis, eget pulvinar ipsum maximus. Aenean in vulputate libero, eget tempus lacus. Nullam id felis varius, ornare tortor non, gravida urna. Aliquam suscipit mattis nisi, ultricies consectetur mi venenatis in. Curabitur eleifend nisl tempor, accumsan tellus vitae, mattis tortor. Mauris porta, diam ut vestibulum condimentum, augue magna aliquam odio, id viverra purus tortor sit amet magna. Nunc accumsan fringilla venenatis. Duis non molestie lectus." +

"Nullam vel semper velit. Donec mattis, lacus eu mattis euismod, turpis nisl porttitor elit, in convallis nunc sapien nec quam. Quisque imperdiet erat at consequat dictum. Sed dolor felis, semper in consequat sit amet, varius in dui. Pellentesque vitae tempus libero. Aenean tristique gravida purus eu laoreet. Curabitur ut egestas libero. Mauris aliquam sit amet urna non accumsan. Curabitur ac erat quis nisl euismod aliquet sit amet at odio. Duis aliquam, tellus id laoreet mattis, tellus augue interdum purus, sed imperdiet neque felis quis massa. In sit amet efficitur massa. Vivamus elementum ex at eros lobortis, in venenatis quam rhoncus. Morbi malesuada aliquet cursus. Integer congue, ligula et sodales efficitur, odio lorem elementum libero, at tempus tellus purus ac nulla. Aenean blandit enim eget felis porttitor, a rhoncus tortor mollis." +

"Pellentesque risus sem, tincidunt eleifend varius quis, tincidunt ac leo. Donec porta sem id enim fermentum, sed congue ante malesuada. Nullam commodo eleifend leo ac egestas. Cras eu orci ac nulla vulputate viverra non ut enim. Donec finibus, est sed rhoncus pharetra, urna eros varius turpis, nec viverra leo magna eu lectus. Sed tristique, mi sit amet cursus dignissim, ante dui gravida ex, nec accumsan lorem elit et massa. Ut efficitur id massa eget scelerisque. Mauris dictum sem ut lacinia ultrices. Cras dui diam, pellentesque nec elit ut, viverra aliquet nisi. Praesent ut odio nec purus lobortis ultrices dignissim in justo. Cras ullamcorper neque non augue suscipit, in vestibulum mauris tincidunt. Vestibulum non mauris eu ipsum commodo mollis eget non sapien. Maecenas non diam ex. Nullam felis velit, blandit at elit id, eleifend commodo arcu. Donec faucibus pulvinar leo vitae volutpat." +

"Aenean ornare justo erat, ac bibendum orci vestibulum vel. Pellentesque posuere purus a quam porta, sit amet cursus purus pharetra. Phasellus volutpat, magna in tristique imperdiet, dui libero laoreet sapien, ac laoreet est orci in ligula. In fermentum magna id erat ornare sagittis. Curabitur eu egestas neque, sit amet tempor ante. Maecenas aliquet ligula ac eleifend gravida. Cras eu suscipit lorem. Nullam nec aliquet leo. Donec sed magna vel turpis efficitur malesuada sit amet et est. Maecenas vel rhoncus odio. Sed sollicitudin consectetur enim ac ultricies. Sed tincidunt laoreet purus sit amet eleifend. Maecenas euismod dictum nisl, ac commodo tortor blandit eu." +

"Fusce ut tellus orci. In commodo sollicitudin tincidunt. Vestibulum facilisis pellentesque libero, eu tristique odio. Mauris ac massa non ex vestibulum commodo. Nunc lacinia scelerisque nunc, luctus porttitor nulla eleifend id. Nunc ornare efficitur turpis nec cursus. Phasellus tempor malesuada tristique. Curabitur pharetra risus ex, nec vestibulum arcu consequat quis." +

"Donec rutrum porta leo ut laoreet. Quisque accumsan ut lectus quis venenatis. Sed aliquet risus vitae enim facilisis, sit amet auctor tortor mattis. Maecenas non dolor sit amet leo blandit sodales. Sed mauris mauris, tempor eget ullamcorper sit amet, tincidunt vitae lacus. Sed pretium ut metus at auctor. Sed id nisi a ligula aliquet tristique quis id neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin quis dui id felis aliquet finibus ac mattis velit. Aenean semper bibendum commodo." +

"Phasellus blandit, metus non pretium scelerisque, urna dui molestie arcu, et placerat sem odio sit amet mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum tincidunt, orci et ullamcorper varius, purus turpis varius dolor, in imperdiet purus lorem in enim. Donec mattis massa quis dolor ornare, et viverra mi egestas. Fusce nec velit risus. Integer diam tortor, placerat ut leo nec, porttitor pulvinar velit. Vestibulum laoreet arcu auctor, dapibus erat vitae, congue lorem. Nullam vehicula quam nunc, ac blandit dolor blandit et. Vivamus ac lectus vel erat tincidunt accumsan. Morbi posuere dapibus cursus. Aenean vel lorem auctor, semper enim eget, laoreet nisi. Vivamus non tellus consequat, hendrerit mauris in, eleifend est. Nunc finibus tellus nec tellus dapibus, accumsan blandit risus vulputate. Aliquam ultrices dapibus urna, a sodales nulla vestibulum dignissim. Fusce eget aliquet tellus." +

"Cras viverra, ipsum non vulputate mollis, diam lectus sollicitudin nunc, non mattis elit nulla ac diam. Donec sit amet accumsan dolor. Proin ut urna ut arcu sollicitudin bibendum. Aenean bibendum massa id nunc ornare, id ornare ipsum luctus. Proin tincidunt vehicula nulla, at molestie ipsum. Donec elit ipsum, suscipit at mi nec, euismod pharetra enim. In lobortis arcu eu congue auctor. Nunc in luctus quam. Pellentesque euismod interdum leo eu varius." +

"Morbi pulvinar odio augue, et mattis tortor blandit sit amet. Proin odio diam, aliquam vel facilisis vel, facilisis ut dolor. Nam ut lacinia lacus. Quisque tincidunt velit nisl, vel porta sem tincidunt id. In sagittis in ipsum tincidunt ultrices. Nullam eros sapien, aliquam id urna ac, tempor laoreet urna. Nam quis tortor sed ligula lobortis efficitur in sollicitudin ipsum. Morbi aliquam leo at libero hendrerit tincidunt. Sed ultricies congue laoreet. Sed interdum risus eu tellus ullamcorper vestibulum. Suspendisse potenti. Maecenas dictum, dolor in tempor laoreet, diam neque tempus nulla, nec blandit augue ante eu leo. Aliquam lobortis eleifend libero vel placerat." +

"Vivamus a nisi a risus rhoncus dictum. Nulla finibus dui quis molestie maximus. Phasellus eu tempor ipsum, et rhoncus nulla. Morbi tristique interdum orci, eget pretium metus malesuada non. Praesent faucibus suscipit ligula quis pulvinar. Ut volutpat nisl ut purus tincidunt luctus. Phasellus ultrices risus mauris, vel posuere lectus egestas non." +

"Vestibulum lobortis nec dolor nec porttitor. Pellentesque facilisis mattis est, ac aliquam libero tempus a. Integer pulvinar magna enim, nec mollis neque facilisis et. Quisque vel lorem mollis, mattis libero sed, auctor neque. Maecenas auctor vehicula tortor non ultricies. Vestibulum interdum varius libero nec interdum. Phasellus massa enim, feugiat ut dui nec, tempus porta velit. Fusce accumsan vulputate dui, at commodo elit. Maecenas varius, ex vel fermentum ullamcorper, urna erat malesuada quam, nec pretium dolor ligula ac est. Nam venenatis luctus sem sit amet euismod. Vivamus vestibulum ipsum tincidunt, semper augue vitae, consectetur diam.";

    var _pageslide = {
        show: false,
        content: null,
        curr_content_idx: null
    };

    $scope.pageslide = _pageslide;

    $scope.result = result;

    function pageslide_close() {
        _pageslide.show = false;
        _pageslide.content = null;
        _pageslide.curr_content_idx = null;
    }

    function entry_index(entry) {
        raw = $(entry).text();
        // remove leading and trailing white spaces
        stripped = $.trim(raw);
        ret = -1
        result.forEach(function (obj, idx) {
            if (obj.name == stripped) {
                ret = idx;
                // break forEach
                return;
            }
        });
        return ret;
    }

    function second_click_same_entry(e) {
        return _pageslide.show && (_pageslide.curr_content_idx == entry_index(e.target));
    }

    $scope.pageslide_show = function (name, idx, e) {
        if (second_click_same_entry(e)) {
            pageslide_close()
        } else {
            _pageslide.show = true;
            _pageslide.content = name + "\n\n\n" + dummy_text;
            _pageslide.curr_content_idx = idx;
        };
        e.stopPropagation();
    };

    $scope.body_click = function (e) {
        var pageslide_Obj = $("#pageslide");
        // ref: http://stackoverflow.com/questions/1403615/use-jquery-to-hide-a-div-when-the-user-clicks-outside-of-it
        if (_pageslide.show
            && !pageslide_Obj.is(e.target) // if the target of the click isn't the container...
            && pageslide_Obj.has(e.target).length === 0) // ... nor a descendant of the container
        {
            pageslide_close()
        }
    };
});