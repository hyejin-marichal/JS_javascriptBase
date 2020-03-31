console.log("exo-7");

console.log(jsonDatas);

// 1.Parcourir les items fournis pour les afficher un à un dans la console
// for ..in
// for (let i in jsonDatas) {
//     console.log(jsonDatas[i]);
// }

//foreach

jsonDatas.forEach(element => console.log(element));

// 2. Créer un objet qui servira à traduire les types. Cet objet aura pour structure {type : "type traduit"}.

let trans = {

    videoGame: "Jeux Vidéo",
    house: "Maison",
    game: "Jeux",
    car: "Voiture",
    show: "Spectacle"
};

console.log(trans);

// 3. Ajouter une nouvelle clé aux objets existants pour sotcker le type traduit. Répéter le 1 pour vérifier le type traduit


jsonDatas.forEach(function (item) {
    item.typeFrench = trans[item.type];
    console.log(item);
});

function search() {
    const query = document.getElementById('name').value;
    jsonDatas.forEach((item) => {
        if (query === item.type) {
            console.log(item)
        }
    });
}


// 4.






