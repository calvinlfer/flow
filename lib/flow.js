'use strict';
/**
 * Creates a function that returns the result of invoking the provided functions with the this binding of the created
 * function, where each successive invocation is supplied the return value of the previous.
 * @returns {Function}
 */
function flow() {
    //captures functions to flow through
    let flowArgs = [];
    for (let i = 0; i < arguments.length; i += 1) {
        flowArgs.push(arguments[i]);
    }

    return function flowValuesToFns() {
        let self = this;
        //apply reduce

        //first initialize accum by applying the arguments of this
        //function to the first argument of the closure, we use apply
        //as we would like to set the context of 'this' to be the current
        //executing function (flowValuesToFns) and supply arguments as an array
        let accum = flowArgs[0].apply(self, arguments);
        flowArgs.shift();   //remove the first element (0th) since we used it

        //reduce many to one
        flowArgs.forEach(eachFn => {
            //apply the result of the previous function as arguments to the next
            //function and capture the result and keep doing this until we finish
            //hence flow, whilst also setting the value of this to be that of flowValuesToFns
            //and not the current anonymous function we find ourselves in
            accum = eachFn.call(self, accum);
        });

        return accum;
    }
}

module.exports = flow;