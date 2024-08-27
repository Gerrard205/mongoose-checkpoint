

import Person from './models/personModel.js'; 

  const createAndSavePerson = () => { 

  const person = new Person({ 

  name: "John Doe", age: 30, 

  favoriteFoods: ["Pizza", "Burger"] }); 

 person.save((err, data) => { if (err) { console.error(err); } 

else { console.log('Person saved:', data); } }); }; 

  createAndSavePerson();