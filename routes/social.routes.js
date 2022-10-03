const router=require("express").Router();

const Social=require ("../models/Social.model");
const Game=require("../models/Game.model")

router.post("/social",(req,res,next)=>{
    const{userName,date,description,gameId}=req.body;

    Social.create({userName,date,description,game:gameId})
    .then((newSocial)=>{
        return Game.findByIdAndUpdate(gameId,{
            $push:{social:newSocial._id}
        });
    })
    .then((response)=>res.json(response))
    .catch((err)=>res.json(err));
})


module.exports=router;