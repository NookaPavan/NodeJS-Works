const {createServer} = require('http');
const fs = require('fs');
const file= fs.createReadStream('./index.html');
createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    file.pipe(res);
}).listen(8888 , ()=>{ console.log('Server running on...http://localhost:8888')})