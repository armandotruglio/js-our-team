//Creo un array di object

const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Carrol',
        role: 'Chied Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg '
    }
]

//Stampo in console le informazioni

for(let member of members){
    for(let key in member){
        console.log(member[key]);
    }
}

//Acquisisco le card dal DOM

const resultCards = document.querySelectorAll('.card');

//Inserisco i membri del team nelle card del DOM

for(let i = 0; i  < members.length; i++){
    //Acquisico le informazioni del singolo membro
    const {name, role, photo} = members[i];
    const card = resultCards[i];

    //Creo un elemento per la foto
    const resultPhoto = document.createElement('img');
    resultPhoto.src = `img/${photo}`;
    resultPhoto.alt = 'member-' + i;
    
    //Creo un elemento per il nome
    const resultName = document.createElement('h3');
    resultName.innerText = name;
    
    //Creo un elemento per il ruolo
    const resultRole = document.createElement('h6');
    resultRole.innerText = role;
    

    //Inserisco gli elementi nella corrispettiva card del DOM
    card.appendChild(resultPhoto);
    card.appendChild(resultName);
    card.appendChild(resultRole);
}



