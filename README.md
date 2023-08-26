# What is a Method in java script?
A method is a block of code which only runs when it is called.
You can pass data, known as parameters, into a method.
Methods are used to perform certain actions, and they are
also known as functions.

![logo](https://th.bing.com/th/id/OIP.oMvQegSaaJ3Fby52bKYQmQHaD4?w=328&h=180&c=7&r=0&o=5&pid=1.7)

## JavaScript String method charAt()
The charAt() method returns the character at a specified index (position) in a string.
The index of the first character is 0, the second 1, ...
The index of the last character is string length - 1 .

![logo](https://th.bing.com/th/id/OIP.1T8aZ7-7DGXrlI-mR5vbuwHaD4?w=313&h=180&c=7&r=0&o=5&pid=1.7)

## JavaScript String method at()

The at() method takes an integer value and returns a new String.
This method allows for positive and negative integers. Negative integers count
back from the last string character

![logo](https://th.bing.com/th/id/OIP.lo3RQHG-R6RhIrKsfXTptwHaD0?w=290&h=179&c=7&r=0&o=5&pid=1.7)

## JavaScript String method replace()

The replace() method searches a string for a value or a regular expression.
The replace() method returns a new string with the value(s) replaced.
The replace() method does not change the original string.


![logo](https://th.bing.com/th/id/OIP.m0d-iWexBymo2jiOa9E-qwHaDt?w=340&h=175&c=7&r=0&o=5&pid=1.7)


## JavaScript String method split()
The split() method splits a string into an array of substrings. The split() method returns the new
array. The split() method does not change the original string. If (" ") is used as separator, the string
is split between words.


![logo](https://th.bing.com/th/id/OIP.Kdg4HZpG5xRclDDjXgTv_AHaEo?w=237&h=180&c=7&r=0&o=5&pid=1.7)


## JavaScript String method substring(start,end)

The substring() method extracts characters, between two indices (positions), from a string, and
returns the substring.
The substring() method extracts characters from start to end (exclusive).
The substring() method does not change the original string.

If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
Start or end values less than 0, are treated as 0.

## JavaScript String method toLowerCase()
The toLowerCase() method converts a string to lowercase letters.
The toLowerCase() method does not change the original string.

## JavaScript String method toUpperCase()
The toUpperCase() method converts a string to uppercase letters, using current locale.
The toUpperCase() method does not change the original string.

## JavaScript String method trim()

Method trim() removes whitespace from both sides of a string.
The trim() method does not change the original string

![](https://th.bing.com/th/id/OIP.e7wctU05A4bwwbjr9M8b-AHaE8?w=239&h=180&c=7&r=0&o=5&pid=1.7)

## JavaScript String method toString()
The toString() method returns a string representing the object.
By default toString() takes no parameters.

![](https://th.bing.com/th/id/OIP.Lt5-Rl5hdIn1eX6INSm5uQHaEK?w=266&h=180&c=7&r=0&o=5&pid=1.7)

## JavaScript String method indexOf()
The indexOf() method returns the position of the first occurrence of a value in a string.
The indexOf() method returns -1 if the value is not found.
The indexOf() method is case sensitive
# JavaScript Number methods
### JavaScript Number methods Math.round(),ceil(),floor()
The ceil() method rounds a decimal number up to the next largest integer and returns it.
### JavaScript Number methods Math.max() and Math.min()
The max() method finds the maximum value among the specified values and returns it.
The min() method finds the minimum value among the specified values and returns it
### JavaScript Number methods Math.pow() and Math.sqrt()
The pow() method computes the power of a number by raising the second argument
to the power of the first argument.
The sqrt() method computes the square root of a specified number and returns it
### JavaScript String method Math.abs() and Math.random()
The abs() method finds the absolute value of the specified number (without any sign) and returns it.
The Math.random() function returns a floating-point, pseudo-random number between 0 (inclusive)
and 1 (exclusive).
## JavaScript Number method isNaN()
The isNaN() function checks if a value is NaN (Not-a-Number) or not


# what is array in javascript

An array is an object that holds values (of any type) not particularly in named properties/keys,
but rather in numerically indexed position
In JavaScript, an array is an ordered list of values. Each value is called an element specified by
an index. ... First, an array can hold values of mixed types.
An array is a special variable, which can hold more than one value:

## array methods



```bash
let array=["tamim","safi","sahvaat",1,true,{}]
array[3]=2

console.log(array)

// easy way to show array in code 
```

## how many array are ther
pop()
The pop() method removes the last element from an array and returns that element.
This method changes the length of the array
 forEach()

 join()

indexOf()

concat()

find()

shift()
The pop() method removes the last element from an array and returns that element.
This method changes the length of the array
 map()

 includes()


array methods

toString()
The toString() method returns a string representing the specified array and its
elements.
A string representing the elements of the array
push()
The push() method adds one or more elements to the end of an array and returns the
new length of the array.
The element(s) to add to the end of the array.
Syntax: push(element0, element1, /* … ,*/ elementN)
reduce()

splice()

slice()

filter()

toReversed()

unshift()
The unshift() method adds one or more elements to the beginning of an array and
returns the new length of the array.
unshift(element0, element1, /* … ,*/ elementN
toSorted(


![logo](https://th.bing.com/th/id/R.8ec3c7a6e7aafcf00f447e4a540d9533?rik=%2f4DK3JwLZuUwww&pid=ImgRaw&r=0)

# what is the new date() in jsvssdcript
DATA AND TIME

In JavaScript, date objects are created with new Date().

new Date() returns a date object with the current date and time.

Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)


## Note 1

The get methods above return Local time.

Universal time (UTC) is documented at the bottom of this page.

## Note 2

The get methods return information from existing date objects.

In a date object, the time is static. The "clock" is not "running".

The time in a date object is NOT the same as current time.
## Warning !
Old JavaScript code might use the non-standard method getYear().

getYear() is supposed to return a 2-digit year.

getYear() is deprecated. Do not use it!

The getMonth() Method
The getMonth() method returns the month of a date as a number (0-11).

## Note
In JavaScript, January is month number 0, February is number 1, ...

Finally, December is month number 11.

Examples
const d = new Date("2021-03-25");
d.getMonth();
const d = new Date();
d.getMonth();
Note
You can use an array of names to return the month as a name:

## Examples
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date("2021-03-25");
let month = months[d.getMonth()];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
The getDate() Method
The getDate() method returns the day of a date as a number (1-31):

Examples
const d = new Date("2021-03-25");
d.getDate();
const d = new Date();
d.getDate();
ADVERTISEMENT
The getHours() Method
The getHours() method returns the hours of a date as a number (0-23):

## Examples
const d = new Date("2021-03-25");
d.getHours();
const d = new Date();
d.getHours();
The getMinutes() Method
The getMinutes() method returns the minutes of a date as a number (0-59):

## Examples
const d = new Date("2021-03-25");
d.getMinutes();
const d = new Date();
d.getMinutes();
The getSeconds() Method
The getSeconds() method returns the seconds of a date as a number (0-59):

## Examples
const d = new Date("2021-03-25");
d.getSeconds();
const d = new Date();
d.getSeconds();
The getMilliseconds() Method
The getMilliseconds() method returns the milliseconds of a date as a number (0-999):

## xamples
const d = new Date("2021-03-25");
d.getMilliseconds();
const d = new Date();
d.getMilliseconds();
The getDay() Method
The getDay() method returns the weekday of a date as a number (0-6).

## Note
In JavaScript, the first day of the week (day 0) is Sunday.

Some countries in the world consider the first day of the week to be Monday.

## Examples
~~~
const d = new Date("2021-03-25");
d.getDay();
const d = new Date();
d.getDay();
~~~
Note
You can use an array of names, and getDay() to return weekday as a name:

Examples
~~~
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date("2021-03-25");
let day = days[d.getDay()];
~~~
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];
The getTime() Method
The getTime() method returns the number of milliseconds since January 1, 1970:

Examples
~~~
const d = new Date("1970-01-01");
d.getTime();
const d = new Date("2021-03-25");
d.getTime();
const d = new Date();
d.getTime();
The Date.now() Method
~~~
Date.now() returns the number of milliseconds since January 1, 1970.

Examples
~~~
let ms = Date.now();
Calculate the number of years since 1970/01/01:

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
~~~
let years = Math.round(Date.now() / year);
Date.now() is a static method of the Date object.

You cannot use it on a date object like myDate.now().

The syntax is always Date.now().

UTC Date Get Methods
Method	Same As	Description
getUTCDate()	getDate()	Returns the UTC date
getUTCFullYear()	getFullYear()	Returns the UTC year
getUTCMonth()	getMonth()	Returns the UTC month
getUTCDay()	getDay()	Returns the UTC day
getUTCHours()	getHours()	Returns the UTC hour
getUTCMinutes()	getMinutes()	Returns the UTC minutes
getUTCSeconds()	getSeconds()	Returns the UTC seconds
getUTCMilliseconds()	getMilliseconds()	Returns the UTC milliseconds
UTC methods use UTC time (Coordinated Universal Time).

UTC time is the same as GMT (Greenwich Mean Time).

The difference between Local time and UTC time can be up to 24 hours.





The getTimezoneOffset() Method
The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:

Example
let diff = d.getTimezoneOffset();
Complete JavaScript Date Reference
For a complete Date reference, go to our:

Complete JavaScript Date Reference.

The reference contains descriptions and examples of all Date properties and methods.

Test Yourself With Exercises
Exercise:
Use the correct Date method to get the month (0-11) out of a date object.

const d = new Date();
month = 
;

Start the Exercise

ADVERTISEMENT
Create your site with Spaces
COLOR PICKER
colorpicker
   
Join our Bootcamp!
ADVERTISEMENT

