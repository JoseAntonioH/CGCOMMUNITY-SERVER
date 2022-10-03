const router=require("express").Router();

const Tournament=require ("../models/Tournaments.model");
const Game=require("../models/Game.model")


router.post("/tournaments",(req,res,next)=>{
    const{tournamentName,date,description,prize,gameId}=req.body;

    Tournament.create({tournamentName,date,description,prize,game:gameId})
    .then((newTournament)=>{
        return Game.findByIdAndUpdate(gameId,{
            $push:{tournament:newTournament._id}
        });
    })
    .then((response)=>res.json(response))
    .catch((err)=>res.json(err));
})



module.exports=router;