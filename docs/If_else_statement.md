# If else statement

## Usage
```
if <expression> {
    ...
} else if <expression> {
    ...
} else {
    ...
}
```
``else if`` and ``else`` is optional. \
You can put as many ``else if`` as you want, and one or no ``else``. 

Semicolons are also optional. Therefore, the following is also a valid code.
```
if <expression>
    ...
else if <expression>
    ...
else
    ...
```

## Example
```
let a = 5;

if a > 3 {
    print "a is greater than 3.";
} else if a < 3 {
    print "a is smaller than 3.";
} else {
    print "a is equal to 3.";
}
```
