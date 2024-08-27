
import Person from './models/personModel.js'; 

  const createManyPeople = (arrayOfPeople) => { 

  Person.create(arrayOfPeople, (err, people) => { 

  if (err) { 

  console.error(err); 

 } else { console.log('People created:', people); 

 } }); }; 

  const people = [

 { name: "Jane Doe", age: 25, favoriteFoods: ["Salad", "Pasta"] }, 

 { name: "Michael Smith", age: 40, favoriteFoods: ["Steak", "Fries"] }, 

 { name: "Mary Johnson", age: 28, favoriteFoods: ["Sushi", "Ice Cream"] } 

]; 

  createManyPeople(people);