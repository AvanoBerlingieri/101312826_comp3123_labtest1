// Question 1: ES6 Features
function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            reject('input needs to be an array');
        } else {
            const words = array.filter(word => typeof word === 'string').map(word => word.toLowerCase());
            resolve(words);
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
lowerCaseWords(mixedArray).then(result => console.log(result)).catch(err => console.log(err));
lowerCaseWords("JAVA > C#").then(result => console.log(result)).catch(err => console.log(err));