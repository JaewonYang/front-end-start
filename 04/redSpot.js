/**
 * Created by Jaewon on 2015-04-09.
 */
var box = document.querySelectorAll('#box')[0];

var x = 100;
var randomWidth = 0;
var randomColumm = 0;
var clickCountNumber = 0;

function randomMake() {
    randomWidth = Math.floor(Math.random() * 100) + 1;
    randomColumm = Math.floor(Math.random() * 100) + 1;
}

function moveBox() {
    randomMake()
    var widthValue = randomWidth;
    var colummValue = randomColumm;

    box.style.left = widthValue + 'px';
    box.style.top = colummValue + 'px';
    x = widthValue;
}

window.setInterval(moveBox, 600);

box.addEventListener('click', function (event) {
    clickCountNumber += 1;
    document.getElementById('score').innerHTML = clickCountNumber;
    if (clickCountNumber == 10) {
        document.getElementById('score').innerHTML = clickCountNumber + "      --  10점을 돌파하였습니다! 대단한 집념이군요.";
    }
})


