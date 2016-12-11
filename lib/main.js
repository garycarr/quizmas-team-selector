'use strict';

$(document).ready(function ()  {
    let picsDir = 'pics/';
    let pool1 = [
        `${picsDir}girl1.jpg`,
        `${picsDir}girl2.jpg`,
        `${picsDir}girl3.jpg`,
        `${picsDir}girl4.jpg`
    ];
    let pool2 = [
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
        // TODO the teams need to be an even length, need to fix this
        if (pool1.length !== pool2.length) {
            throw new Error('The teams are a different size.  Diagnosis, bad programming');
        }
        while (pool1.length) {
            shuffle.apply(pool1);
            shuffle.apply(pool2);
            displayNamesDramatically(row, pool1.pop(), dramaticPauseMS * row);
            displayNamesDramatically(row, pool2.pop(), (dramaticPauseMS * row) + teamMatePause);
            row++;
        }
    });

    let displayNamesDramatically = function (row, competitor, time) {
        setTimeout(function () {
            $(`#team-${row}`).append(`<img src="${competitor}"/>`);
        }, time);
    };

    // http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffle () {
        let currentIndex = this.length,
            randomIndex,
            temporaryValue;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

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
