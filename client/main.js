const complimentBtn = document.getElementById("complimentButton")
const form = document.querySelector('form')
let creationForm = document.getElementById("creation-form")
let nameInput = document.getElementById("name-input")
let powerLevelInput = document.getElementById("p-level-input")





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

const createPerson = (event) => {
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



