const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true 
    },
    email:{
      type: String,
    },
    completeName:{
      type: String,
    },
    profilePic:{
      type: String,
    },
    youtube:{
      type: String,
    },
    instagram:{
      type: String,
    },
    twitter:{
      type: String,
    },
    facebook:{
      type: String,
    },
    age:{
      type: Number,
    },
    social:[{type:Schema.Types.ObjectId,ref:"Social"}],
    
    password: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
