namespace RandomPoemScript {

let subjektArray: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let prädikatArray: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objektArray: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

//console.log(subjektArray, prädikatArray, objektArray);

for (let index = 6; index >= 1 ; index--) {
    
    //console.log(index)
    
    let finalerSatz: string = getVerse (subjektArray, prädikatArray, objektArray);
    console.log(finalerSatz);
}

function getVerse (_subjektArray, _prädikatArray, _objektArray): string {
    
    let bausteinSubjekt: number = Math.floor(Math.random() * _subjektArray.length);
    let bausteinPrädikat: number =  Math.floor(Math.random() * _prädikatArray.length);
    let bausteinObjekt: number =  Math.floor(Math.random() * _objektArray.length);

    let zufallsSatz: string = subjektArray [bausteinSubjekt] + " " + prädikatArray [bausteinPrädikat] + " " + objektArray [bausteinObjekt] + ".";
    //console.log(zufallsSatz)

    _subjektArray.splice(bausteinSubjekt, 1);
    _prädikatArray.splice(bausteinPrädikat, 1);
    _objektArray.splice(bausteinObjekt, 1);

    return zufallsSatz;
}

}