const router=require("express").Router();

const Tournament=require ("../models/Tournaments.model");
const Game=require("../models/Game.model")
const mongoose = require("mongoose");

router.get("/tournaments", (req,res,next)=>{
    Tournament.find()
    .then((tournament)=>{
        res.json(tournament)
    })
    .catch((err)=>console.log(err))
})

router.post("/tournaments",(req,res,next)=>{
    const{tournamentName,date,description,prize,champion,finalistone,finalisttwo,semifinalistone,semifinalisttwo,semifinalistthree,semifinalistfour,gameId}=req.body;

    Tournament.create({tournamentName,date,description,prize,champion,finalistone,finalisttwo,semifinalistone,semifinalisttwo,semifinalistthree,semifinalistfour,game:gameId})
    .then((newTournament)=>{
        return Game.findByIdAndUpdate(gameId,{
            $push:{tournament:newTournament._id}
        });
    })
    .then((response)=>res.json(response))
    .catch((err)=>res.json(err));
})

router.get("/tournaments/:id",async(req,res)=>{
    try{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({message:"Specified Id is not valid"})
        return;
    }
    const tournamentFound=await Tournament.findById(id)
    res.json(tournamentFound);
    }catch (error){
        console.log(error);
    }
})


router.put("/torunament/:id", async(req,res)=>{
    try{
        const{id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({message:"Specified Id is not valid"})
            return;
        }
        const tournamentUpdated=await Tournament.findByIdAndUpdate(id,req.body,{new:true})
        res.json(tournamentUpdated)
    }catch (error){
        console.log(error)
    }
});


router.delete("/tournaments/:id",async(req,res)=>{
    try{
        const{id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({message:"Specified Id is not valid"})
            return;
        }
        const tournamentDeleted=await Tournament.findByIdAndDelete(id);
        res.json(tournamentDeleted)
    }catch(error){
        console.log(error)
    }
});

module.exports=router;