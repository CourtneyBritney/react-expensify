var nameVar = 'Courtney';
var nameVar = 'Britney';
console.log('nameVar', nameVar);

let nameLet = 'Ruben';
nameLet = 'Anjali';
console.log('nameLet', nameLet);

const nameConst = 'Tash';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block Scoping

var fullName = 'Ashleigh Liezel Alexander';

if (fullName) {
    var firstName = fullName.split(' ')[1];
    console.log(firstName);
}

