const router = require('express').Router();

router.get('/' , (req,res) => {

    res.json({message : "user'lar calisiyor"})

})

module.exports = router;