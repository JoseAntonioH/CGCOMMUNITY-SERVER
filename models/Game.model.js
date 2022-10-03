const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const gameSchema = new Schema(
  {
    gameName: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    image:{
        type: String,
      },
    genre:{
      type: String,
    },
    platforms:{
      type: String,
    },
    twitter:{
        type: String,
      },
      instagram:{
        type: String,
      },
      youtube:{
        type: String,
      },
      facebook:{
        type: String,
      },
      icon:{
        type: String,
      },
      developer:{
        type: String,
      },
    tournament: [{type:Schema.Types.ObjectId,ref:"Tournament"}],
    social: [{type:Schema.Types.ObjectId,ref:"Social"}],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

 

module.exports = model("Game", gameSchema);
