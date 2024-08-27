import mongoose from "mongoose";



const personschema = new mongoose.Schema({
  name: {
    type:String,
    required: true
  },
  age: {
    type:Number,
    required: true
  },
  favouriteFoods: [string]
})


const Person = mongoose.model('Person', personSchema);

export default person