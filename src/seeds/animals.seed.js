const mongoose = require('mongoose');
const Animals = require('../api/models/animals.model');

const arrayAnimals = [
    {
      "animalID": "012",
      "name": "Tito",
      "city": "Madrid",
      "species": "Agapornis",
      "birthDate": "2023-01-12",
      "genre": "macho",
      "size": "pequeño",
      "weight": "112",
      "personality": "Timido",
      "history": "Me encontraron perdido",
      "status": "En proceso",
      "vaccinated": true,
      "dewormed": true,
      "sterilized": true,
      "identified": false,
      "microchip": false,
      "adoptionRequirements": "Espacio semi-abierto",
      "rate": "20",
      "sendOtherCity":false,
      "image": "https://tse1.mm.bing.net/th?id=OIP.Iz3iVHItK6OuekBFJnGhjAHaFj&pid=Api&P=0&h=180"
    }
    ]

    //primero nos conectamos a nuestra base de datos
mongoose.connect("mongodb+srv://javiersmeral:admin@cluster1.ku4ldyq.mongodb.net/Protectora?retryWrites=true&w=majority")
.then(async () => {
    //esperamos que nos de una respuesta como que esta conectado y miramos toda la información como si hicieramos un get de Restaurantes para saber si tenemos cosas ya dentro de nuestra coleccion o no
    const allAnimals = await Animals.find();
    //comporbamos si este array nos esta devolviendo alguna posicion mayor cero, que significara que tenemos datos
    if (allAnimals.length > 0) {
        //si  la tienes lo que hacemos es borrar al coleccion entera
        await Animals.collection.drop();
        console.log("animales borrados");
    }
})
.catch((error) => console.log("error borrando animales", error))
.then(async () => {
    // Recorremos con un mapeo nuestro array de arriba que va a ser nuestro backup y le decimos que siguiente el modelo de Restaurante me meta cada uno de los restaurantes, porque sino no estaría pasando la comprobación del modelo
    const animalesMap = arrayAnimals.map((animales)=> new Animals(animales));
    //insertamos en nuestra coleccion todo nuestro array que pasa todas las condiciones del modelo,     IMPORTANTE FIJARSE EN LOS COLORES EN ESTE CASO DE RESTAURANTE, SI OS FIJAIS A MI CUANDO SE REFIERE AL MODELO ME SALE EN AMARILLO, Y CUANDO SE REFIERE A LA COLECCION DE MONGO ME SALE EN ROJO
    await Animals.insertMany(animalesMap);
    console.log("animales insertados correctamente");
})
.catch((error)=>console.log("error insertando animales",error))
.finally(() => mongoose.disconnect());