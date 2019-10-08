// Write your solution in this file!

let driver = {breakfast: "eggs", lunch: "salad", dinner: "stir fry"};

window.addEventListener("DOMContentLoaded", (event) => function(){
    console.log(driver)
    // updateDriverWithKeyAndValue(driver, key, value)
})

function updateDriverWithKeyAndValue(obj, key, value){
    //should not mutate the driver and should return a new driver that has an updated value for the key passed in.
    return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    //should mutate the driver parameter passed in.
    return Object.assign(obj, { [key]: value });
}

function deleteFromDriverByKey(obj, key){
    //should delete the key/value pair for the key that was passed in from the driver Object. This should all not actually mutate the driver passed in.
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key){
    //should mutate the driver passed in. 
    delete obj[key];
    return obj;
}

