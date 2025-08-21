const _ = require('lodash');

console.log('=== Lodash Examples ===\n');

// Example 1: _.chunk() - Creates an array of elements split into groups
console.log('1. _.chunk() - Split array into chunks:');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = _.chunk(numbers, 3);
console.log('Original array:', numbers);
console.log('Chunked into groups of 3:', chunkedArray);
console.log();

// Example 2: _.uniq() - Creates a duplicate-free version of an array
console.log('2. _.uniq() - Remove duplicates from array:');
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 1, 6, 6];
const uniqueArray = _.uniq(arrayWithDuplicates);
console.log('Array with duplicates:', arrayWithDuplicates);
console.log('Unique values only:', uniqueArray);
console.log();

// Example 3: _.pick() - Creates an object with selected properties
console.log('3. _.pick() - Select specific properties from object:');
const user = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  password: 'secret123',
  age: 30,
  city: 'New York'
};
const publicUserData = _.pick(user, ['id', 'name', 'email', 'age']);
console.log('Full user object:', user);
console.log('Public data only:', publicUserData);
console.log();

console.log('=== End of Lodash Examples ===');