// findOneByFavoriteFood using findone()method

import Person from './models/personModel.js'; 

  const findOneByFavoriteFood = (food) => { 

  Person.findOne({ favoriteFoods: food }, (err, person) => { 

  if (err) { console.error(err); 

 } else { console.log('Person found:', person); } }); }; 

  findOneByFavoriteFood("Pizza");