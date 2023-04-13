const findTheOldest = function(people) {
    // Get the current year
    const currentYear = new Date().getFullYear();
  
    // Check that the input array is not empty
    if (people.length === 0) {
        return null;
    }
  
    // Find the oldest person using reduce
    const oldestPerson = people.reduce((oldest, person) => {
        // Calculate the age of the current person
        const age = person.yearOfDeath ?? currentYear - person.yearOfBirth;
      
        // Calculate the age of the oldest person so far
        const oldestAge = oldest.yearOfDeath ?? currentYear - oldest.yearOfBirth;
      
        // Return the person with the greater age
        return age > oldestAge ? person : oldest;
    });
  
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;


// Do not edit below this line
module.exports = findTheOldest;
