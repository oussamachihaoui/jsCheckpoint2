// String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string.
function reverseString(str){
    return str.split("").reverse().join('')
}

// Count Characters: Create a function that counts the number of characters in a string.
function count(str){
    return str.split('').length
}

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstWord(str){
    str = str.split(" ")
    for (i=0; i<str.length ; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(' ')
}

// Array Functions:

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function maximum(...num){
    return Math.max(...num)
}

function minimum (...num){
    return Math.min(...num)
}

// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sum(...num) {
    let count =0
    for ( let  value of num){
        count += value
    }
    return count;
    
}

// Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterWithCondition(condit,...arr){
    let tab = [];
   for ( let i =0 ; i<arr.length ; i++){
     if(typeof arr[i] === typeof condit){
        tab.push(arr[i]);
     }
   }
   return tab

}


// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.
function factorial(num) {
    if (num ===0 || num ===1){
        return 1;
    }

    for (let i=num-1; i>1; i--){
        num=num * i
    }
    return num;
}

// Prime Number Check: Create a function to check if a number is prime or not.
function prime(num){
    if (num <2){
        return false;
    }
    for ( let i = 2 ; i<num ; i++){
        if( num % i === 0 ){
            return false
        }
    }
    return true;
}



// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fib(n)
{
    let a = 0, b = 1, c, i;

    if( n == 0)
        return a;
    for(i = 2; i <= n; i++){
        c = a + b;
        a = b;
        b = c;
    }
    
    return b;
}
