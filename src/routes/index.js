const { Router } = require("express");
const router = Router();

// routes..
router.get('/', (req, res) => {
    res.json({"Title": "Naruto Shippuden The Movie"});
});




module.exports = router;