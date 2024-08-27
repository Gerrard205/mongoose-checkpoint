import Person from './models/personModel.js'; 

  const updatePersonFavoriteFoods = (personId) => {

  Person.findById(personId, (err, person) => { 

  if (err) { console.error(err); 

 } else { person.favoriteFoods.push("Hamburger"); 

 person.save((err, updatedPerson) => { 

  if (err) { console.error(err); 

 } else { console.log('Updated person:', updatedPerson); } }); } }); }; updatePersonFavoriteFoods("some_person_id");