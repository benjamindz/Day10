function myFunction(myObj, checkProp) {

    if(myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not found";
    }
}

module.exports = myFunction;