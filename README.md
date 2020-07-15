## Requisites

* VS code
* Create a folder on your desktop, then open the created folder using vS code
* Create a file in the open folder in Vs code and call it index.html
* To populate your index.html file with the basic html code, type **doc** and press tab to get the below structure
```
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
## Common methods in javascript STRINGS
* \n is used for a newline e.g 
```
let moreFruits = 'banana\napple';
console.log(moreFruits);
// The result would be on two lines as follows:
banana
apple
```

* indexOf:  it is used to find if something exists in a string. it gives 1 if it exists and -1 if it doesn't exists e.g

```
let fruit = 'banana';
console.log(fruit.indexOf('a'));
// It will print the first index position where the letter is found and it is 1 here cos we start counting from 0.
That is because 'a' exist in position 1 in banana

console.log(fruit.indexOf('q'));
// It will print -1
That is because 'q' does not exist in banana
```
* slice: it is used to cut the part you want from a string e.g
```
let fruit = 'banana';
console.log(fruit.slice(2, 4));
// it will print **nan**. we start counting from 0
```

* replace: it is used to replace a part of a string with what we specify e.g

```
let fruit = 'banana';
console.log(fruit.replace('ban', 123));
// It will give the result as **123ana**
Here we asked it to replace in banana the word 'ban' with 123;
```

* toUpperCase: used to change a string to uppercase e.g

```
let fruit = 'banana';
console.log(fruit.toUpperCase());
// It will output **BANANA**
```

* toLowerCase: used to change a string to Lowercase e.g

```
let fruit = 'Banana';
console.log(fruit.toLowerCase());
// It will output **banana**
```

* charAt: used to get the character at a given position e.g

```
let fruit = 'Banana';
console.log(fruit.charAt(2));
// It will print **n**
That is the character at index 2

We can also get this using this format below
console.log(fruit[2]);
// It will print **n**
```

* split: used to split a string with the specified parameter e.g
```
let fruit = 'Banana';
console.log(fruit.split('')); // split by character
// The result would be an array of letters as follows:
['B', 'a', 'n', 'a', 'n', 'a']

let someFruits = 'Banana, orange, mango, pineapple';
console.log(someFruits.split(',')); //split by comma
// The result would be an array of fruits as follows:
["Banana", "orange", "mango", "pineapple"]
```
## Common methods in javascript ARRAYS

* toString: used to convert an array to a string e.g

```
let fruits = ['banana', 'orange', 'mango'];
console.log(fruits.toString());
// The result would be:
banana, orange, mango
```

* join: used to join array with something e.g
```
let fruits = ['banana', 'orange', 'mango'];
console.log(fruits.join('*'));
// The result would be:
banana * orange * mango
```

* push: used to add item to the end of the list
* pop: used to delete an item from the end of the list

```
let fruits = ['orange', 'mango'];
fruits[fruits.length] = 'pear'; // This is another method of adding something to the end of an array
```

* shift(): used to add item to the start of the list
* unshift(): used to delete the first item from the list

* concat(): used to join two arrays together e.g

```
let fruits = ['mango', 'orange'];
let vegetables = ['tomato', 'spinach'];

let groceries = fruits.concat(vegetables);
console.log(groceries);
// the result would be a concatenation of both arrays:
['mango', 'orange', 'tomato', 'spinach'];
```

* reverse(): used to change the order of the output e.g

```
let fruits = ['mango', 'orange'];

console.log(fruits.reverse());
// the result would be :
['orange', 'mango'];
```

* sort(): used to sort the order  of a string in alphabetical order e.g

```
let fruits = ['mango', 'orange', 'apple'];

console.log(fruits.sort());
// the result would be :
['apple', 'mango', 'orange'];
```

* sort(): to sort a number in ASCENDING order we pass a function to the sort() function as follows:

```
let someNumbers = [78, 28, 122, 2, 8, 11]
console.log( someNumbers.sort(function(a, b){return a - b})); // here it is a - b
// The output would be
[2, 8, 11, 28, 78, 122]
```


* sort(): to sort a number in DESCENDING order we pass a function to the sort() function as follows:

```
let someNumbers = [78, 28, 122, 2, 8, 11]
console.log( someNumbers.sort(function(a, b){return b - a})); // here it is b - a
// The output would be
[122, 78, 28, 11, 8, 2]
```

* Dealing with json file
let students = [
    {
        name: 'kingsley',
        age: 12
    },
     {
        name: 'paul',
        age: 34
    },
];

> To make it look like a string, you cover it in quotes as follows

let students = '[
    {
        name: 'kingsley',
        age: 12
    },
     {
        name: 'paul',
        age: 34
    },
]';

> To convert your json into an array of objects we do this
JSON.parse(students);
Then we can simply access it's items like that of an array as follows
JSON.parse(students)[0];
And to access the name in the first object we go as follow:
JSON.parse(students)[0].name;

## Accessing attributes of an element created in Javascript
> example

```
let img = document.createElement('img');
img.setAttribute('src', 'https://cdn.cnn.com/cnnnext/dam/super-tease.jpg');
img.width = 200; // setting width
document.getElementById('imageDiv').appendChild(img);
```
Notice for the width we only used numbers with no prefixes i.e just **200**
