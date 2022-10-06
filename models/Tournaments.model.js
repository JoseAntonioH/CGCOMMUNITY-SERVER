const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const tournamentSchema = new Schema(
  {
    tournamentName: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    date:{
      type: String,
    },
    description:{
      type: String,
    },
    prize:{
      type: Number,
    },
    champion: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    finalistone:{
      type: String,
    },
    finalisttwo:{
      type: String,
    },
    semifinalistone:{
      type: String,
    },
    semifinalisttwo:{
        type: String,
    },
    semifinalistthree:{
        type: String,
    },
    semifinalistfour:{
        type: String,
    },
    game: [{type:Schema.Types.ObjectId,ref:"Game"}],
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);



module.exports = model("Tournament", tournamentSchema);
