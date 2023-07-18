"use strict";
var RandomPoemScript;
(function (RandomPoemScript) {
    let subjektArray = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let prädikatArray = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objektArray = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjektArray, prädikatArray, objektArray);
    for (let index = 6; index >= 1; index--) {
        //console.log(index)
        let finalerSatz = getVerse(subjektArray, prädikatArray, objektArray);
        console.log(finalerSatz);
    }
    function getVerse(_subjektArray, _prädikatArray, _objektArray) {
        let bausteinSubjekt = Math.floor(Math.random() * _subjektArray.length);
        let bausteinPrädikat = Math.floor(Math.random() * _prädikatArray.length);
        let bausteinObjekt = Math.floor(Math.random() * _objektArray.length);
        let zufallsSatz = subjektArray[bausteinSubjekt] + " " + prädikatArray[bausteinPrädikat] + " " + objektArray[bausteinObjekt] + ".";
        //console.log(zufallsSatz)
        _subjektArray.splice(bausteinSubjekt, 1);
        _prädikatArray.splice(bausteinPrädikat, 1);
        _objektArray.splice(bausteinObjekt, 1);
        return zufallsSatz;
    }
})(RandomPoemScript || (RandomPoemScript = {}));
//# sourceMappingURL=RandomPoemScript.js.map