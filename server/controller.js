let movies = require('./db.json')

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
    getMovies: (req, res) => {
        res.send(movies)
    },
    deleteMovie: (req, res) => {
        let deleteId = req.params.id
        let index = movies.findIndex(element => element.id === +deleteId)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
   createMovie : (req, res) => {
    let {title, rating, imageURL} = req.body

    let greatestId = -1
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].id > greatestId) {
            greatestId = movies[i].id
        }
    }

    let nextId = greatestId + 1

    let newMovie = {
        id: nextId,
        title,
        rating,
        imageURL,
    }

    movies.push(newMovie)
    res.status(200).send(movies)
   },
   updateMovie: (req, res) => {
    let type = req.body.type
    let id = req.params.id
    // console.log(type + ' to ' + id)
    let index = movies.findIndex(element => element.id === +id)

    if (type === 'plus') {
        movies[index].rating++
        res.send(movies)
    } else if (type === 'minus') {
        movies[index].rating--
        res.send(movies)
    } else {
        res.sendStatus(400)
    }
   }
    

}


