const express = require('express')
const router = express();
const {Posts} = require("../models")

router.post("/cars",  async (req, res)=>{
    let cars = [
        {
          "color": "purple",
          "type": "minivan",
          "registration": new Date('2017-01-03'),
          "capacity": 7
        },
        {
          "color": "red",
          "type": "station wagon",
          "registration": new Date('2018-03-03'),
          "capacity": 5
        }
    ]
    res.json(cars);
});

router.post("/new",  async (req, res)=>{
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

router.get('/list', async (req, res)=>{
    const list = await Posts.findAll();
    res.json(list);
})

router.get('/byId/:id', async (req, res) =>{
const id = req.params.id;
const post = await Posts.findByPk(id)
res.json(post);
});

module.exports = router;