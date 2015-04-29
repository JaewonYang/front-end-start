var APIkey = 'd6d0e9008822b86dc35313d6bc37a52f';
var searchButton = $('searchbtn');
var moreButton = $('moreResult');
var searchBarText = document.getElementById('textBar');
var searchAPIData;
var wantSearchPart= 'board';
var pageNumber = 1;
var html;

// 더보기 버튼을 안보이는 상태로 시작함
$('moreResult').style.display='none';

// 검색 단어와 검색의 종류에 따라 주소를 바꿔줌
function callAPI() {
    var searchString = searchBarText.value;
    searchAPIData = 'http://apis.daum.net/search/' + wantSearchPart + '?apikey=' + APIkey + '&q=' + searchString + '&output=json&pageno=' + pageNumber;
    jsonp();
}

//검색 결과 값을 가져오고 더보기 할 데이터가 있을 경우 더보기 창을 사용자에게 보여줌
function jsonp() {
    var listTemplate = $('listTemplate').innerHTML;

    console.log(listTemplate);
    getJSON(searchAPIData, function (searchData) {
        console.log(searchData);
        html = tmpl(listTemplate, {list: searchData.channel.item});

        //더보기버튼을 보여줄 지 여부
        if( searchData.channel.item=='')
        {
            $('moreResult').style.display='none';
        }else{
            $('moreResult').style.display='block';
        }
        $('loading').innerHTML = '';
    });
};

//로딩 이미지의 a태그 주소
function loading() {
    $('loading').innerHTML = '<a href="http://imgur.com/BKz176L"><img src="http://i.imgur.com/BKz176L.gif" title="source: imgur.com" /></a>'
}

//엔터 혹은 돋보기 버튼을 눌렀을 때 실행되는 함수
function enter() {
    if (searchBarText.value == '') {
        alert("검색어를 입력해주세요");
    } else {
        searchLocation();
    }
}


function giveSearchResult(){
    $('wrap').innerHTML = html;
}
function giveMoreResult(){
    $('wrap').innerHTML += html;
}

//로딩창을 띄우고 검색결과를 받아 로딩창을 없애고 출력하는 함수
function searchLocation() {
    loading();
    callAPI();
}

//엔터키를 누를 때
document.addEventListener('keypress', function () {
    if (event.keyCode == 13) {
        enter();
        giveSearchResult()
    }
});

// 검색 돋보기 버튼을 누를 때
searchButton.addEventListener('click', function () {
    enter();
    giveSearchResult();
    $('wrap').innerHTML = html;
});

// 더보기 버튼을 누를 때
moreButton.addEventListener('click', function () {
    pageNumber = pageNumber + 1;
    searchLocation();
    giveMoreResult();
});

//검색 별 탭을 누를 때
$("menuTab").addEventListener('click', function (event) {
    wantSearchPart = event.target.id;
    document.querySelector("li.active").classList.remove("active");
    document.getElementById(wantSearchPart).parentNode.className = 'active';

    searchLocation();
    giveSearchResult();
});