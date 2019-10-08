// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
    let new_obj = Object.assign({}, obj, {[key]:value});
    return new_obj;
}
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key]= value;
    return obj;
}

function deleteFromDriverByKey(obj, key){
    const new_object= {};
    Object.assign({},obj);
    delete (new_object.key);
    // delete new_object.key;
    return new_object;
}

function destructivelyDeleteFromDriverByKey(obj, key){
    // delete obj.key;
    delete obj[key];
    return obj;
}