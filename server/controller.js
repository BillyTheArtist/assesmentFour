let database = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ['A beautiful, smart, and loving person will be coming into your life.',
            'A dubious friend may be an enemy in camouflage.',
            'A faithful friend is a strong defense.',
            'A feather in the hand is better than a bird in the air.',
            'A fresh start will put you on your way.'];
      
        
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    createPerson: (req, res) => {
        let name = req.body.name
        let powerLevel = req.body.powerLevel

        let highestId = 1
        for (let i = 0; i < database.length; i++) {
            if (database[i].id > highestId) {
                highestId = database[i].id
            }
        }

        highestId++

        let newPerson = {
            name,
            powerLevel,
            id: highestId,
        }
        database.push(newPerson)
        console.log(database)
        res.send(database)
    },
 
    getPeople: (req, res) => {
    
    res.status(200).send(database);  
    },
    deletePerson: (req, res) => {
        let name = req.body.name
        let index = database.findIndex((person) => person.name === name)
        console.log(index)
        database.splice(index, 1)
        res.status(200)
    }
}


