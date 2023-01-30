# Neighborhood

By James Provance

## Technologies Used
* HTML
* CSS
* JavaScript

## Description
A page that takes a number and generates text based off the number.

## Setup
* Open https://jb24x7.github.io/neighborhood/ in your browser.
* Imput number in form
* Submit form
* Enjoy

## Known Bugs
* There are no known bugs at the moment

## Tests
### Describe: generator()
* Test: "It should return an array of numbers from 0 to the user's inputted number"
* Code: generator(5);
* Expected Output: [0, 1, 2, 3, 4, 5]

### Describe: wordChange()
* Test: "It should return an array of numbers and words replacing numbers that contain 3, 2, or 1 based on the array fed from generator()"
* Code: wordChange(generator(5));
* Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

## License
MIT License

Copyright (c) 2023 James Provance

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.