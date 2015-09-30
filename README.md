# What is this?
Flow creates a function that returns the result of invoking the provided
functions with the this binding of the created function, where each successive
invocation is supplied the return value of the previous. Identical to lodash's
flow.

# Requirements
strict mode and support for the let keyword. The function can be changed to use
var instead of let to preserve backwards compatibility.

### Sample usage
```
'use strict';
let flow = require('./lib/flow');

function add(a, b) {return a+b}
function square(a) {return a*a}

//first add(1, 2) => 3 then take 3 and feed the result as an argument to square
//which ends up being 9
console.log(flow(add, square)(1, 2));
```
