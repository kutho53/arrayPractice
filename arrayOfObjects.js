
const kurt = [
    {name: 'Kurt'},
    {age: 29},
    {sex: 'male'},
]

const rylee = [
    {name: 'Rylee'},
    {age: 28},
    {sex: 'female'}
]

const walker = [
    {name: 'Walker'},
    {age: 0},
    {sex: 'male'}
]


const familyObject = {
    name: String,
    age: Number,
    sex: String
}

let family = [];

function createFamily(name, age, sex){
    const member = Object.create(familyObject);
    member.name = name;
    member.age = age;
    member.sex = sex;
    family.push(member);
    return family;
}

console.log(createFamily('Kurt', 29, 'male'));
console.log(family);
console.log(createFamily('Rylee', 28, 'female'));
console.log(family);
console.log(createFamily('Walker', 0, 'male'));
console.log(family);

// filter function
function filterBySex(sex){
    let group = [];
    for (let i=0, if (member.sex === 'male'), males.push(member)) else (females.push(member)); 
    return group;
}