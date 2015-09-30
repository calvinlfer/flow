'use strict';
let flow = require('./lib/flow');

function add(a, b){return a+b}
function square(a) {return a*a}

//first add(1, 2) => 3 then take 3 and feeds the result as an argument to square which ends up being 9
console.log(flow(add, square)(1, 2));