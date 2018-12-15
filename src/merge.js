/**
 * 
 * @param {Array} arr1 - 
 * @param {Array} arr2 - 
 */
function mergeArrays(arr1, arr2) {
    let result = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;

    while (current < (arr1.length + arr2.length)) {
        let isArr1 = index1 >= arr1.length;
        let isArr2 = index2 >= arr2.length;

        if (!isArr1 && (isArr2 || (arr1[index1] < arr2[index2]))) {
            result[current] = arr1[index1];
            index1++;
        } else {
            result[current] = arr2[index2];
            index2++;
        }

        current++;
    }

    return result;
}

module.exports = {
    mergeArrays,
}