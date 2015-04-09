/**
 * Created by Jaewon on 2015-04-08.
 */
(function () {
    var APIkey = 'd6d0e9008822b86dc35313d6bc37a52f';

    var searchButton = $('searchButton');
    var searchBar = $('searchBar');
    var moreButton = $('moreResult');
    var searchAPIData;
    var pageNumber = 1;

    function jsonp() {
        var listTemplate = $('listTemplate').innerHTML;

        getJSON(searchAPIData, function (searchData) {
            console.log(searchData.channel.item);
            var html = tmpl(listTemplate, {list: searchData.channel.item});
            $('wrap').innerHTML = html;
//              document.getElementById('wrap').innerHTML=html;
        });
    };
    function callAPI() {
        var searchString = searchBar.value;
//        searchBar.value = '';
        searchAPIData = 'http://apis.daum.net/search/web?apikey=' + APIkey + '&q=' + searchString + '&output=json&pageno=' + pageNumber;
        jsonp();
    }

    searchButton.addEventListener('click', function (event) {
        callAPI();
    })

    moreButton.addEventListener('click', function (event) {
        pageNumber += 1;
        callAPI();
    })
})();
