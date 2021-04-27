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

btnResearch.addEventListener('click', (e) =>{
    containerList.innerHTML = '';
    formResearch.classList.toggle('formResearch--hidden');

    fetch('https://botw-compendium.herokuapp.com/api/v2')
    .then((response) =>{
        return response.json();
    })
    .then((database) =>{
        console.log(database);
        let allArrays = database.data.creatures.non_food;
        allArrays = allArrays.concat(database.data.creatures.food);
        allArrays = allArrays.concat(database.data.materials);
        allArrays = allArrays.concat(database.data.monsters);
        allArrays = allArrays.concat(database.data.equipment);
        console.log(allArrays);

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
                        let li = document.createElement('li');
                        li.classList.add('creaturesNonFood');
                        li.innerHTML = `${filteredInput[i].name}`;
                        
                        let img = document.createElement('img');
                        img.setAttribute('src', filteredInput[i].image);
                        containerList.appendChild(li);
                        li.appendChild(img);
    
                    }
                };
            };
         });
    })
    .catch((response) =>{
        console.log('data non trouvée');
    });
    
});

function createList(dataCat){
    console.log(database);
    console.log(dataCat);
    let dataCatNames = [];
    for(let dataCatName of dataCat){
        dataCatNames.push(dataCatName.name);
    }
    dataCatNames.sort();
    for(let j = 0 ; j < dataCatNames.length ; j++){
        for(let i = 0 ; i < dataCat.length ; i++){

            if(dataCat[i].name == dataCatNames[j]){
                let li = document.createElement('li');
                li.classList.add('creaturesNonFood');
                li.innerHTML = `${dataCat[i].name}`;
                
                let img = document.createElement('img');
                img.setAttribute('src', dataCat[i].image);
                containerList.appendChild(li);
                li.appendChild(img);

            }
        };
    };
    console.log('tri et affichage terminé');
}

btnCreatures.addEventListener('click', (e) =>{
    containerList.innerHTML = '';
    formResearch.classList.add('formResearch--hidden');

    fetch('https://botw-compendium.herokuapp.com/api/v2')
    .then((response) =>{
        return response.json();
    })
    .then((database) =>{
        createList(database.data.creatures.non_food);
    })
    .catch((response) =>{
        console.log('data non trouvée');
    });
    
});

btnCreaturesFood.addEventListener('click', (e) =>{
    containerList.innerHTML = '';
    formResearch.classList.add('formResearch--hidden');

    fetch('https://botw-compendium.herokuapp.com/api/v2')
    .then((response) =>{
        return response.json();
    })
    .then((database) =>{
        createList(database.data.creatures.food);
    })
    .catch((response) =>{
        console.log('data non trouvée');
    });
    
});

btnMaterials.addEventListener('click', (e) =>{
    containerList.innerHTML = '';
    formResearch.classList.add('formResearch--hidden');

    fetch('https://botw-compendium.herokuapp.com/api/v2')
    .then((response) =>{
        return response.json();
    })
    .then((database) =>{
        createList(database.data.materials);
    })
    .catch((response) =>{
        console.log('data non trouvée');
    });
    
});

btnMonsters.addEventListener('click', (e) =>{
    containerList.innerHTML = '';
    formResearch.classList.add('formResearch--hidden');

    fetch('https://botw-compendium.herokuapp.com/api/v2')
    .then((response) =>{
        return response.json();
    })
    .then((database) =>{
        createList(database.data.monsters);
    })
    .catch((response) =>{
        console.log('data non trouvée');
    });
    
});

btnEquipments.addEventListener('click', (e) =>{
    containerList.innerHTML = '';
    formResearch.classList.add('formResearch--hidden');

    fetch('https://botw-compendium.herokuapp.com/api/v2')
    .then((response) =>{
        return response.json();
    })
    .then((database) =>{
        createList(database.data.equipment);
    })
    .catch((response) =>{
        console.log('data non trouvée');
    });
    
});