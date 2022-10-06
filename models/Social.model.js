const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const socialSchema = new Schema(
  {
    user:{
        type: String,
      },
    date:{
      type: String,
    },
    title:{
        type: String,
    },
    description:{
      type: String,
    },
    game: [{type:Schema.Types.ObjectId,ref:"Game"}],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);



module.exports = model("Social", socialSchema);
