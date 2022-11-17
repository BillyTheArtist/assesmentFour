const complimentBtn = document.getElementById("complimentButton")
const form = document.querySelector('form')
let creationForm = document.getElementById("creation-form")
let nameInput = document.getElementById("name-input")
let powerLevelInput = document.getElementById("p-level-input")
let personButton = document.getElementById('personButton')
let deleteButton = document.getElementById('deleteButton')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

let createPerson = (event) => {
event.preventDefault()

let myBody = {
    name: nameInput.value,
    powerLevel: powerLevelInput.value,
}

axios.post("http://localhost:4000/api/create/", myBody)
.then((response) => {
    let db = response.data
    console.log(db)
})
.catch((err) => {
    console.log(err)
})
}



nameInput.value = ''
powerLevelInput.value = ''

fortuneBtn.addEventListener('click', getFortune)
creationForm.addEventListener('submit', createPerson)


let getPeople = () => {
    axios.get("http://localhost:4000/api/people/")
        .then(res => {
            const data = res.data;
            console.log(data);
    });
}

personButton.addEventListener('click', getPeople)


let deletePerson = () => {
   
    // axios.delete("http://localhost:4000/api/delete/", myBody)
    axios.delete("http://localhost:4000/api/delete/", {
        
        data: {
            name: nameInput.value,
        }
      })
    .then((response) => {
        let db = response.data
        console.log('delete person', db)
    })
    .catch((err) => {
        console.log(err)
    })
    }

    deleteButton.addEventListener('click', deletePerson)