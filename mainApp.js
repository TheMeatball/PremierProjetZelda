'use strict';

let btnCreatures = document.querySelector('.btnCreatures');
let btnCreaturesFood = document.querySelector('.btnCreaturesFood');
let btnMaterials = document.querySelector('.btnMaterials');
let btnMonsters = document.querySelector('.btnMonsters');
let btnEquipments = document.querySelector('.btnEquipments');
let btnResearch = document.querySelector('.btnResearch');
let container = document.querySelector('.container');
let containerList = document.querySelector('.containerList');
let formResearch = document.querySelector('.formResearch');

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

function liElement(input){
    let li = document.createElement('li');
    li.classList.add('creaturesNonFood');
    li.innerHTML = `${input.name}`;
    
    let img = document.createElement('img');
    img.setAttribute('src', input.image);
    containerList.appendChild(li);
    li.appendChild(img);
}

function createList(dataCat, btnClicked){
    btnClicked.removeAttribute('disabled');
    
    btnClicked.addEventListener('click', (e) =>{
        if(!formResearch.classList.contains('formResearch--hidden')){   
            formResearch.classList.add('formResearch--hidden');
        }
        containerList.innerHTML = '';
        let dataCatNames = [];
        for(let dataCatNameEl of dataCat){
            dataCatNames.push(dataCatNameEl.name);
        }
        dataCatNames.sort();
        for(let j = 0 ; j < dataCatNames.length ; j++){
            for(let i = 0 ; i < dataCat.length ; i++){
                
                if( dataCat[i].name == "molduking"            ||
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

    createList(creatures, btnCreatures);
    createList(creaturesFood, btnCreaturesFood);
    createList(materials, btnMaterials);
    createList(equipment, btnEquipments);
    createList(monsters, btnMonsters);

    
    // recherche dans toutes les catégories
    btnResearch.removeAttribute('disabled');
    btnResearch.addEventListener('click', (e) =>{
        formResearch.classList.toggle('formResearch--hidden');
        containerList.innerHTML = '';
        
        let allArraysNames = [];
        for(let allArraysNameEl of allArrays){
            allArraysNames.push(allArraysNameEl.name);
        }
        allArraysNames.sort();

        formResearch.addEventListener('submit', (e) =>{
            e.preventDefault();
            let formInput = document.querySelector('#filter-term').value.toLowerCase();
            // get users that includes input
            let filteredInput = allArrays.filter((allArraysEl) =>{
                return allArraysEl.name.toLowerCase().includes(formInput);
            });
            // create li with users informations
            containerList.innerHTML = "";
            
            for(let j = 0 ; j < allArraysNames.length ; j++){
                for(let i = 0 ; i < filteredInput.length ; i++){
                    
                    if( filteredInput[i].name == "molduking"            ||
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
                    if(filteredInput[i].name == allArraysNames[j]){
                        liElement(filteredInput[i]);
                    }
                };
            };
        });
    });
})
.catch((response) =>{
console.log('data non trouvée => ' + response);
});
