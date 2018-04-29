//poem generator

"use strict";

var wordForPoems = [{ word: 'plagues', value: 'fv', type: 'noun' }, { word: 'cigarettes', value: 'fv', type: 'noun' }, { word: 'streetlight', value: 'fv', type: 'noun' }, { word: 'waitress', value: 'fv', type: 'noun' }, { word: 'gravel', value: 'fv', type: 'noun' }, { word: 'echos', value: 'fv', type: 'noun' }, { word: 'cocktails', value: 'fv', type: 'noun' }, { word: 'hands', value: 'fv', type: 'noun' }, { word: 'misanthrope', value: 'fv', type: 'noun' }, { word: 'drugs', value: 'fv', type: 'noun' }, { word: 'dust', value: 'fv', type: 'noun' }, { word: 'hammer', value: 'fv', type: 'noun' }, { word: 'highway', value: 'fv', type: 'noun' }, { word: 'liquor', value: 'fv', type: 'noun' }, { word: 'moonlight', value: 'fv', type: 'noun' }, { word: 'fortress', value: 'fv', type: 'noun' }, { word: 'backyard', value: 'fv', type: 'noun' }, { word: 'sublime', value: 'fv', type: 'adjective' }, { word: 'criminal', value: 'fv', type: 'adjective' }, { word: 'indiscriminate', value: 'fv', type: 'adjective' }, { word: 'cruel', value: 'fv', type: 'adjective' }, { word: 'supine', value: 'fv', type: 'adjective' }, { word: 'unborn', value: 'fv', type: 'adjective' }, { word: 'sanguine', value: 'fv', type: 'adjective' }, { word: 'eternal', value: 'fv', type: 'adjective' }, { word: 'nuclear', value: 'fv', type: 'adjective' }, { word: 'dumb', value: 'fv', type: 'adjective' }, { word: 'rough', value: 'fv', type: 'adjective' }, { word: 'recreational', value: 'fv', type: 'adjective' }, { word: 'sad', value: 'fv', type: 'adjective' }, { word: 'unemployed', value: 'fv', type: 'adjective' }, { word: 'irredecent', value: 'fv', type: 'adjective' }, { word: 'empty', value: 'fv', type: 'adjective' }, { word: 'quavers', value: 'fv', type: 'verb' }, { word: 'hesitate', value: 'fv', type: 'verb' }, { word: 'decipher', value: 'fv', type: 'verb' }, { word: 'mothering', value: 'fv', type: 'verb' }, { word: 'tearing', value: 'fv', type: 'verb' }, { word: 'twinkling', value: 'fv', type: 'verb' }, { word: 'feasting', value: 'fv', type: 'verb' }, { word: 'dumped', value: 'fv', type: 'verb' }, { word: 'admitting', value: 'fv', type: 'verb' }, { word: 'remember', value: 'fv', type: 'verb' }, { word: 'galloping', value: 'fv', type: 'verb' }, { word: 'wandering', value: 'fv', type: 'verb' }, { word: 'plough', value: 'fv', type: 'verb' }, { word: 'digitally', value: 'fv', type: 'verb' }, { word: 'calculating', value: 'fv', type: 'verb' }, { word: 'love', value: 's', type: 'noun' }, { word: 'soul', value: 's', type: 'noun' }, { word: 'breath', value: 's', type: 'noun' }, { word: 'tenderness', value: 's', type: 'noun' }, { word: 'stars', value: 's', type: 'noun' }, { word: 'eyes', value: 's', type: 'noun' }, { word: 'desire', value: 's', type: 'noun' }, { word: 'roses', value: 's', type: 'noun' }, { word: 'waiting', value: 's', type: 'noun' }, { word: 'cheak', value: 's', type: 'noun' }, { word: 'longing', value: 's', type: 'noun' }, { word: 'passionately', value: 's', type: 'adjective' }, { word: 'heavenly', value: 's', type: 'adjective' }, { word: 'sweet', value: 's', type: 'adjective' }, { word: 'aching', value: 's', type: 'adjective' }, { word: 'unaware', value: 's', type: 'adjective' }, { word: 'luscious', value: 's', type: 'adjective' }, { word: 'fragrant', value: 's', type: 'adjective' }, { word: 'red', value: 's', type: 'adjective' }, { word: 'pink', value: 's', type: 'adjective' }];

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
    displayWords();
};

initialOffering();

//display 12 words to the user
//map through the array
//join it to a button string
//join all button strings and add them to the html
function displayWords() {
    $('.main').html(offered.map(function (wordData) {
        return '<button id=\'btn\' class=\'' + wordData.word + '\'> ' + wordData.word + ' </button>';
    }).join(''));
};

//user clicks words
function clickTheWords() {
    var i = 0;
    $(document).on('click', 'button', function (e) {
        var selectedWord = this.classList[0];
        var obj = $.grep(offered, function (obj) {
            return obj.word === selectedWord;
        })[0];
        //display clicked styling on clicked words
        $(this).addClass("clicked");
        //if user has clicked 4 words, disable unclicked buttons
        var clickedButton = document.getElementsByClassName("clicked");
        if (clickedButton.length <= 3) {
            selected.push(obj);
            //once 4 are selected, push them to selected, delete content from offered
        } else {
            i++;
            endOfCycle(obj, i);
        }
    });
};

function endOfCycle(obj, i) {
    selected.push(obj);
    if (i < 3) {
        offered.splice(0, offered.length);
        //remove buttons from html to reset
        $('.main').html('');
        initialOffering();
    } else {
        $('.main').html('');
        console.log(selected);
        var nounList = selected.filter(function (val) {
            return val.type === "noun";
        });
        var verbList = selected.filter(function (val) {
            return val.type === "verb";
        });
        var adjectiveList = selected.filter(function (val) {
            return val.type === "adjective";

            var noun = nounList[Math.floor(Math.random() * items.length)];
            var verb = verbList[Math.floor(Math.random() * items.length)];
            var adjective = adjectiveList[Math.floor(Math.random() * items.length)];
        });
        console.log(nounList);
        console.log(verbList);
        console.log(adjectiveList);
        var fvMadlibs1 = 'The ' + noun + ' ' + verb + ' to a ' + adjective + ' clearing on the far side of the ' + noun + '. An ' + adjective + ' ' + noun + ' sat in the ' + adjective + ' ' + noun + '. It was ' + adjective + '\u2014he hardly knew the difference';

        console.log(fvMadlibs1);
    }
}
console.log(selected);

clickTheWords();
//select random poem madlib parts


//let noun = nounList[Math.floor(Math.random()*items.length)];;
//let verb = verbList.[randomID];
//let adjective = adjectiveList.[randomID];


//let fvMadlibs1 = `The ${noun} ${verb} to a ${adjective} clearing on the far side of the ${noun}. An ${adjective} ${noun} sat in the ${adjective} ${noun}. It was ${adjective}—he hardly knew the difference`;


//check to see how many of each word type are needed, if it doesnt have enough, offer a random selection of that type


//put words into madlib

//show poem

//buttons for sharing and downloading poem