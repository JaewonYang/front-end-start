/**
 * Created by Jaewon on 2015-06-04.
 */
var cards = [1,2,3,4,5,1,2,3,4,5];

var $board = $('#gameBoard');

//섞기
cards = shuffle(cards);
console.log(cards)

//깔기
var doms = [];
for(var i=0; i < cards.length; i++){

    doms.push(
            '<div class="card " data-value="' + cards[i]+ '">' +
            '<div class=""> '+ cards[i]  +' </div>' +
            '</div>'
    );
}

$board.html(doms.join(''));


//.addEventListener('click', function (event) {
//
//    $('gameBoard.card').css("background-color","white");
//})