const mongoose = require('mongoose');
const Entities = require('../api/models/entities.model');
  const arrayEntities = [
    {
      "IDEntity": "6547",
      "Cif": "A57905127",
      "name": "PELUDOS",
      "phone": 670264850,
      "ContactPerson": "Teresa Martinez",
      "email": "tere@peludos.com",
      "address": "adminJavier",
      "Poblacion": "Administrador"
    },
    {
      "IDEntity": "2098",
      "Cif": "A45976123",
      "name": "PLUMAS",
      "phone": 609837654,
      "ContactPerson": "Juan Matías",
      "email": "plumas@plumas.com",
      "address": "c/sta Clara 65",
      "Poblacion": "Alcobendas"
    },
    {
      "IDEntity": "5639",
      "Cif": "A64509581",
      "name": "BIGOTITOS",
      "phone": 678903428,
      "ContactPerson": "María Ortega",
      "email": "mariaort54@gmail.com",
      "address": "c/eras 76",
      "Poblacion": "Alcorcón"
    },
  ]
 
 //primero nos conectamos a nuestra base de datos
 mongoose.connect("mongodb+srv://javiersmeral:admin@cluster1.ku4ldyq.mongodb.net/Protectora?retryWrites=true&w=majority")
 .then(async () => {
     //esperamos que nos de una respuesta como que esta conectado y miramos toda la información como si hicieramos un get de Restaurantes para saber si tenemos cosas ya dentro de nuestra coleccion o no
     const allEntities = await Entities.find();
     //comporbamos si este array nos esta devolviendo alguna posicion mayor cero, que significara que tenemos datos
     if (allEntities.length > 0) {
         //si  la tienes lo que hacemos es borrar al coleccion entera
         await Entities.collection.drop();
         console.log("entities borrados");
     }
 })
 .catch((error) => console.log("error borrando entities", error))
 .then(async () => {
     // Recorremos con un mapeo nuestro array de arriba que va a ser nuestro backup y le decimos que siguiente el modelo de Restaurante me meta cada uno de los restaurantes, porque sino no estaría pasando la comprobación del modelo
     const entitiesMap = arrayEntities.map((entities)=> new Entities(entities));
     //insertamos en nuestra coleccion todo nuestro array que pasa todas las condiciones del modelo,     IMPORTANTE FIJARSE EN LOS COLORES EN ESTE CASO DE RESTAURANTE, SI OS FIJAIS A MI CUANDO SE REFIERE AL MODELO ME SALE EN AMARILLO, Y CUANDO SE REFIERE A LA COLECCION DE MONGO ME SALE EN ROJO
     await Entities.insertMany(entitiesMap);
     console.log("entidades insertadas correctamente");
 })
 .catch((error)=>console.log("error insertando entidades",error))
 .finally(() => mongoose.disconnect());

 