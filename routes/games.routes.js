const router=require("express").Router()

const Game=require("../models/Game.model");
const Tournament=require("../models/Tournaments.model");
const Social=require("../models/Social.model");
const UserName=require("../models/User.model");
const mongoose = require("mongoose");


router.get("/", (req,res,next)=>{
    Game.find()
    .populate("tournament")
    .populate("social")
    .then((games)=>{
        res.json(games)
    })
    .catch((err)=>console.log(err))
})


router.post("/",(req,res,next)=>{
    const{gameName,image,genre,platforms,icon,developer,twitter,facebook,instagram,youtube}=req.body
    const game={
        gameName,
        image,
        genre,
        platforms,
        icon,
        developer,
        twitter,
        facebook,
        instagram,
        youtube,
        tournament:[],
        social:[]
    }
    Game.create(game)
    .then(gameCreated=>{
        console.log(gameCreated)
        res.json(gameCreated)
    })
    .catch((err)=>console.log(err))
});


router.get("/:id",async(req,res)=>{
    try{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({message:"Specified Id is not valid"})
        return;
    }
    const gameFound=await Game.findById(id)
    .populate("tournament")
    .populate("social")
    res.json(gameFound);
    }catch (error){
        console.log(error);
    }

    
});

router.put("/:id", async(req,res)=>{
    try{
        const{id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({message:"Specified Id is not valid"})
            return;
        }
        const gameUpdated=await Game.findByIdAndUpdate(id,req.body,{new:true})
        res.json(gameUpdated)
    }catch (error){
        console.log(error)
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const{id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({message:"Specified Id is not valid"})
            return;
        }
        const gameDeleted=await Game.findByIdAndDelete(id);
        res.json(gameDeleted)
    }catch(error){
        console.log(error)
    }
});


module.exports = router;