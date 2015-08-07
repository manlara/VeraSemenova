$(function() {
    $('.gallery').on('click', function(event) {
        event.preventDefault();
        $('#pic1').ekkoLightbox();
    });
    var level_selected = "";
    $('.level-container').on('click', function() {
        $('#' + $(this).attr('id') + "-features").toggleClass('hidden-xs');
        var levels_highlighted = {
            'level-1': false,
            'level-2': false,
            'level-3': false
        };
        for (key in levels_highlighted) {
            if (key == $(this).attr('id')) {
                levels_highlighted[key] = true;
            }
        }
        for (key in levels_highlighted) {
            if (levels_highlighted[key]) {
                $('#' + key).css('background-color', 'rgba(255, 255, 255, 0.2)');
                level_selected = key;
            } else {
                $('#' + key).css('background-color', '');
            }
        }
        $('.select-level').replaceWith("<span class=\'selected-level\'>Book A Lesson</span>");
    });
    $('.btn-buy').on('click', function() {
        if ($('*').hasClass('selected-level')) {
            $('#contactmeform').modal();
            if (level_selected=="level-1") {select("#student-level","Beginner");}
            if (level_selected=="level-2") {select("#student-level","Intermediate");}
            if (level_selected=="level-3") {select("#student-level","Advanced");}
        }
    });
    var select = function(dropdown, selectedValue) {
        var options = $(dropdown).find("option");
        var matches = $.grep(options,
            function(n) {
                return $(n).text() == selectedValue;
            });
        console.log(matches);
        $(matches).attr("selected", "selected");
    };
    $('.offcanvas-links').on('click', function(){
        $('#offcanvas').offcanvas('hide');
    });
});