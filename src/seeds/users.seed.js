const mongoose = require('mongoose');
const Users = require('../api/models/users.model');

const arrayUsers = [
  {
    "dni": "45987123P",
    "nameSurname": "Javier",
    "email": "javier@gmail.com",
    "address": "C/Moncho 34, Barcelona",
    "phone": 675093485,
    "password": "adminJavier",
    "role": "admin"
  },
  {
    "dni": "72490732D",
    "nameSurname": "Iago",
    "email": "iago@gmail.com",
    "address": "C/Real 34, Lugo",
    "phone": 683945747,
    "password": "adminIago",
    "role": "admin"
  },
  {
    "dni": "23870921C",
    "nameSurname": "Ricky",
    "email": "ricky@gmail.com",
    "address": "C/del trueno 3,Valencia",
    "phone": 658034675,
    "password": "adminRicky",
    "role": "admin"
  },
  {
    "dni": "23769045A",
    "nameSurname": "David",
    "email": "david@gmail.com",
    "address": "C/Soto 65, La Coruña",
    "phone": 678034567,
    "password": "adminDavid",
    "role": "admin"
  },
  {
    "dni": "45903412E",
    "nameSurname": "Noemi",
    "email": "noemi@gmail.com",
    "address": "C/Paris 2, León",
    "phone": 678648034,
    "password": "adminNoemi",
    "role": "admin"
  },
  {
    "dni": "32980347A",
    "nameSurname": "Teresa Martinez",
    "email": "tere@peludos.com",
    "address": "ctra.Segovia 54, Madrid",
    "phone": 634076254,
    "password": "Peludos21",
    "role": "company"
  },
  {
    "dni": "89357298I",
    "nameSurname": "Juan Matías",
    "email": "plumas@plumas.com",
    "address": "c/sta Clara 65, Alcobendas",
    "phone": 673946267,
    "password": "Plumas26",
    "role": "company"
  },
  {
    "dni": "71340947O",
    "nameSurname": "María Ortega",
    "email": "mariaort54@gmail.com",
    "address": "c/eras 76, Alcorcón",
    "phone": 657092317,
    "password": "bigotitos23",
    "role": "company"
  },
  {
    "dni": "72309516T",
    "nameSurname": "Julia Martinez",
    "email": "julitina56@gmail.com",
    "address": "c/moreras34, Fuenlabrada",
    "phone": 654879023,
    "password": "Usuario101",
    "role": "user"
  },
  {
    "dni": "58996437P",
    "nameSurname": "Jesus Leandro Gonzalez Martinez",
    "email": "jesuslgm@gmail.com",
    "address": "c/Juan Carlos II, Pinto",
    "phone": 654884937,
    "password": "Usuario101",
    "role": "user"
  },
  {
    "dni": "44952876Y",
    "nameSurname": "Pepito Perez",
    "email": "ppperepe@gmail.com",
    "address": "c/San Juan, Vallecas",
    "phone": 633485967,
    "password": "Usuario101",
    "role": "user"
  },
  {
    "dni": "27188561S",
    "nameSurname": "Diana Martinez",
    "email": "didimar@gmail.com",
    "address": "c/Pascual, Leon",
    "phone": 677268195,
    "password": "Usuario101",
    "role": "user"
  },
  {
    "dni": "33454819L",
    "nameSurname": "Antonia Gutierrez",
    "email": "toñiguti@gmail.com",
    "address": "c/05846220, Oviedo",
    "phone": 633552499,
    "password": "Usuario101",
    "role": "user"
  },
  {
    "dni": "37154486K",
    "nameSurname": "Melania Sánchez",
    "email": "melanina@gmail.com",
    "address": "c/Ortiz, Majadaonda",
    "phone": 676559811,
    "password": "Usuario101",
    "role": "user"
  }
]

//primero nos conectamos a nuestra base de datos
mongoose.connect("mongodb+srv://javiersmeral:admin@cluster1.ku4ldyq.mongodb.net/Protectora?retryWrites=true&w=majority")
  .then(async () => {
    //esperamos que nos de una respuesta como que esta conectado y miramos toda la información como si hicieramos un get de Restaurantes para saber si tenemos cosas ya dentro de nuestra coleccion o no
    const allUsers = await Users.find();
    //comporbamos si este array nos esta devolviendo alguna posicion mayor cero, que significara que tenemos datos
    if (allUsers.length > 0) {
      //si  la tienes lo que hacemos es borrar al coleccion entera
      await Users.collection.drop();
      console.log("usuarios borrados");
    }
  })
  .catch((error) => console.log("error borrando usuarios", error))
  .then(async () => {
    // Recorremos con un mapeo nuestro array de arriba que va a ser nuestro backup y le decimos que siguiente el modelo de Restaurante me meta cada uno de los restaurantes, porque sino no estaría pasando la comprobación del modelo
    const usuariosMap = arrayUsers.map((usuarios) => new Users(usuarios));
    //insertamos en nuestra coleccion todo nuestro array que pasa todas las condiciones del modelo,     IMPORTANTE FIJARSE EN LOS COLORES EN ESTE CASO DE RESTAURANTE, SI OS FIJAIS A MI CUANDO SE REFIERE AL MODELO ME SALE EN AMARILLO, Y CUANDO SE REFIERE A LA COLECCION DE MONGO ME SALE EN ROJO
    await Users.insertMany(usuariosMap);
    console.log("usuarios insertados correctamente");
  })
  .catch((error) => console.log("error insertando usuarios", error))
  .finally(() => mongoose.disconnect());

