/*Assignment 1
    -Working with Modules
        Create a Module Calculator in file calculator.js
        It has functions of add, subtract, multiply.

        Create a file app.js which uses the Calculator Module.
        Execute app.js with 2 command line arguments using process.argv and execute add, subtract and multiply.
        For Example
        node app.js 4 2
        Output
        Addition 6
        Subtraction 2
        Multiplication 8
*/
const {add,substract,multiply} = require('./calculator');
const algop= () => {
    const a = parseInt(process.argv[2]);
    const b = parseInt(process.argv[3]);

    console.log(`Addition ${add(a,b)}`);
    console.log(`Substraction ${substract(a,b)}`);
    console.log(`Multiplication ${multiply(a,b)}`);

}
algop();

