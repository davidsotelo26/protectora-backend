const express = require('express');
const { connectDb } = require("./src/utils/database");
const routerAnimal = require("./src/api/routes/animal.routes");
const routerUser = require("./src/api/routes/user.routes")
const cors = require("cors")
const env = require("dotenv")
env.config()



const app = express();

app.use(express.json());
app.use(cors())


connectDb();

app.use("/animal", routerAnimal);
app.use("/user", routerUser)

const PORT = 5050;
app.listen(PORT, () => {
  console.log('escuchando por el puerto ' + PORT);
});