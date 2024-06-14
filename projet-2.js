const prompt = require("prompt-sync")()

console.log("Bonjour et bienvenue, tu vas jamais réussir à 100% du premier coup, s'il te plait écris bien mes lettres en majuscule.");

let tab = [
    {
        question : "Est-ce que les requins marteau sont végétariens ?",
        reponses : ["A : Oui, c'est Hind qui l'a dit.", "B : Non, ils sont omnivores.", "C : Non c'est des carnvivores.", "D : J'ai l'air dêtre calé(e) là dessus ??"],
        good : "B"
    },
    {
        question : "Est-ce que les orques sont inoffensives ?",
        reponses : ["A : Lol non ?", "B : Hind dit que oui alors ça doit être vrai", "C : Gros je suis toujours pas calée là dessus...", "D : Non elles chassent en pod (groupe de cétacés) et s'amusent avec leur nourriture.", "E : Si elles sont gentilles comme Willy."],
        good : "D"
    },
    {
        question : "Est-ce que la faune aquatique est végétarienne ?",
        reponses : ["A : Hind dit que oui du coup oui.", "B : Mais c'est quoi cette question ?", "C : T'as fumé ?", "D : Non."],
        good : "D"
    },
    {
        question : "Faut-t'il scotcher la bouche d'Hind ?",
        reponses : ["A : Oui.", "B : J'suis chaud.", "C : Non...", "D : Carrément"],
        good : "A"
    },
    {
        question : "Est-ce qu'on serait pas mieux si Lucas restait en distanciel ?",
        reponses : ["A : OUI", "B : Non il me manquerait trop", "C : Qui ?", "D : Non j'ai besoin de son aide"],
        good : "B",
    }
]
let count = 0

for (let i = 0; i < tab.length; i++) {
    console.log(tab[i].question);
    for (let j = 0; j < tab[i].reponses.length; j++) {
        console.log(tab[i].reponses[j]);
    }
    let awnser = prompt ("Quelle est ta réponse ? : ")
    if (awnser === tab[i].good) {
        count++
    }
}
if (count === 5) {
    console.log(`GG t'as eu ${count}`);
}else if (count < 5) {
    console.log(`T'es rincé au sol t'as eu ${count}`);
}