const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');


router.post('/', async (req, res) => {

    try {

        const data = req.body// assuming request has person data
        // create new person document using mongoose model
        const newPerson = new Person(data);
        const savedPersonResponse = await newPerson.save();
        console.log('Person saved successfully');
        //  save the new person into database;
        res.status(200).json(savedPersonResponse)


    } catch (error) {
        console.log('Error saving person', error);
        res.status(500).json({ error: error.message })
    }


})
router.get('/', async (req, res) => {

    try {

        const data = await Person.find();
        console.log('Person fetch successfully');
        //  save the new person into database;
        res.status(200).json(data)


    } catch (error) {
        console.log('Error Fetching Person', error);
        res.status(500).json({ error: error.errmsg })
    }


})

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (['chef', 'waiter', 'manager'].includes(workType)) {
            const response = await Person.find({ work: workType });
            res.status(200).json(response)
        } else {
            res.status(400).json({ message: 'invalid work type' })
        }


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
router.put('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
         const personId = req.params.id;
         const personUpdateData = req.body;

         const response = await Person.findByIdAndUpdate(personId,personUpdateData,{
            returnDocument:'after',
            runValidators:true
         });    
         if(!response){
            res.status(404).json({error:'Person not found'})
         }
          res.status(200).json(response)


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/:id',async(req,res)=>{
    try {
         const personId = req.params.id;
          const response = await Person.findByIdAndDelete(personId);

          if(!response){
            res.status(404).json({error:'Person not found'})
         }
          res.status(200).json({message:'Person Delete Successfully'})
          
        
    } catch (error) {
          res.status(500).json({ error: error.message })
    }
})


module.exports = router;