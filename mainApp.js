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

btnCreatures.addEventListener('click', (e) =>{
    containerList.innerHTML = '';
    formResearch.classList.add('formResearch--hidden');

    fetch('https://botw-compendium.herokuapp.com/api/v2')
    .then((response) =>{
        return response.json();
    })
    .then((database) =>{
        console.log(database);
        let creaturesNonFood = database.data.creatures.non_food;
        console.log(creaturesNonFood);
        let creaturesNonFoodNames = [];
        for(let creaturesName of creaturesNonFood){
            creaturesNonFoodNames.push(creaturesName.name);
        }
        creaturesNonFoodNames.sort();
        for(let j = 0 ; j < creaturesNonFoodNames.length ; j++){
            for(let i = 0 ; i < creaturesNonFood.length ; i++){

                if(creaturesNonFood[i].name == creaturesNonFoodNames[j]){
                    let li = document.createElement('li');
                    li.classList.add('creaturesNonFood');
                    li.innerHTML = `${creaturesNonFood[i].name}`;
                    
                    let img = document.createElement('img');
                    img.setAttribute('src', creaturesNonFood[i].image);
                    containerList.appendChild(li);
                    li.appendChild(img);

                }
            };
        };
        console.log('tri et affichage terminé');
        
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
        console.log(database);
        let creaturesFood = database.data.creatures.food;
        console.log(creaturesFood);
        let creaturesFoodNames = [];
        for(let creaturesName of creaturesFood){
            creaturesFoodNames.push(creaturesName.name);
        }
        creaturesFoodNames.sort();
        for(let j = 0 ; j < creaturesFoodNames.length ; j++){
            for(let i = 0 ; i < creaturesFood.length ; i++){

                if(creaturesFood[i].name == creaturesFoodNames[j]){
                    let li = document.createElement('li');
                    li.classList.add('creaturesNonFood');
                    li.innerHTML = `${creaturesFood[i].name}`;
                    
                    let img = document.createElement('img');
                    img.setAttribute('src', creaturesFood[i].image);
                    containerList.appendChild(li);
                    li.appendChild(img);

                }
            };
        };
        console.log('tri et affichage terminé');
        
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
        console.log(database);
        let materials = database.data.materials;
        console.log(materials);
        let materialsNames = [];
        for(let materialsNameEl of materials){
            materialsNames.push(materialsNameEl.name);
        }
        materialsNames.sort();
        for(let j = 0 ; j < materialsNames.length ; j++){
            for(let i = 0 ; i < materials.length ; i++){

                if(materials[i].name == materialsNames[j]){
                    let li = document.createElement('li');
                    li.classList.add('creaturesNonFood');
                    li.innerHTML = `${materials[i].name}`;
                    
                    let img = document.createElement('img');
                    img.setAttribute('src', materials[i].image);
                    containerList.appendChild(li);
                    li.appendChild(img);

                }
            };
        };
        console.log('tri et affichage terminé');
        
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
        console.log(database);
        let monsters = database.data.monsters;
        console.log(monsters);
        let monstersNames = [];
        for(let monstersNameEl of monsters){
            monstersNames.push(monstersNameEl.name);
        }
        monstersNames.sort();
        for(let j = 0 ; j < monstersNames.length ; j++){
            for(let i = 0 ; i < monsters.length ; i++){

                if(monsters[i].name == "molduking" ||
                   monsters[i].name == "monk maz koshia" ||
                   monsters[i].name == "igneo talus titan"){
                    // images inexistantes
                }else if(monsters[i].name == monstersNames[j]){
                    let li = document.createElement('li');
                    li.classList.add('creaturesNonFood');
                    li.innerHTML = `${monsters[i].name}`;
                    
                    let img = document.createElement('img');
                    img.setAttribute('src', monsters[i].image);
                    containerList.appendChild(li);
                    li.appendChild(img);
                }
            };
        };
        console.log('tri et affichage terminé');
        
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
        console.log(database);
        let equipments = database.data.equipment;
        console.log(equipments);
        let equipmentsNames = [];
        for(let equipmentsNamesEl of equipments){
            equipmentsNames.push(equipmentsNamesEl.name);
        }
        equipmentsNames.sort();
        for(let j = 0 ; j < equipmentsNames.length ; j++){
            for(let i = 0 ; i < equipments.length ; i++){

                if(equipments[i].name == 'ancient battle axe+'  ||
                   equipments[i].name == 'ancient battle axe++' ||
                   equipments[i].name == 'golden bow'           ||
                   equipments[i].name == 'golden claymore'      ||
                   equipments[i].name == 'guardian shield+'     ||
                   equipments[i].name == 'guardian shield++'    ||
                   equipments[i].name == 'guardian spear+'      ||
                   equipments[i].name == 'guardian spear++'     ||
                   equipments[i].name == 'guardian sword+'      ||
                   equipments[i].name == 'guardian sword++'     ||
                   equipments[i].name == 'one-hit obliterator'){
                    // image inexistante
                }else if(equipments[i].name == equipmentsNames[j]){
                    let li = document.createElement('li');
                    li.classList.add('creaturesNonFood');
                    li.innerHTML = `${equipments[i].name}`;
                    
                    let img = document.createElement('img');
                    img.setAttribute('src', equipments[i].image);
                    containerList.appendChild(li);
                    li.appendChild(img);
                }
            };
        };
        console.log('tri et affichage terminé');
    })
    .catch((response) =>{
        console.log('data non trouvée');
    });
    
});