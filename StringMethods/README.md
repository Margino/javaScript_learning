# Useful string methods

**charAt()** Returns the character at the specified index (position)

```
const str = "Hello World!";
const newStr = str.charAt(0); // H
```
---

**charCodeAt()** returns the Unicode of the character at the specified index

```
const str = "Hello World!";
const newStr = str.charCodeAt(0); // 72
```
---


## Finding

**indexOf()** Returns the position of the first found occurrence of a specified value in a string

```
const str = "Hello World!";
const newStr = str.indexOf("welcome"); // 6
```
---

**lastIndexOf()** Returns the position of the last found occurrence of a specified value in a string

```
const str = "Hello World! Hi World!";
const newStr = str.lastIndexOf("World"); // 16
```
---

**includes()** Checks whether a string contains the specified characters

```
const str = "Hello World!";
const newStr = str.includes("World"); // true
```
---

**startsWith()** Checks whether a string begins with specified characters

```
const str = "Hello World!";
const newStr = str.startsWith("Hello"); // true
```
---

**endsWith()** Checks whether a string ends with specified string/characters

```
const str = "Hello World!";
const newStr = str.endsWith("World!"); // true
```
---


## Extracting

**slice()** Extracts a part of a string and returns a new string

```
const str = "Hello World!";
const newStr = str.slice(1, 2); // e
```
---

**substr()** Extracts the characters from a string, beginning at a specified start position, and through the specified number of character

```
const str = "Hello World!";
const newStr = str.substr(1, 2); // el
```
---

**substring()** Extracts the characters from a string, between two specified indices

```
const str = "Hello World!";
const newStr = str.substring(1, 2); // e
```
---


## Converting

**toLowerCase()** Converts a string to lowercase letters

```
const str = "Hello World!";
const newStr = str.toLowerCase(); // hello world!
```
---

**toUpperCase()** Converts a string to uppercase letters

```
const str = "Hello World!";
const newStr = str.toUpperCase(); // HELLO WORLD!

```
---

**trim()** Removes whitespace from both ends of a string

```
const str = "  Hello World!  ";
const newStr = str.trim(); // Hello World!

```
---

**split()** Splits a string into an array of substrings

```
const str = "Hello World!";
const newStr = str.split(' '); // [ 'Hello', 'World!' ]
```
---

**repeat()** Returns a new string with a specified number of copies of an existing string

```
const str = "Hello World!";
const newStr = str.repeat(2); //Hello World!Hello World!

```
---


## Regular Expressions

**match()** Searches a string for a match against a regular expression, and returns the matches

**replace()** Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced

**search()** Searches a string for a specified value, or regular expression, and returns the position of the match
