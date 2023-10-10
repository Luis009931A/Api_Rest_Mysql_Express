const { Router} = require('express');
const router = Router();

// import module fetch or axios. :

const axios = require('axios');

// routes ....------------------------------------------|

router.get('/', async(req, res) => {

    const response = await axios('https://jsonplaceholder.typicode.com/users');
    const users =  response.data;
  
    res.json(users);

});

//  ------------------------------------------------------|


module.exports = router
