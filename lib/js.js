var pics_dir = 'pics/';
// TODO the girls and boys need to be an even length of 4, need to make this dynamic
var girls = [
  pics_dir + 'girl1.jpg',
  pics_dir + 'girl2.jpg',
  pics_dir + 'girl3.jpg',
  pics_dir + 'girl4.jpg',
];
var boys = [
  pics_dir + 'boy1.jpg',
  pics_dir + 'boy2.jpg',
  pics_dir + 'boy3.jpg',
  pics_dir + 'boy4.jpg',
];
var dramaticPauseMS = 4000;
var teamMatePause = 2000;

document.getElementById("myAudio").play();

window.onload = function ()  {
    $( "#pick-teams" ).on('click', function () {
        var row = 1;
        while (girls.length){
            shuffle.apply(girls);
            shuffle.apply(boys);
            displayNamesDramatically(row, girls.pop(), dramaticPauseMS * row);
            displayNamesDramatically(row, boys.pop(), (dramaticPauseMS * row) + teamMatePause);
            row++;
        }
    });
};

var displayNamesDramatically = function (row, competitor, time) {
    setTimeout(function () {
        $('#team-' + row).append('<img style="height:200px" src="' + competitor + '" />');}, time
    );
};

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle() {
  var currentIndex = this.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
}
