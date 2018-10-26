document.getElementById('search').onkeypress=function(e){
    if(e.keyCode==13){
        var mykeyword = document.getElementById('search').value;
        searchVideo(mykeyword)
    }
};
document.getElementById('btn').onclick = function () {
    var mykeyword = document.getElementById('search').value;
    searchVideo(mykeyword)
};
function searchVideo(mykeyword) {

    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" + mykeyword + "&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsOject = JSON.parse(xhttp.responseText);
            var content = '';
            for (var i = 0; i < jsOject.items.length; i++) {
                var videoItem = '<div class="tube-item" style="float: left;margin: 15px;">\n' +
                    '            <iframe width="460" height="300" src="https://www.youtube.com/embed/' + jsOject.items[i].id.videoId + '" ' +
                    '               frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n' +
                    '            <h3>' + jsOject.items[i].snippet.title + '</h3>\n' +
                    '        </div>';
                content += videoItem;

            }
            document.getElementById("demo").innerHTML = content;
        }
    };
    xhttp.open("GET", YOUTUBE_API, true);
    xhttp.send();
}


