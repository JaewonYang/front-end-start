/**
 * Created by Jaewon on 2015-04-09.
 */
var toDoList = getById("toDoList");
var template = getInnerHTMLById("toDoListTemplate");
var listCount = localStorage.length;
var contenList;
var spanText;
var checkList = function(e) {
    if(e.target.className === "toggle-checked"){
        if(e.target.parentNode.className === "blue"){
            e.target.parentNode.className = "";
            spanText = getNChild(e.target.parentNode, 3).textContent;
            localStorage[spanText] = "";
        }else{
            e.target.parentNode.className = "blue";
            spanText = getNChild(e.target.parentNode, 3).textContent;
            localStorage[spanText] = "blue";

        }
    }
};
var deleteList =  function(e) {
    if(e.target.className === "delete"){
        e.target.parentNode.remove();
    }
    spanText = getNChild(e.target.parentNode, 3).textContent;
    localStorage.removeItem(spanText);
};


var addTodoList = function(e){
    var content={};
    if(e.which === 13 && e.target.value !== ""){
        content[e.target.value] = "";
        toDoList.innerHTML += tmpl(template, {list:content});
        localStorage.setItem(e.target.value, "");
        e.target.value = null;
    }
};
var loadData = function() {
    var listHTML = tmpl(template, {list : localStorage});
    innerHTMLById("toDoList", listHTML);
}

loadData();
getById("toDoText").addEventListener("keydown", addTodoList);
toDoList.addEventListener("click", deleteList);
toDoList.addEventListener("click", checkList);