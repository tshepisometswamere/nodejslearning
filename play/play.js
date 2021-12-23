const name = 'Tshepiso';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName,userAge,userHasHobbies) => {

    return 'Name is ' + userName + ', and age is ' + userAge + ', and user has HHobbies' + userHasHobbies;
}

console.log(summarizeUser(name,age,hasHobbies));

const add = (a,b) => a + b;

console.log(add(1,1))
