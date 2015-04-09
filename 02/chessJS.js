/**
 * Created by Jaewon on 2015-04-01.
 */

function main() {
    this.red = null;
    this.spanList = "";
    this.board = document.getElementById("board");
    this.spanArray = document.getElementsByTagName("span");

    chessBlock();
}

document.getElementById("board").addEventListener("click", function(event) {
    ClickEvent();
});

function chessBlock() {
    for (var i = 0; i < 4; i++) {
        var color = (i % 2 === 0) ? "white" : "black";

        for (var j = 0; j < 4; j++) {
            color = (color === "white") ? "black" : "white";
            this.spanList += "<span class =" + color + "></span>";
            this.board.innerHTML = this.spanList;
        }
    }
}
function ClickEvent() {
    for (var i = 0; i < this.spanArray.length; i++) {
        var span = this.spanArray[i];
        span.addEventListener('click', this.clickRed.bind(this));
    }
}
function clickRed(e) {
    if (this.red != null) {
        this.red.className = this.red.className.replace(' red', "");
    }
    e.target.className += " red";
    this.red = e.target;
}


main();