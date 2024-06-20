const http = require("http"); 


http.createServer(function(req, res) { 
    res.end("Olá"); 
}).listen(2000); 


console.log("SERVIDOR FUNCIONANDO")



