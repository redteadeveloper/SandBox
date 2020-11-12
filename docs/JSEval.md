# JSEval

## Usage

```
jsEval(...);
```

## Examples

```
jsEval("console.log('Hello World!')");   // Hello World!

jsEval("console.log(1+2)");              // 3

jsEval("

    if(1<3) {
        console.log(\"A\");
    } else {
        console.log(\"B\");
    }
    
");                                      // A
```

Learn more about <b>escaping characters</b> here.