const mongoose = require('mongoose');
const Animals = require('../api/models/animals.model');

const arrayAnimals = [
    {
        "name": "Tito",
        "city": "Madrid",
        "species": "Perro",
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
        "identified": true,
        "microchip": false,
        "adoptionRequirements": "Espacio semi-abierto",
        "rate": "20",
        "sendOtherCity": false,
        "image": "https://tse1.mm.bing.net/th?id=OIP.Iz3iVHItK6OuekBFJnGhjAHaFj&pid=Api&P=0&h=180"
    },
    {
        "name": "Pepino",
        "city": "Madrid",
        "species": "Periquito",
        "birthDate": "2023-03-24",
        "genre": "macho",
        "size": "normal",
        "weight": "0.5",
        "personality": "Cantante",
        "history": "Se escapo de su hogar",
        "status": "Pendiente",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": true,
        "microchip": false,
        "adoptionRequirements": "Mucho sol",
        "rate": "20",
        "sendOtherCity": false,
        "image": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/172618631/1200"
    },
    {
        "name": "Pepito",
        "city": "Barcelona",
        "species": "Gato",
        "birthDate": "2023-05-16",
        "genre": "macho",
        "size": "normal",
        "weight": "1.5",
        "personality": "Vivaracho",
        "history": "Estaba en la calle",
        "status": "Pendiente",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": true,
        "microchip": false,
        "adoptionRequirements": "Amor y cariño",
        "rate": "20",
        "sendOtherCity": false,
        "image": "https://www.clarin.com/2023/07/12/r9wevtHd8_1200x0__1.jpg"
    },
    {
        "name": "Lope de Vega",
        "city": "Madrid",
        "species": "Canario",
        "birthDate": "2022-12-12",
        "genre": "macho",
        "size": "normal",
        "weight": "0.2",
        "personality": "Maravilloso",
        "history": "Cantaba en la calle",
        "status": "Adoptado",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": true,
        "microchip": false,
        "adoptionRequirements": "Buenas vistas al exterior",
        "rate": "20",
        "sendOtherCity": false,
        "image": "https://imagedelivery.net/9Wt6t6bxgbONj4rySdkBjQ/usjfw7TpO1/mobile"
    },
    {
        "name": "Daltfresh",
        "city": "Oviedo",
        "species": "Gato",
        "birthDate": "11/18/2023",
        "genre": "Female",
        "size": "M",
        "weight": 7.9,
        "personality": "Movido",
        "history": "Se encontraba en una casa abandonada",
        "status": "Adoptado",
        "vaccinated": false,
        "dewormed": false,
        "sterilized": false,
        "identified": false,
        "microchip": true,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": false,
        "image": "https://s1.eestatic.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg"
    }, {
        "name": "Alpha",
        "city": "Aranjuez",
        "species": "Perro",
        "birthDate": "7/3/2023",
        "genre": "Male",
        "size": "L",
        "weight": 15,
        "personality": "Fiero",
        "history": "Lo dejaron en la puerta de la protectora",
        "status": "Pendiente",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": false,
        "microchip": true,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": false,
        "image": "https://www.narizdenieve.com/wp-content/uploads/2021/12/perro-mas-grande-del-mundo.jpg"
    }, {
        "name": "Juancho",
        "city": "Madrid",
        "species": "Iguana",
        "birthDate": "1/22/2023",
        "genre": "Male",
        "size": "M",
        "weight": 6.7,
        "personality": "Tranquilo",
        "history": "Se encontraba en manos de un traficante de animales",
        "status": "Pendiente",
        "vaccinated": false,
        "dewormed": true,
        "sterilized": false,
        "identified": false,
        "microchip": false,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": true,
        "image": "https://www.tiendanimal.es/articulos/wp-content/uploads/2018/01/Las-iguanas-en-la-naturaleza-1-1200x800.jpg"
    }, {
        "name": "Bitwolf",
        "city": "Barcelona",
        "species": "Perro",
        "birthDate": "7/23/2023",
        "genre": "Male",
        "size": "L",
        "weight": 12.0,
        "personality": "Premium",
        "history": "Murió su cuidador",
        "status": "Adoptado",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": true,
        "microchip": true,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": false,
        "image": "https://as01.epimg.net/diarioas/imagenes/2022/05/29/actualidad/1653826510_995351_1653826595_noticia_normal_recorte1.jpg"
    }, {
        "name": "Zzap",
        "city": "Madrid",
        "species": "Gato",
        "birthDate": "1/29/2023",
        "genre": "Female",
        "size": "S",
        "weight": 2.3,
        "personality": "Fabulosa",
        "history": "Estaba abandonada en la calle junto a sus hermanos",
        "status": "Pendiente",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": true,
        "microchip": false,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": true,
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/24/Stray_calico_cat_near_Sagami_River-01.jpg"
    }, {
        "name": "Keylex",
        "city": "Madrid",
        "species": "Perro",
        "birthDate": "4/6/2023",
        "genre": "Female",
        "size": "XL",
        "weight": 15.0,
        "personality": "Timida y cariñosa",
        "history": "Su cuidadora no puede hacerse cargo de ella",
        "status": "Pendiente",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": true,
        "microchip": true,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": true,
        "image": "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
    }, {
        "name": "Y-find",
        "city": "Zaragoza",
        "species": "Gato",
        "birthDate": "9/24/2023",
        "genre": "Male",
        "size": "XL",
        "weight": 9.4,
        "personality": "Tranquilo",
        "history": "Lo encontraron en la calle",
        "status": "Adoptado",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": true,
        "microchip": true,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": false,
        "image": "https://veteasy-api.s3-eu-west-1.amazonaws.com/media/blog_posts/355/main_image.jpg"
    }, {
        "name": "Zaam-Dox",
        "city": "Sevilla",
        "species": "Agapournis",
        "birthDate": "9/19/2023",
        "genre": "Female",
        "size": "S",
        "weight": 0.2,
        "personality": "Cantante",
        "history": "Lo encontraron en la calle",
        "status": "En proceso",
        "vaccinated": false,
        "dewormed": true,
        "sterilized": true,
        "identified": false,
        "microchip": false,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": false,
        "image": "https://t2.ea.ltmcdn.com/es/razas/8/7/3/agapornis_378_0_orig.jpg"
    }, {
        "name": "Stim",
        "city": "Ciudad Real",
        "species": "Agapournis",
        "birthDate": "7/3/2023",
        "genre": "Female",
        "size": "S",
        "weight": 0.6,
        "personality": "Muy tranquila",
        "history": "Voló de su casa",
        "status": "En proceso",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": true,
        "microchip": false,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": true,
        "image": "https://i.pinimg.com/474x/87/ac/e1/87ace1b51f18f8effcc7988f16b3c8b6.jpg"
    }, {
        "name": "Lotlux",
        "city": "Madrid",
        "species": "Perro",
        "birthDate": "1/2/2023",
        "genre": "Female",
        "size": "S",
        "weight": 4.3,
        "personality": "Movidilla",
        "history": "Falleció su cuidador",
        "status": "En proceso",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": true,
        "microchip": true,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": false,
        "image": "https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg"
    }, {
        "name": "Veribet",
        "city": "Castellón",
        "species": "Gato",
        "birthDate": "7/21/2023",
        "genre": "Female",
        "size": "M",
        "weight": 6.1,
        "personality": "Cariñosa",
        "history": "Se encontraba en una casa abandonada",
        "status": "Pendiente",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": true,
        "microchip": false,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": false,
        "image": "https://www.diariodesevilla.es/2023/05/29/sociedad/Sintomas-saber-gata-prenada_1797431023_185669061_1200x675.jpg"
    }, {
        "name": "Bamity",
        "city": "Gerona",
        "species": "Perro",
        "birthDate": "5/12/2023",
        "genre": "Female",
        "size": "L",
        "weight": 10.1,
        "personality": "Juguetona",
        "history": "La encontraron en la puerta de la protectora",
        "status": "Adoptada",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": true,
        "microchip": true,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": false,
        "image": "https://www.animalshealth.es/fileuploads/news/pastor-belga-malinois-mesa-de-trabajo-216734260171.png"
    }, {
        "name": "Hatity",
        "city": "Madrid",
        "species": "Perro",
        "birthDate": "11/12/2023",
        "genre": "Female",
        "size": "L",
        "weight": 10.7,
        "personality": "Buena con las personas",
        "history": "La encontraron en la puerta de la protectora",
        "status": "Pendiente",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": true,
        "microchip": true,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": false,
        "image": "https://www.semana.com/resizer/HxRMj17BalEa4lf2EKapKuv4oAU=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/FOTOZWOPTZDRLKE3K4GM46KWYM.jpg"
    }, {
        "name": "Tin",
        "city": "Vitoria-Gasteiz",
        "species": "Gato",
        "birthDate": "9/6/2023",
        "genre": "Female",
        "size": "L",
        "weight": 8.2,
        "personality": "Juguetona",
        "history": "Abandonada en la calle",
        "status": "Pendiente",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": true,
        "microchip": false,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": true,
        "image": "https://www.vetclan.com/wp-content/uploads/tumores-mama.jpg"
    }, {
        "name": "Andalax",
        "city": "Barcelona",
        "species": "Iguana",
        "birthDate": "6/20/2023",
        "genre": "Male",
        "size": "M",
        "weight": 4.0,
        "personality": "Tranquila",
        "history": "La encontraron en una casa abandonada",
        "status": "Pendiente",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": false,
        "identified": true,
        "microchip": false,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": true,
        "image": "https://www.vetcon.es/wp-content/uploads/2020/05/reptiles-iguana-verde-1.jpg"
    }, {
        "name": "Bigtax",
        "city": "Madrid",
        "species": "Gato",
        "birthDate": "5/16/2023",
        "genre": "Female",
        "size": "M",
        "weight": 6.7,
        "personality": "Dulce",
        "history": "La encontraron en la calle",
        "status": "En proceso",
        "vaccinated": true,
        "dewormed": true,
        "sterilized": true,
        "identified": true,
        "microchip": false,
        "adoptionRequirements": "Amor y cariño",
        "rate": 20,
        "sendOtherCity": true,
        "image": "https://static.animalear.com/b/wp-content/uploads/2017/10/cuidar-gata-embarazada-1.jpg"
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
        const animalesMap = arrayAnimals.map((animales) => new Animals(animales));
        //insertamos en nuestra coleccion todo nuestro array que pasa todas las condiciones del modelo,     IMPORTANTE FIJARSE EN LOS COLORES EN ESTE CASO DE RESTAURANTE, SI OS FIJAIS A MI CUANDO SE REFIERE AL MODELO ME SALE EN AMARILLO, Y CUANDO SE REFIERE A LA COLECCION DE MONGO ME SALE EN ROJO
        await Animals.insertMany(animalesMap);
        console.log("animales insertados correctamente");
    })
    .catch((error) => console.log("error insertando animales", error))
    .finally(() => mongoose.disconnect());