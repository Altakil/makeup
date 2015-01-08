$(function () {
    $('a.show-menu').click(function (eventObject) {
        eventObject.preventDefault();
        $("#menu").toggle(1000);
    });

});


