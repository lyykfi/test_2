/**
 * Get summ numbers
 * There is Bine formula
 * @param {Number} limit - max count 
 */
function getSumFib(limit) {
    var sqRootOf5 = Math.sqrt(5);

    var Phi = (1 + sqRootOf5) / 2;
    var phi = (1 - sqRootOf5) / 2

    return Math.round((Math.pow(Phi, limit) - Math.pow(phi, limit)) / sqRootOf5);
}

module.exports = {
    getSumFib,
}