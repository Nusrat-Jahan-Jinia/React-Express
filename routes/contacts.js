const express = require('express');
const router = express.Router();

//@route    GET api/contacts
//@desc     GET all users contacts
//@access   Private

router.get('/', (req, res)=>{
res.send('Get all contacts');
});

//@route    POST api/contacts
//@desc     Add new contact
//@access   Private

router.post('/', (req, res)=>{
    res.send('Add a new contact');
});

//@route    Update api/contacts/:id
//@desc     Update a contact
//@access   Private

router.put('/:id', (req, res)=>{
    res.send('Update a contact');
});

//@route    Delete api/contacts/:id
//@desc     Delete a contact
//@access   Private

router.delete('/:id', (req, res)=>{
    res.send('Delete a contact');
});

module.exports = router;