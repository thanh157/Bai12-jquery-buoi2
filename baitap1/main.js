$(function () {
    var modal = $('#myModal');
    var img = $('#Image');
    var modalImg = $(".modal-content");
    var captionText = $(".caption");

    $('#Image').click(function () {
        var pic = $(this).attr('src');
        $('#myModal').css({ 'display': 'block' });
        modalImg.attr('src', pic);
        captionText.html(this.alt);
    });

    $(".close").click(function () {
        $('#myModal').css({ 'display': 'none' });
    });

});