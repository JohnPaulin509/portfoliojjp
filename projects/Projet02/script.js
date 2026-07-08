function Additionner() {
    let zoneResultat = document.getElementById("ZoneResultat");

    let saisie1 = document.forms['monformulaire'].elements['nomduchamp1'].value;
    let saisie2 = document.forms['monformulaire'].elements['nomduchamp2'].value;

    if (saisie1.trim() === " " || saisie2.trim() === " ") {
        zoneResultat.innerHTML = "Veuillez remplir les deux champs de saisie.";
        return;
    }
    let valeur1 = Number(saisie1);
    let valeur2 = Number(saisie2);

    if (isNaN(valeur1) || isNaN(valeur2)) {
        zoneResultat.innerHTML = "Veuillez entrer uniquement des nombres valides.";
        return;
    }
    let somme = valeur1 + valeur2;
    zoneResultat.innerHTML = "Le resultat de l'addition est : " + somme;
}

function reinitialiser(){
    document.forms['monformulaire'].elements['nomduchamp1'].value = " ";
    document.forms['monformulaire'].elements['nomduchamp2'].value = " ";
document.getElementById("ZoneResultat").innerHTML = " ";
}