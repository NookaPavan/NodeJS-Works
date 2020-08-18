/*Assignment 2
    -Working with Http
        Create a file HttpExample.js
        Using inbuilt http code module, whenever a request is made on port 8888,
        the Server should return below response. on calling URL http://localhost:8888
        Welcome to Node JS
        Please use createServer function of Http Code Module.
        Also set the response Header with 200 status code.
        Execute node HttpExample.js
        Then call URL http://localhost:8888 on browser.
        
        The output on browser is as below:
        Welcome to Node JS
*/
const {createServer} = require('http');

createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<h1>Welcome to Node JS</h1>');
    res.end();
}).listen(8888 , ()=>{ console.log('Server running on...http://localhost:8888')})