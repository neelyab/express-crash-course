const express = require('express');
const router = express.Router();
const uuid = require('uuid')
//import members file
const members = require('../../Members');

//route gets all members
router.get('/', (req, res) => {
    res.json(members);
});
// get single member
router.get('/:id', (req, res)=>{
    //check to see if id exists, if it it does this will be true
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        //filter the member id that is equal to the param in the request
    res.json(members.filter((member) =>
    // convert param to a number since it is originally in json
        member.id === parseInt(req.params.id)))
    }
    //if id is not found, send 404 status and notification that the id was not found
    else {
        res.status(400).send('id not found');
    }
})
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email:req.body.email,
        status: 'active'
    }
    if(!newMember.name || !newMember.email){
        // DONT FORGET RETURN if not including an else statement, you will get a 'headers already sent' response without the return
      return  res.status(400).json({msg: 'please include a name and email'})
    }
    //if everything is correct in the request, add new member to the array and send the info in a json response
    members.push(newMember);
    res.json({newMember});


})

module.exports = router;