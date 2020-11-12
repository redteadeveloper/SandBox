<p align="center"><img width="600" height="200" align="center" style="float: left; margin: 0 10px 0 0;" alt="Logo" src="logo.png"></p>
<h1 align="center"></h1>
<h3 align="center">Easy to read. Easy to write.</h3>
<div align="center">
  
  ![Generic badge](https://img.shields.io/badge/Version-0.1.2-blue.svg)
  [![Library](https://img.shields.io/badge/ANTLR_version-4.8.0-blueviolet)](https://www.antlr.org/)
  [![Codacy Badge](https://app.codacy.com/project/badge/Grade/c637f71ed86f489e8100ce9dc6f04e45)](https://www.codacy.com/gh/redteadeveloper/SandBox/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=redteadeveloper/SandBox&amp;utm_campaign=Badge_Grade)
  
</div>

## About

SandBox is a simple programming language made of JS & ANTLR4.

Our philosophy is: <b>Programming languages must be easy to `read` \& `write`.</b> 

Currently in development, stay tuned!

## Examples

- 99 Bottles of Beer
```
let a = 1;

while a < 100 {
    if a == 99 {
        print("No more bottles of beer on the wall, no more bottles of beer.");
        print("Go to the store and buy some more, 99 bottles of beer on the wall.");
    } else if a == 98 {
        print("1 bottle of beer on the wall, 1 bottle of beer.");
        print("Take it down and pass it around, no more bottles of beer on the wall.");
        print("");
    } else {
        let b = 100 - a;
        print(b + " bottles of beer on the wall, " + b + " bottles of beer.");
        print("Take one down and pass it around, " + (b - 1) + " bottles of beer on the wall.");
        print("");
    }
    let a = a + 1;
}
```

- FizzBuzz
```
let a = 1;

while a <= 100 {
    if a % 15 == 0 {
        print("FizzBuzz");
    } else if a % 5 == 0 {
        print("Buzz");
    } else if a % 3 == 0 {
        print("Fizz");
    } else {
        print(a);
    }
    let a = a + 1;
}
```

## Known Issues

None.

If you find an issue, please report it [here](https://github.com/redteadeveloper/SandBox/issues).

## Documentation

[Click here](https://github.com/redteadeveloper/SandBox/tree/main/docs)

## Credits

<b>SandBox</b> is made by <b>[RedTea](https://github.com/redteadeveloper)</b>.

### Works Cited

- https://github.com/bkiers/Mu
