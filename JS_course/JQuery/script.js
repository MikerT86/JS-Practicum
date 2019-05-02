$(document).ready(function () {

    let appendModal = function() {
        $('.overlay').fadeIn(600); 
        $('.modal').slideDown(600);
    };

    let closeModal = function() {
        $('.overlay').fadeOut(600);
        $('.modal').slideUp(600);
    };

    $('.main_btna').on('click', appendModal);
    $('.main_btn').on('click', appendModal);
    $('li:eq(7)').on('click', appendModal);

    $('.close').on('click', closeModal);

});