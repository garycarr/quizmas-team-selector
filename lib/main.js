'use strict';

$(document).ready(function ()  {
    let picsDir = 'pics/';
    // TODO the teams need to be an even length, need to fix this
    let team1 = [
        `${picsDir}girl1.jpg`,
        `${picsDir}girl2.jpg`,
        `${picsDir}girl3.jpg`,
        `${picsDir}girl4.jpg`
    ];
    let team2 = [
        `${picsDir}boy1.jpg`,
        `${picsDir}boy2.jpg`,
        `${picsDir}boy3.jpg`,
        `${picsDir}boy4.jpg`
    ];
    let dramaticPauseMS = 4000;
    let teamMatePause = 2000;

    $('audio')[0].play();
    $('#pick-teams').on('click', function () {
        let row = 1;
        while (team1.length) {
            shuffle.apply(team1);
            shuffle.apply(team2);
            displayNamesDramatically(row, team1.pop(), dramaticPauseMS * row);
            displayNamesDramatically(row, team2.pop(), (dramaticPauseMS * row) + teamMatePause);
            row++;
        }
    });

    let displayNamesDramatically = function (row, competitor, time) {
        setTimeout(function () {
            // TODO Yuck, use hbs template
            $(`#team-${row}`).append(`<img style="height:200px" src="${competitor}"/>`);
        }, time);
    };

    // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffle () {
        let currentIndex = this.length,
            randomIndex,
            temporaryValue;

        // While there remain elements to shuffle...
        while (!currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = this[currentIndex];
            this[currentIndex] = this[randomIndex];
            this[randomIndex] = temporaryValue;
        }
    }
});
