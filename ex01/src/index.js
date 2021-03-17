var myPet = {
    species: "Cat",
    name: "Mahrez",
    legs: 4,
    friends: ["Amir", "Benjo"]
};

function myFunction(myObj) {
    return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };