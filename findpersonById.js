// findPersonById.js using findPersonById(id)

import Person from './models/personModel.js'; 

  const findPersonById = (personId) => { 

  Person.findById(personId, (err, person) => {

  if (err) { console.error(err);

 } else { console.log('Person found:', person); } }); }; 

  findPersonById("some_person_id");