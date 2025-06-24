/**
 * Write a function that makes a deep comparison between two objects.
 * Deep Comparison: two values are only considered equal if they are the same value or are objects with the same 
 * properties whose values are also equal when compared with a recursive call to deepEqual.
 * @param {*} obj1 
 * @param {*} obj2 
 */
function compareObjects(obj1, obj2) {
    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) return false;
    
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) return false;

    for (let key of obj1Keys) {
        if (!obj2Keys.includes(key)) {
            return false;
        }

        if (typeof obj1[key] !== "object" || typeof obj2[key] !== "object") {
            if (obj1[key] !== obj2[key]) {
                return false;
            } 
        } else {
            compareObjects(obj1[key], obj2[key])
        }
    }
    
    return true;
}
  
module.exports = compareObjects;
  