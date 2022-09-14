const pizzas = [
    {
        id: 1,
        nombre: "Jamon y Rucula",
        ingredientes: ["Muzzarella", "Tomate", "Jamon Crudo", "Rucula", "Huevo a la Plancha"],
        precio: 1300,
    },
    {
        id: 2,
        nombre: "Muzza",
        ingredientes: ["Muzzarella", "Tomate"],
        precio: 600
    },
    {
        id: 3,
        nombre: "Napolitana",
        ingredientes: ["Tomate", "Muzzarella", "Oregano", "Aceitunas"],
        precio: 800
    },
    {
        id: 4,
        nombre: "Especial",
        ingredientes: ["Muzzarella", "Tomate", "Jamon", "Morron"],
        precio: 900,
    },
    {
        id: 5,
        nombre: "Peperoni",
        ingredientes: ["Muzzarella", "Tomate", "Peperoni"],
        precio: 1000
    },
    {
        id: 6,
        nombre: "Anana",
        ingredientes: ["Muzzarella","Tomate","Peperoni","Anana"],
        precio: 1100,
    },
]
let nombre = document.querySelector('h2');
let precio = document.querySelector('h4');
let ingre = document.querySelector('h5');
let input = document.querySelector("input[type='number']")
let button = document.querySelector('button')

function add(e) {
    e.preventDefault()
    const valorInput = input.value.trim();
    if (pizzas.some(item => item.id == valorInput)) {
        nombre.innerText = `La pizza de ${pizzas.find(item => item.id == valorInput).nombre} tiene un precio de:`;
        precio.innerText = `$${pizzas.find(item => item.id == valorInput).precio}`;
        ingre.innerText = `Y contiene ${pizzas.find(item => item.id == valorInput).ingredientes}`
    } else {
        alert('No existe ninguna pizza con ese numero')
    };
    input.value = "";
}
button.addEventListener("click", add);