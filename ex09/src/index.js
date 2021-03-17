function myFunction(myObj, checkProp) {
    myObj = {
        title: "Titanic",
        song: "My Heart Will Go On",
        genre: "drama"
    };

    if(myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }
}

module.exports = myFunction;