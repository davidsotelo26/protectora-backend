const express = require('express');
const routerAnimals = require("./src/api/routes/animals.routes");
const routerUsers = require("./src/api/routes/users.routes")
const routerEntities = require("./src/api/routes/entities.routes")

app.use(express.json());


app.use("/animals", routerAnimals);
app.use("/users", routerUsers);
app.use("/entities", routerEntities);


const http = require('http');

const PORT = 3000;
const server = http.createServer();

// El servidor necesita dos argumentos, el puerto y un callback 
// para cuando empiece a funcionar cuando usemos node.
server.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});