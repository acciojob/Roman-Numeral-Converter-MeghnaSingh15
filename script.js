function convertToRoman(num) {
    const obj = [
        ['M',1000], 
        ['D', 500], 
        ['C', 100], 
        ['L', 50], 
        ['X', 10], 
        ['V', 5], 
        ['I', 1]
    ];

    let result = '';
    for(let i=0; i<obj.length; i++){
        while(num>=obj[i][1]){
            result+=obj[i][0];
            num-=obj[i][1];
        }
    }
    return result;
}


console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
