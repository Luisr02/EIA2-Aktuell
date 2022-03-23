var RandomPoemScript;
(function (RandomPoemScript) {
    var subjektArray = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    var prädikatArray = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    var objektArray = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjektArray, prädikatArray, objektArray);
    for (var index = 6; index >= 1; index--) {
        //console.log(index)
        var finalerSatz = getVerse(subjektArray, prädikatArray, objektArray);
        console.log(finalerSatz);
    }
    function getVerse(_subjektArray, _prädikatArray, _objektArray) {
        var bausteinSubjekt = Math.floor(Math.random() * _subjektArray.length);
        var bausteinPrädikat = Math.floor(Math.random() * _prädikatArray.length);
        var bausteinObjekt = Math.floor(Math.random() * _objektArray.length);
        var zufallsSatz = subjektArray[bausteinSubjekt] + " " + prädikatArray[bausteinPrädikat] + " " + objektArray[bausteinObjekt] + ".";
        //console.log(zufallsSatz)
        _subjektArray.splice(bausteinSubjekt, 1);
        _prädikatArray.splice(bausteinPrädikat, 1);
        _objektArray.splice(bausteinObjekt, 1);
        return zufallsSatz;
    }
})(RandomPoemScript || (RandomPoemScript = {}));
//# sourceMappingURL=RandomPoemScript.js.map