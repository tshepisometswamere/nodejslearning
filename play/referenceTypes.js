const person = {
    name: 'Tshepiso',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

const hobbies = ['Gaming', 'Cooking'];

//console.log(person);
person.greet();

hobbies.push('programming');
console.log(hobbies)