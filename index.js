const fs = require('fs');

const ruta = 'productos.json';

// función para leer productos
function leerProductos() {
    const data = fs.readFileSync(ruta, 'utf-8');
    return JSON.parse(data);
}

//1
function mostrarProductos() {
    const productos = leerProductos();

    console.log('Lista de productos:\n');

    productos.forEach((producto, index) => {
        console.log(`ID: ${index + 1}`);
        console.log(`Nombre: ${producto.nombre}`);
        console.log(`Precio: $${producto.precio}`);
        console.log('------------------------');
    });
}


function agregarProducto(nombre, precio) {
    const productos = leerProductos();

    const nuevoProducto = { nombre, precio };
    productos.push(nuevoProducto);

    fs.writeFileSync(ruta, JSON.stringify(productos, null, 2));

    console.log('Producto agregado correctamente');
}
mostrarProductos();
agregarProducto('Monitor', 120000);

//3
const dayjs = require('dayjs');

function mostrarFecha() {
    const ahora = dayjs();

    //Lo pusimos en rojo para que sea mas divertido :)
    console.log('\x1b[31mFECHA Y HORA');
    console.log('Fecha actual:', ahora.format('DD/MM/YYYY'));
    console.log('Hora actual:', ahora.format('HH:mm'));
    console.log('\x1b[0m'); 
}
mostrarFecha();

//4
const axios = require('axios');

async function obtenerPais(nombrePais) {
    try {
        const res = await axios.get(`https://restcountries.com/v3.1/name/${nombrePais}`);
        const pais = res.data[0];

        console.log('DATOS DEL PAÍS');
        console.log('País:', pais.name.common);
        console.log('Capital:', pais.capital);
        console.log('Región:', pais.region);
        console.log('Población:', pais.population);
    } catch (error) {
        console.log('Error al obtener el país');
    }
}
obtenerPais('Argentina');



function buscarProducto(nombre) {
    const data = fs.readFileSync('productos.json', 'utf-8');
    const productos = JSON.parse(data);

    const producto = productos.find(p =>
        p.nombre.toLowerCase() === nombre.toLowerCase()
    );

    console.log('BUSCAR PRODUCTO');

    if (producto) {
        console.log('Producto encontrado');
        console.log(`Nombre: ${producto.nombre}`);
        console.log(`Precio: ${producto.precio}`);
    } else {
        console.log('Producto no encontrado');
    }
}
buscarProducto('Mouse');


// 6
function generarCSV() {
    const data = fs.readFileSync('productos.json', 'utf-8');
    const productos = JSON.parse(data);

    let contenido = 'nombre,precio\n';

    productos.forEach(p => {
        contenido += `${p.nombre},${p.precio}\n`;
    });

    fs.writeFileSync('productos.csv', contenido);

    console.log('GENERAR CSV');
    console.log('Archivo CSV generado correctamente');
}

generarCSV();



// 7

function iniciarContador() {
    let contador = 1;

    console.log('CONTADOR');

    const intervalo = setInterval(() => {
        console.log(contador);

        if (contador === 10) {
            console.log('Fin del contador');
            clearInterval(intervalo);
        }

        contador++;
    }, 1000);
}

iniciarContador();



// 8

function analizarTexto(texto) {
    const caracteres = texto.length;

    const palabras = texto.trim().split(/\s+/).length;

    const vocales = (texto.match(/[aeiouáéíóú]/gi) || []).length;

    const consonantes = (texto.match(/[bcdfghjklmnñpqrstvwxyz]/gi) || []).length;

    return {
        caracteres,
        palabras,
        vocales,
        consonantes
    };
}


console.log('ANALIZADOR DE TEXTO');
console.log(analizarTexto('HOLA, ME LLAMO TOBI Y VENGO A ORT DESDE 2020, SOY FELIZZZZ'));



// 9

function validarPassword(password) {
    const tieneLongitud = password.length >= 8;
    const tieneNumero = /\d/.test(password);
    const tieneMayuscula = /[A-Z]/.test(password);

    console.log('VALIDADOR DE PASSWORD');

    if (tieneLongitud && tieneNumero && tieneMayuscula) {
        console.log('Password válida');
    } else {
        console.log('Password inválida');
    }
}

validarPassword('Hola123');