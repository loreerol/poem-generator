//poem generator

//User can choose from a number of words, each word has a mood value
//
//Once the words are chosen, the mood value is calculated and a madlibs style template is chosen
//
//The chosen words are inserted into the madlib and shown to the user
//
//*bonus, the user can download the poem as .txt
"use strict";

//4 words randomly selected from each of the three value lists.
//user selects 3 words from 12 offered.  
    //remove these words from each list so they don't get resused later.
    //add these words to an array of selected words
    //add the values of these words to a array of selected values
//check to see which value has been selected the most
//offer a new list of 12 words made of 7 of the common value, the other 5 are random from all lists
//repeat the last step, offering 12 more words
//check value array again to see which value is the most common, now out of 9 words chosen, use this to choose a poem type.
//types are Free Verse, Sonnet and Limerick
//
//


const freeVerseWords = {
    nouns: [{
    {word: `plagues`, value: `fv`, type: `noun`},
    {word: `cigarettes`, value: `fv`, type:`noun`},
    {word: `streetlight`, value: `fv`, type: `noun`},
    {word: `waiitress`, value: `fv`, type:`noun`},
    {word: `waiitress`, value: `fv`, type:`noun`},
    {word: `echos`, value: `fv`, type:`noun`},
    {word: `cocktails`, value: `fv`, type:`noun`},
    {word: `hands`, value: `fv`, type:`noun`},
    {word: `misanthrope`, value: `fv`, type:`noun`},
    {word: `drugs`, value: `fv`, type:`noun`},  
    {word: `doorknob`, value: `fv`, type:`noun`},
    {word: `hammer`, value: `fv`, type:`noun`},
    {word: `highway`, value: `fv`, type:`noun`},
    {word: `liquor`, value: `fv`, type:`noun`},
    {word: `moonlight`, value: `fv`, type:`noun`}
}]
    adjectives: [{
    {word: `sublime`, value: `fv`, type: `adjective`},
    {word: `criminal`, value: `fv`, type: `adjective`},
    {word: `indiscriminate`, value: `fv`, type:`adjective`},
    {word: `cruel`, value: `fv`, type:`adjective`},
    {word: `supine`, value: `fv`, type:`adjective`},
    {word: `unborn`, value: `fv`, type:`adjective`},
    {word: `sanguine`, value: `fv`, type:`adjective`},
    {word: `eternal`, value: `fv`, type:`adjective`},
    {word: `nuclear`, value: `fv`, type:`adjective`},
    {word: `dumb`, value: `fv`, type:`adjective`},
    {word: `rough`, value: `fv`, type:`adjective`},
    {word: `recreational`, value: `fv`, type:`adjective`},
    {word: `sad`, value: `fv`, type:`adjective`},
    {word: `unemployed`, value: `fv`, type:`adjective`},
    {word: ``, value: `fv`, type:`adjective`}
}]
    verbs: [{
        {word: `quavers`, value: `fv`, type:`verb`},
    {word: `hesitate`, value: `fv`, type:`verb`},
    {word: ``, value: `fv`, type:`verb`},
    {word: ``, value: `fv`, type:`verb`},
    {word: ``, value: `fv`, type:`verb`},
    {word: ``, value: `fv`, type:`verb`},
    {word: ``, value: `fv`, type:`verb`},
    {word: ``, value: `fv`, type:`verb`},
    {word: ``, value: `fv`, type:`verb`},
    {word: ``, value: `fv`, type:`verb`},
    {word: ``, value: `fv`, type:`verb`},
    {word: ``, value: `fv`, type:`verb`},
    {word: ``, value: `fv`, type:`verb`},
    {word: ``, value: `fv`, type:`verb`},
    {word: ``, value: `fv`, type:`verb`}
}]
};

const limerickWords = {
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
    {word: ``, value: `l`},
};

const sonnetWords = {
    {word: `love`, value: `s`},
    {word: `quake`, value: `s`},
    {word: `kiss`, value: `s`},
    {word: `yern`, value: `s`},
    {word: `soul`, value: `s`},
    {word: `passion`, value: `s`},
    {word: `breath`, value: `s`},
    {word: `heavenly`, value: `s`},
    {word: `tenderness`, value: `s`},
    {word: `stars`, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`},
    {word: ``, value: `s`}
};

let chosenWords = [];

let chosenValues = [];

