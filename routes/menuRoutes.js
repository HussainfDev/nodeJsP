const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem')

router.post('/',async (req,res)=>{

        try {
            const data = req.body;
       const newMenuItem = new MenuItem(data);
       const response = await newMenuItem.save();
       console.log('Menu Item Create successfully successfully');
        //  save the new person into database;
        res.status(200).json(response)
        } catch (error) {
            console.log('Error Menu Item Create', error);
            res.status(500).json({ error: error.message })
        }
})

router.get('/', async (req,res)=>{

      

      try {
        const data = await MenuItem.find();
          res.status(200).json(data)
      } catch (error) {
         console.log('Error Fetching Menu Item', error);
        res.status(500).json({ error: error.errmsg })
      }
})

router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;
        if (['sweet', 'sour', 'spicy'].includes(tasteType)) {
            const menuItems = await MenuItem.find({ taste: tasteType });
            res.status(200).json(menuItems)
        } else {
            res.status(400).json({ message: 'invalid taste type' })
        }


    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router;