"use strict";

//poem generator

//"use strict";

//4 words randomly selected from each of the three value lists.
//user selects 4 words from 12 offered.  
//remove these words from each list so they don't get resused later.
//add these words to an object of selected words
//check to see which value has been selected the most
//offer a new list of 12 words made of 7 of the common value, the other 5 are random from all lists
//repeat the last step, offering 12 more words
//check value array again to see which value is the most common, now out of 9 words chosen, use this to choose a poem type.
//types are Free Verse, Sonnet and Limerick
//
//


var wordForPoems = [{ word: "plagues", value: "fv", type: "noun" }, { word: "cigarettes", value: "fv", type: "noun" }, { word: "streetlight", value: "fv", type: "noun" }, { word: "waitress", value: "fv", type: "noun" }, { word: "gravel", value: "fv", type: "noun" }, { word: "echos", value: "fv", type: "noun" }, { word: "cocktails", value: "fv", type: "noun" }, { word: "hands", value: "fv", type: "noun" }, { word: "misanthrope", value: "fv", type: "noun" }, { word: "drugs", value: "fv", type: "noun" }, { word: "dust", value: "fv", type: "noun" }, { word: "hammer", value: "fv", type: "noun" }, { word: "highway", value: "fv", type: "noun" }, { word: "liquor", value: "fv", type: "noun" }, { word: "moonlight", value: "fv", type: "noun" }, { word: "fortress", value: "fv", type: "noun" }, { word: "backyard", value: "fv", type: "noun" }, { word: "sublime", value: "fv", type: "adjective" }, { word: "criminal", value: "fv", type: "adjective" }, { word: "indiscriminate", value: "fv", type: "adjective" }, { word: "cruel", value: "fv", type: "adjective" }, { word: "supine", value: "fv", type: "adjective" }, { word: "unborn", value: "fv", type: "adjective" }, { word: "sanguine", value: "fv", type: "adjective" }, { word: "eternal", value: "fv", type: "adjective" }, { word: "nuclear", value: "fv", type: "adjective" }, { word: "dumb", value: "fv", type: "adjective" }, { word: "rough", value: "fv", type: "adjective" }, { word: "recreational", value: "fv", type: "adjective" }, { word: "sad", value: "fv", type: "adjective" }, { word: "unemployed", value: "fv", type: "adjective" }, { word: "irredecent", value: "fv", type: "adjective" }, { word: "empty", value: "fv", type: "adjective" }, { word: "quavers", value: "fv", type: "verb" }, { word: "hesitate", value: "fv", type: "verb" }, { word: "decipher", value: "fv", type: "verb" }, { word: "mothering", value: "fv", type: "verb" }, { word: "tearing", value: "fv", type: "verb" }, { word: "twinkling", value: "fv", type: "verb" }, { word: "feasting", value: "fv", type: "verb" }, { word: "dumped", value: "fv", type: "verb" }, { word: "admitting", value: "fv", type: "verb" }, { word: "remember", value: "fv", type: "verb" }, { word: "galloping", value: "fv", type: "verb" }, { word: "wandering", value: "fv", type: "verb" }, { word: "plough", value: "fv", type: "verb" }, { word: "digitally", value: "fv", type: "verb" }, { word: "calculating", value: "fv", type: "verb" }, { word: "love", value: "s", type: "noun" }, { word: "soul", value: "s", type: "noun" }, { word: "breath", value: "s", type: "noun" }, { word: "tenderness", value: "s", type: "noun" }, { word: "stars", value: "s", type: "noun" }, { word: "eyes", value: "s", type: "noun" }, { word: "desire", value: "s", type: "noun" }, { word: "roses", value: "s", type: "noun" }, { word: "waiting", value: "s", type: "noun" }, { word: "cheak", value: "s", type: "noun" }, { word: "longing", value: "s", type: "noun" }, { word: "passionately", value: "s", type: "adjective" }, { word: "heavenly", value: "s", type: "adjective" }, { word: "sweet", value: "s", type: "adjective" }, { word: "aching", value: "s", type: "adjective" }, { word: "unaware", value: "s", type: "adjective" }, { word: "luscious", value: "s", type: "adjective" }, { word: "fragrant", value: "s", type: "adjective" }, { word: "red", value: "s", type: "adjective" }, { word: "pink", value: "s", type: "adjective" }];

//let limerickWords = {[
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``},
//    {word: ``, value: `l`, type:``}
//                    }];


var offered = [];
var selected = [];

var numberOffered = 13;

//Select 12 words from list of words


function initialOffering() {
    for (var i = 0; i < numberOffered; i++) {
        var randomIndex = Math.floor(Math.random() * wordForPoems.length);
        offered.push(wordForPoems[randomIndex]);
        wordForPoems.splice(randomIndex, 1);
    }
};

initialOffering();
console.log(offered);

//display offered to the user
//map through the array
//join it to a button string
//join all button strings and add them to the html
function displayWords() {
    $(".main").html(offered.map(function (wordData) {
        return "<button id='btn' class='" + wordData.word + "'> " + wordData.word + " </button>";
    }).join(""));
};
displayWords();

//user selects 3 words, remove selected words from offered and put in "selected"
document.getElementById("").addEventListener("click", displayDate);

//check which value is the most common in selected

//