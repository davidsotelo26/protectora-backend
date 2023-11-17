const http = require('http');

const PORT = 3000;
const server = http.createServer();

// El servidor necesita dos argumentos, el puerto y un callback 
// para cuando empiece a funcionar cuando usemos node.
server.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});