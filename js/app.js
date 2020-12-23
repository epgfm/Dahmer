var i = 0;

var justifications = [
    "Je vais quand même pas manger de l'herbe.",
    "J'ai besoin de protéines",
    "C'est mon choix personnel, vous êtes qui pour me juger ?",
    "Hitler était un végétarien.",
    "Je respecte le sacrifice qu'ils ont fait pour moi, c'est pour ça que je mange tout.",
    "Arrêtez de forcer vos opinions, ce que je mange ne regarde que moi.",
    "J'adore les gens.",
    "Pas de consommation éthique dans un système capitaliste.",
    "La moralité c'est subjectif.",
    "Les lions mangent bien des gens.",
    "Les gens ont mangés des gens depuis la nuit des temps.",
    "Vous faîtes quoi si vous êtes sur une île déserte ?",
    "Des gens meurent chaque année dans des accidents de la route pour transporter votre tofu, donc vous tuez des gens aussi.",
    "Juste parce que vous mangez pas des gens vous pensez être meilleurs que moi ?",
    "J'ai des canines, c'est pas pour rien.",
    "Je suis en faveur de ne pas manger des gens le lundi.",
    "Je connais un mec qui ne mange pas de gens, et il est toujours malade.",
    "Tu écrase des insectes quand tu marche dans la rue, hypocrite"
]


function handleClick() {
    var msg = document.getElementById("msg");
    msg.innerText = justifications[i];
    i = i + 1;
    i = i % justifications.length;
}

function loaded() {
    var dahmer = document.getElementById("dahmer");
    dahmer.addEventListener("click", handleClick);
}

document.addEventListener("DOMContentLoaded", loaded);


