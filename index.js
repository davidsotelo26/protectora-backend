const express = require('express');
const { connectDB } = require('./src/utils/database');
const routerAnimals = require("./src/api/routes/animals.routes");
const routerUsers = require("./src/api/routes/users.routes");
const routerEntities = require("./src/api/routes/entities.routes");
const routerAdoptions = require("./src/api/routes/adoptions.routes");
const env = require('dotenv');
const cors = require('cors');
env.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use("/animals", routerAnimals);
app.use("/users", routerUsers);
app.use("/adoptions", routerAdoptions);
app.use("/entities", routerEntities);

const PORT = 3000;

// El servidor necesita dos argumentos, el puerto y un callback 
// para cuando empiece a funcionar cuando usemos node.
app.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});