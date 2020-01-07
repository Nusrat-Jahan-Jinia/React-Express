const express = require('express');
const router = express.Router();

//@route    GET api/auth
//@desc     GET logged in user 
//@access   Private

router.get('/', (req, res)=>{
res.send('Get logged in user');
});

//@route    POST api/auth 
//@desc     POST a user and get token
//@access   Public

router.post('/', (req, res)=>{
    res.send('log in user');
});

module.exports = router;