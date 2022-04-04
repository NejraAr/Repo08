



/*var a = parseInt("101", 2);
console.log(a);
module.exports = parseInt;
 */
function convertToInt(str){
        return parseInt(str, 16);
   
   


}

console.log(convertToInt("BA"), convertToInt("F1"), convertToInt("JeffBezos"));
module.exports = convertToInt;