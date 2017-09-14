
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyAdeCPBOwEKeWB5zDzAZJzs0ccZX48Alvk');
}
var responseString;
function search() {
    var query = document.getElementById('txtSource').value;
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:query
    });
    request.execute(onSearchResponse);
}
// Triggered by this line: request.execute(onSearchResponse);
//var vid;
//var vurl;
function onSearchResponse(response) {

    var responseString = JSON.stringify(response,'',2);
    document.getElementById("response").innerHTML += responseString;
}
