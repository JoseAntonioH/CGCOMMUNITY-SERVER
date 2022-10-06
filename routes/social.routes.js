const router=require("express").Router();

const Social=require ("../models/Social.model");
const Game=require("../models/Game.model")
const mongoose = require("mongoose");

router.get("/social", (req,res,next)=>{
    Social.find()
    .then((social)=>{
        res.json(social)
    })
    .catch((err)=>console.log(err))
})

router.post("/social",(req,res,next)=>{
    const{user,title,date,description,gameId}=req.body;

    Social.create({user,title,date,description,game:gameId})
    .then((newSocial)=>{
        return Game.findByIdAndUpdate(gameId,{
            $push:{social:newSocial._id}
        });
    })
    .then((response)=>res.json(response))
    .catch((err)=>res.json(err));
})

router.get("/social/:id",async(req,res)=>{
    try{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({message:"Specified Id is not valid"})
        return;
    }
    const socialFound=await Social.findById(id)
    res.json(socialFound);
    }catch (error){
        console.log(error);
    }
})





router.delete("/social/:id",async(req,res)=>{
    try{
        const{id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({message:"Specified Id is not valid"})
            return;
        }
        const socialDeleted=await Social.findByIdAndDelete(id);
        res.json(socialDeleted)
    }catch(error){
        console.log(error)
    }
});



module.exports=router;