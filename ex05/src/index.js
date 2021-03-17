var school = {
    name: "Arena",
    location: "Sarajevo",
    established: 2020
};

function myFunction(name) {
    school.name = name;
    return school;
}
myfunction("Paragon");
module.exports = { school, myFunction };