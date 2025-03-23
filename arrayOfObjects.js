
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

function createFamily(){
    let family = [];
    family.push(kurt, rylee, walker);
    return family;
}

console.log(family);