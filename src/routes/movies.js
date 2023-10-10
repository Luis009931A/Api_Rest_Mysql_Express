const { Router } = require("express");
const router = Router();
const _ = require("underscore");

const movie = require('./samples.json');

// rutas ..

router.get('/', (req, res) => {
    res.json(movie);
});


router.post('/', (req, res) => {
    const {Title, Year, Month} = req.body;
    
    if (Title && Year && Month) {
        const id = movie.length + 1;
        const newMovie = {id, ...req.body}
        movie.push(newMovie);
        
        res.json(movie);
        
    }else
        res.status(500).json({error: 'Wrong Request 😥'});

});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {Title, Year, Month} = req.body;

    if (Title && Year && Month) {
        _.each(movie, (Smovie, i) => {
            if(Smovie.id == id){
                Smovie.Title = Title;
                Smovie.Year = Year;
                Smovie.Month = Month;
            }
        });
        res.json(movie);
    }else{
        res.status(500).json({ error: 'Fatal Error.'});
    }

});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(movie, (Smovie, i) => {
        if (Smovie.id == id) {
            movie.splice(i, 1);

        }
    });
    res.send(movie);

});

// -------------------------------------------------------------------|


module.exports = router;