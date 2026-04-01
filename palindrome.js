let letter = [];

let word = "racecar";

let rword = "";

for (let i = 0; i < word.length; i++) {
    letter.push(word[i]);
}

for (let j = 0; j < word.length; j++) {
    rword += letter.pop();
}

if (rword === word) {
    console.log(word, " is a palindrome");
}
else {
    console.log(word, " is a not palindrome");
}