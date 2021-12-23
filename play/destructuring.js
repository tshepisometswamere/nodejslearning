const person = {
    name: 'Tshepiso',
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.name + ' and I turned ' + age + ' this year');
    }
};
// way to just select only the needed parameter from the incoming object 
const printName = ({name}) => {
    console.log(name)
}

printName(person)

//another way to use above

const {name, age} = person;

console.log(name, age)

//Array destructuting, no need to specify the name, it uses positions
const hobbies = ['Gaming','Cooking','Eating']

const [hobby1,hobby2] = hobbies;

console.log('Hobbies are ',hobby1, ' and ',hobby2)