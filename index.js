// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
console.log("' '" + name.toUpperCase() + "' '");


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
var words = sentence.split(' ');
var titleCasedWords = [];
words.forEach((word) => {
    let titleCasedWord = word.substr(0, 1).toUpperCase() + word.substr(1)
    titleCasedWords.push(titleCasedWord)
})
console.log(titleCasedWords.join(' '));


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
var amount = money.substr(1);
console.log(amount);
