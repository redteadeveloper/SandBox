# Converting variable type

## Available variable types
- Boolean
- Int
- Float
- String

## Converting variable type
### Usage
```
convType(<variable>, <type>);
```
### Examples
```
let a = 123;
convType(a, String);
print a;    // 123
```
```
let b = "123abc";
convType(b, Int);
print b;    // 123
```
```
let c = "abc1.23";
convType(c, Float);
print c;    // 1.23
```
```
let d = "true";
convType(d, Boolean);
print d;    // true

let e = "asdf"
convType(e, Boolean);
print e;    // false
```
When converting to boolean, any string other than "true" will return false. \
Protected variables will remain protected after conversion.
