//Arrays

const personal = [
  "Leandro Morillo",
  26,
  true,
  new Date(1996, 0, 15),
  (libro = {
    Titulo: "La sobra del viento",
    Autor: "Carlos Ruiz Zafón",
    Fecha: new Date(2001),
  }),
  (url = false),
];

console.log(personal[4]);

// Objeto

const datos = {
  nombre: "Leandro Morillo",
  Edad: 26,
  "¿Eres desarrollador?": true,
  Nacimiento: 1996,
  "estatura-total": 1.75,
  hobbies: {
    Lectura: {
      Favorita: "La Sobra del viento",
      Autor: "Carlos Ruiz Zafón",
      Publicacion: 2001,
      Genero: "Ficción",
      Paginas: 400,
    },
    Segundario: "Vídeojuegos",
  },
};

// Podemos agregar o modificar atributos dentro de los objetos ya creados
datos.hobbies.Ejercicio = "Saltar cuerda";
datos.hobbies.Segundario = "Dormir";

console.log(datos.hobbies);
