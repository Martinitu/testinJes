# testinJes

Introduction

Let’s practice! This testing thing really is not that difficult, but it is quite new. The only way to get comfortable with it is to spend some time doing it.
Using ES6 import statements with Jest

By default, the current version of Jest will not recognize ES6 import statements. In order for you to be able to use ES6 modules for this project you may do the following:

    Install the @babel/preset-env package

    npm i -D @babel/preset-env

    Create a .babelrc file in the project’s root with the following lines of code:

    { "presets": ["@babel/preset-env"] }

This will allow you to use import statements. Note that in the Jest docs similar instructions are laid out here.
Assignment

Write tests for the following, and then make the tests pass!

    A capitalize function that takes a string and returns it with the first character capitalized.

    A reverseString function that takes a string and returns it reversed.

    A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

    A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works on this website.
        Don’t forget to test wrapping from z to a.
        Don’t forget to test keeping the same case.
        Don’t forget to test punctuation!
        For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

    An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

    const object = analyzeArray([1,8,3,4,2,6]);

    object == {
      average: 4,
      min: 1,
      max: 8,
      length: 6
    };
