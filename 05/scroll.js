/**
 * Created by Jaewon on 2015-04-30.
 */

var body = $('#body');

for(var i = 0 ; i < 200; i++){
    body.append('스크롤 엘리베이터<br>');
}
$(document).ready(function(){
    $(window).scroll(function(){
        var y = $(this).scrollTop();
        if(y >= 100){
            makeButton.fadeIn();
        }
        else{
            makeButton.fadeOut();
        }
    });
});

var makeButton = $('<div>')
    .attr('class', 'top')
    .click(function(){
        body.animate({scrollTop:0})})
    .appendTo(body);

