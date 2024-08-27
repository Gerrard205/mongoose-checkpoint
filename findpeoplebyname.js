
import Person from './models/personModel.js'; 

  const findPeopleByName = (personName) => { 

  Person.find({ name: personName }, (err, people) => { 

  if (err) { console.error(err); 

 } else { console.log('People found:', people); } }); }; 

  findPeopleByName("John Doe");