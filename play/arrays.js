const hobbies = ['Gaming', 'Cooking'];
hobbies.push('programming');
let copiedArray = hobbies.slice();


console.log(copiedArray);

//Nested Array with

let newArray = [hobbies];

console.log(newArray);

// Another way to copy
let spreadArray = [...hobbies];

console.log(spreadArray);

//rest operator

const toArray = (...args) =>{
    return args;
}

//Syntax same , but different descryptions
console.log(toArray(1,2,3,4));