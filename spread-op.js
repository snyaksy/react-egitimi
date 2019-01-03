/*
const data = [1,2,3,4,5];
const newData = [0, ...data];
console.log(newData);
*/
const data = {
    name: 'sunay',
    surname: 'aksoy'
};

const newData = {
    age: 24,
    ...data
};

console.log(newData);