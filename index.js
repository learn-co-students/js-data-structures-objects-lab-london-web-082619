// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(object, key, value)    {
    let newDriver = Object.assign( {}, object, { [key]:value } )
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value

    return object
}

function deleteFromDriverByKey(object, key) {
    let newDriver = Object.assign( {}, object)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key]
    return object
}