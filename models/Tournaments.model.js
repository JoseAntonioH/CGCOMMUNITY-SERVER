const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const tournamentSchema = new Schema(
  {
    tournamentName: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    date:{
      type: Date,
    },
    description:{
      type: String,
    },
    prize:{
      type: Number,
    },
    game: [{type:Schema.Types.ObjectId,ref:"Game"}],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);



module.exports = model("Tournament", tournamentSchema);
