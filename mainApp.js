'use strict';

let btnCreatures = document.querySelector('.btnCreatures');
let btnCreaturesFood = document.querySelector('.btnCreaturesFood');
let btnMaterials = document.querySelector('.btnMaterials');
let btnMonsters = document.querySelector('.btnMonsters');
let btnEquipments = document.querySelector('.btnEquipments');
let btnAll = document.querySelector('.btnAll');
let container = document.querySelector('.container');
let containerList = document.querySelector('.containerList');
let formResearch = document.querySelector('.formResearch');
let formResearchInput = document.querySelector('.formResearchInput');
let btnSubmit = document.querySelector('.btnSubmit');

let infosContainer = document.querySelector('.infosContainer');
let greyCover = document.querySelector('.greyCover');

let btnsContainer = document.querySelector('.btnsContainer');
let y = 0;

document.addEventListener('scroll', (e) =>{
    let y2 = window.scrollY;
    if(y2 > y){
        btnsContainer.classList.add('btnsContainer--hidden');
    }else{
        btnsContainer.classList.remove('btnsContainer--hidden');
    }
    y = y2;
});

document.querySelector('.closeInfos').addEventListener('click', (e) =>{
    greyCover.classList.add('greyCover--hidden');
    infosContainer.classList.add('infosContainer--hidden');
});
greyCover.addEventListener('click', (e) =>{
    greyCover.classList.add('greyCover--hidden');
    infosContainer.classList.add('infosContainer--hidden');
});

function liElement(input){
    let li = document.createElement('li');
    li.classList.add('creaturesNonFood');
    li.innerHTML = `${input.name}`;
    
    let img = document.createElement('img');
    img.setAttribute('src', input.image);
    containerList.appendChild(li);
    li.appendChild(img);

    clickOnElement(li, input);
}

// création des infos lors du click sur un élément
function clickOnElement(elClicked, catEl){
    elClicked.addEventListener('click', (e) =>{
        console.log('element clicked');
        infosContainer.classList.remove('infosContainer--hidden');
        greyCover.classList.remove('greyCover--hidden');
        infosContainer.animate(infosKeyframes, infosOptions);

        console.log(catEl);
        let name = document.createElement('li');
        name.innerHTML = `${catEl.name}`;
        infosContainer.appendChild(name);
        
        let img = document.createElement('img');
        img.setAttribute('src', catEl.image);
        infosContainer.appendChild(img);

        let description = document.createElement('li');
        description.innerHTML = `Description : ${catEl.description}`;
        infosContainer.appendChild(description);
    });
}


function recherche(dataCat){
    let arrayNames = [];
    for(let arraysNameEl of dataCat){
        arrayNames.push(arraysNameEl.name);
    }
    arrayNames.sort();

    formResearch.addEventListener('submit', (e) =>{
        e.preventDefault();
        let formInput = document.querySelector('#filter-term').value.toLowerCase();
        // get users that includes input
        let filteredInput = dataCat.filter((arraysEl) =>{
            return arraysEl.name.toLowerCase().includes(formInput);
        });
        // create li with users informations
        containerList.innerHTML = "";
        
        for(let j = 0 ; j < arrayNames.length ; j++){
            for(let i = 0 ; i < filteredInput.length ; i++){
                
                if( filteredInput[i].name == "molduking"        ||
                filteredInput[i].name == "monk maz koshia"      ||
                filteredInput[i].name == "igneo talus titan"    ||
                filteredInput[i].name == 'ancient battle axe+'  ||
                filteredInput[i].name == 'ancient battle axe++' ||
                filteredInput[i].name == 'golden bow'           ||
                filteredInput[i].name == 'golden claymore'      ||
                filteredInput[i].name == 'guardian shield+'     ||
                filteredInput[i].name == 'guardian shield++'    ||
                filteredInput[i].name == 'guardian spear+'      ||
                filteredInput[i].name == 'guardian spear++'     ||
                filteredInput[i].name == 'guardian sword+'      ||
                filteredInput[i].name == 'guardian sword++'     ||
                filteredInput[i].name == 'one-hit obliterator'){
                    // images inexistantes
                }else 
                if(filteredInput[i].name == arrayNames[j]){
                    liElement(filteredInput[i]);
                }
            };
        };
        formResearchInput.value = "";
    });
}

function createList(dataCat, btnClicked, cat){
    btnClicked.removeAttribute('disabled');
    formResearchInput.removeAttribute('disabled');
    btnSubmit.removeAttribute('disabled');

    btnClicked.addEventListener('click', (e) =>{
        
        containerList.innerHTML = '';
        let dataCatNames = [];
        for(let dataCatNameEl of dataCat){
            dataCatNames.push(dataCatNameEl.name);
        }
        dataCatNames.sort();

        if(cat == 'creatures'){
            console.log('creatures');
            recherche(dataCat);
        }else if(cat == 'creaturesFood'){
            console.log('creaturesFood');
            recherche(dataCat);
        }else if(cat == 'materials'){
            console.log('materials');
            recherche(dataCat);
        }else if(cat == 'equipment'){
            console.log('equipment');
            recherche(dataCat);
        }else if(cat == 'monsters'){
            console.log('monsters');
            recherche(dataCat);
        }else if(cat == 'all'){
            console.log('all');
            recherche(dataCat);
        }

        for(let j = 0 ; j < dataCatNames.length ; j++){
            for(let i = 0 ; i < dataCat.length ; i++){
                
                if( dataCat[i].name == "molduking"        ||
                dataCat[i].name == "monk maz koshia"      ||
                dataCat[i].name == "igneo talus titan"    ||
                dataCat[i].name == 'ancient battle axe+'  ||
                dataCat[i].name == 'ancient battle axe++' ||
                dataCat[i].name == 'golden bow'           ||
                dataCat[i].name == 'golden claymore'      ||
                dataCat[i].name == 'guardian shield+'     ||
                dataCat[i].name == 'guardian shield++'    ||
                dataCat[i].name == 'guardian spear+'      ||
                dataCat[i].name == 'guardian spear++'     ||
                dataCat[i].name == 'guardian sword+'      ||
                dataCat[i].name == 'guardian sword++'     ||
                dataCat[i].name == 'one-hit obliterator'){
                    // images inexistantes
                }else if(dataCat[i].name == dataCatNames[j]){
                    liElement(dataCat[i]);
                }
            };
        };

        console.log('tri et affichage terminé');
    });
}


fetch('https://botw-compendium.herokuapp.com/api/v2')
.then((response) =>{
    return response.json();
})
.then((database) =>{
    console.log(database);
    const creatures = database.data.creatures.non_food;
    const creaturesFood = database.data.creatures.food;
    const materials = database.data.materials;
    const equipment = database.data.equipment;
    const monsters = database.data.monsters;
    let arrayConcat = database.data.creatures.non_food;
    arrayConcat = arrayConcat.concat(database.data.creatures.food);
    arrayConcat = arrayConcat.concat(database.data.materials);
    arrayConcat = arrayConcat.concat(database.data.monsters);
    const allArrays = arrayConcat.concat(database.data.equipment);

    let catAll = 'all';
    let cat1 = 'creatures';
    let cat2 = 'creaturesFood';
    let cat3 = 'materials';
    let cat4 = 'equipment';
    let cat5 = 'monsters';
    createList(allArrays, btnAll, catAll);
    createList(creatures, btnCreatures, cat1);
    createList(creaturesFood, btnCreaturesFood, cat2);
    createList(materials, btnMaterials, cat3);
    createList(equipment, btnEquipments, cat4);
    createList(monsters, btnMonsters, cat5);

    
})
.catch((response) =>{
console.log('data non trouvée => ' + response);
});


// animations
// ============

const infosKeyframes = {
    opacity: ['0%', '100%'],
    right: ['-400px', '0px']
};
const infosOptions = {
    duration: 300,
    iterations: 1,
    fill: 'forwards',
    easing: 'ease'
};
