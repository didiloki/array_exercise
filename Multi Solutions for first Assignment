# First Assignment

[![N|Solid](https://marketing-prod.global.ssl.fastly.net/sites/default/files/2018-02/MiSKGALogoLockup_2.png)](https://nodesource.com/products/nsolid)

### First Q:
## Independent Practice (10 min)
When programming user interfaces, you will often need to display results based on a certain input. In this exercise, help the students design a program that will let users know what legal privileges U.S. citizens enjoy based on their age.
Write a program that outputs results based on users’ age. This exercise draws on if/else statements, Boolean logic, and comparison operators. See the conditions below:
- If you are under 16, you cannot do much outside of going to school
- If you are 16 or older, you can drive
- If you 18 or older, you can vote
- If you are 21 or older, you can smoke cigarettes
- If you are 25 or older, you can rent a car
- If you are 35 or older, you can run for president
- If you are 62 or older, you collect social security benefits
Have the program print out only the most recent thing that they've become eligible to do, i.e. if they are 46, only print "You can run for president." (This will at least force them to use `else if` instead of just `if`).

First Way:
```sh
var age = readline.question("What is your age?");

 if (age >= 62) {
    console.log('you collect social security benefits');
 } else if(age >= 35){
     console.log("you can run for president");
 } else if(age >= 25) {
     console.log("you can rent a car");
 } else if(age >= 21) {
     console.log("you can smoke cigarettes");
 } else if(age >= 18) {
     console.log("you can vote");
 } else if(age >= 16) {
     console.log("you can drive");
 } else if(age < 16) {
     console.log("you cannot do much outside of going to school");
 }
```
Second Way:
```sh
var age = readline.question("What is your age?");
if(age < 16) {
    console.log("you cannot do much outside of going to school");
} else if(age >= 16 && age < 18) {
    console.log("you can drive");
} else if(age >= 18 && age < 21) {
    console.log("you can vote");
} else if(age >= 21 && age < 25) {
    console.log("you can smoke cigarettes");
} else if(age >= 25 && age < 35) {
    console.log("you can rent a car");
} else if(age >= 35 && age < 62){
    console.log("you can run for president");
} else if (age >= 62) {
    console.log('you collect social security benefits');
} 
```

Third Way:
```sh
var age = readline.question("What is your age?");
switch(true) {
    case (age >= 62):
        console.log('you collect social security benefits');
        break;
    case (age >= 35):
        console.log('you can run for president');
        break;
    case (age >= 25):
        console.log('you can rent a car');
        break;
    case (age >= 21):
        console.log('you can smoke cigarettes');
        break;
    case (age >= 18):
        console.log('you can vote');
        break;
    case (age >= 16):
        console.log('you can drive');
        break;
    case (age < 16):
        console.log('you cannot do much outside of going to school');
        break;
}  
```

Fourth Way:
```sh
var age = readline.question("What is your age?");
switch (true) {
    case age < 16 :
        console.log('you cannot do much outside of going to school');
        break;
    case age >= 16 && age < 18:
        console.log('you can drive');
        break;
    case age >= 18 && age < 21:
        console.log('you can vote');
        break;
    case age >= 21 && age < 25:
        console.log('you can smoke cigarettes');
        break;
    case age >= 25 && age < 35:
        console.log('you can rent a car');
        break;
    case (age >= 35 && age < 62):
        console.log('you can run for president');
        break;
    case age >= 62:
        console.log('you collect social security benefits');
        break;
    default:
        console.log('You are Free where you are in age level.')
}
```

### Second Q:

   Create a command line app that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.
    i.e values can be 1 - 15
    
```sh
var maxValue = readline.question("What is the max value?");
for(i=0; i <= maxValue; i++){
    (i == 0 || i%3 !== 0)? console.log(i) : console.log('fizz');   
}
```

### Third Q:

Ask the user for a new string and check if it's a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Examples of palindromes:
- "A man, a plan, a canal, Panama!"
- "Amor, Roma"
- "race car"
- "stack cats"
- "step on no pets"
- "taco cat"
- "put it up"
- "Was it a car or a cat I saw?" and "No 'x' in Nixon".

First Way:
```sh
var sentence = readline.question("Is the sentence a palindrome?");

let sentenceNoSpace = sentence.replace(/ /g,"");
let reverseSentence = sentenceNoSpace.split('').reverse('').join('');

if(sentenceNoSpace.toLowerCase() === reverseSentence.toLowerCase()) {
    console.log('Great, it is Palindrome');
} else {
    console.log('Try Again!')
}
```

Second Way:
```sh
var sentence = readline.question("Is the sentence a palindrome?");
let sentenceNoSapce = sentence.replace(/ /g,'');
let sentenceSmallLetter = sentenceNoSapce.toLowerCase();
let sentenceIndex = sentenceSmallLetter.length - 1;
let reverseSentence = '';

for (i = sentenceIndex; i >= 0; i--){
    reverseSentence += sentenceSmallLetter.charAt(i);
}

if(sentenceSmallLetter === reverseSentence){
    console.log('Great, it is Palindrome');
} else {
    console.log('Try Again!');
}
```

Third Way:
```sh
var sentence = readline.question("Is the sentence a palindrome?");
let sentenceNoSapce = sentence.replace(/ /g,'');
let sentenceSmallLetter = sentenceNoSapce.toLowerCase();
let sentenceIndex = sentenceSmallLetter.length - 1;
let x = 0;

for(i = sentenceIndex; i>=0; i--){
    if(sentenceSmallLetter.charAt(i) === sentenceSmallLetter.charAt(x)){
        x++
    } else {
        break;
    }
}
if (x === sentenceSmallLetter.length){
    console.log('Great, it is Palindrome');
} else {
    console.log('Try Again!');
}
```

### Third Q:
Relying on your newfound knowledge of loops, combine loops and if/else statements together and incrementally build the common beepboop loop.
 - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "beep" should appear.
 - If the number is divisible by  **5**, the word "boop" should be logged.
 - If the number is divisible by both **3** and  **5**, then the word "beepboop" should be logged.

First Way:
```sh
var beepBoop = readline.question("Enter Max number?");
for(i = 1; i <= beepBoop; i++){
    switch(true){
        case ((i%3 === 0) && (i%5 === 0)):
            console.log('beepboop');
            break;
        case (i%3 == 0):
            console.log('beep');
            break;
        case i%5 == 0:
            console.log('boop');
            break;
        default:
            console.log(i);
            break;
    }
}
```

Second Way:
```sh
var beepBoop = readline.question("Enter Max number?");
for(i = 1; i <= beepBoop; i++){
   if (i%5 == 0 && i%3 == 0 ){
       console.log('beepboop');
   } else if (i%3 == 0){
       console.log('beep');
   } else if (i%5 == 0){
       console.log('boop')
   } else {
       console.log(i);
   }
}
```

Fourth Q:
 Extra work
**1: 99 Bottles of Coke**
- Write a script that prints the lyrics to "99 Bottles of Coke on the Wall" in the terminal. 
- Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of coke" and "1 bottle of coke").

```sh
var i = 100;
while(i>=1){
        console.log(`${i} Bottles of Coke on the Wall`);
        console.log(`${i} bottles of Coke`);
        console.log('Take one down, pass it around')
        i--
        if(i == 0){
            console.log('NO Bottles of Coke Remaining')
        }
}
```

Fifth Q:
EXTRA WORK
**2: Random Address Generator**
- Write a script that can generate random addresses
- As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
- Your script should randomly select one item from each of these arrays and then use them to construct a random address
- Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
- `node random-address.js`
- `=> 34578 Dolphin Street, Wonka NY, 44506`

First Way:
```sh
var address
address = ['777 Brockton Avenue, Abington MA 2351', '30 Memorial Drive, Avon MA 2322', '250 Hartford Avenue, Bellingham MA 2019', '700 Oak Street, Brockton MA 2301', '66-4 Parkhurst Rd, Chelmsford MA 1824', '591 Memorial Dr, Chicopee MA 1020']
console.log(address[Math.floor(Math.random()*address.length)])
```
Second Way:
```sh
var address
let streetNumber = Math.floor(Math.random()*90000);
let zipCode = Math.floor(Math.random()*90000);
let streetName = ['Dolphin', 'Fraide', 'Presedent', 'Semi Colon', 'Nice', 'Beauty'];
let cityName = ['Wonka', 'Fonka', 'Monka', 'Shonka', 'Flora', 'Smora'];
let stateName = ['NY', 'SY', 'FY', 'KY', 'YY', 'DY'];
console.log(streetNumber + ' ' + streetName[Math.floor(Math.random()*stateName.length)] + ' ' + 'Street, ' + cityName[Math.floor(Math.random()*cityName.length)] + ' ' + stateName[Math.floor(Math.random()*stateName.length)] + ', ' + zipCode) 
```
Third Way:
```sh
var address
let streetNumber = Math.floor(Math.random()*90000);
let zipCode = Math.floor(Math.random()*90000);

address = [streetNumber, ['Brockton Avenue', 'Memorial Drive', 'Hartford Avenue', 'Oak Street', 'Parkhurst Rd', 'Memorial Dr'], ['Abington MA', 'Avon MA', 'Bellingham MA', 'Chelmsford MA', 'Chicopee MA', 'Brockton MA'], zipCode];

console.log(address[0] +' ' + address[1][Math.floor(Math.random()*address[1].length)] + ', ' + address[2][Math.floor(Math.random()*address[2].length)] + ', ' + zipCode)

```
Fourth Way:
```sh
var address
address = {
    'street number': Math.floor(Math.random()*90000),
    'street name': ['Brockton Avenue', 'Memorial Drive', 'Hartford Avenue', 'Oak Street', 'Parkhurst Rd', 'Memorial Dr'],
    'state name': ['Abington MA', 'Avon MA', 'Bellingham MA', 'Chelmsford MA', 'Chicopee MA', 'Brockton MA'],
    'zip code': Math.floor(Math.random()*90000),
}

console.log(address['street number'] + ' ' + address['street name'][Math.floor(Math.random()*address['street name'].length)] + ', ' + address['state name'][Math.floor(Math.random()*address['state name'].length)] + ', ' + address['zip code'])

```

Good luke;
