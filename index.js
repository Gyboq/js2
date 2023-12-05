const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//A
const pizzasImpar = pizzas.filter(pizza => pizza.id % 2 !== 0);
console.log("Pizzas con id impar:");
pizzasImpar.forEach(pizza => {
  console.log(`- ${pizza.nombre}`);
});

//B
const pizzaMenos600 = pizzas.some(pizza => pizza.precio < 600);
if (pizzaMenos600) {
  console.log("Si, hay pizzas que salen menos de $600.");
} else {
  console.log("No, todas las pizzas valen $600 o mas.");
}

//C
console.log("Nombre de cada pizza con su respectivo precio:");
pizzas.forEach(pizza => {
  console.log(`${pizza.nombre}: $${pizza.precio}`);
});

//D
console.log("Ingredientes de cada pizza:");
pizzas.forEach(pizza => {
  console.log(`Ingredientes de ${pizza.nombre}:`);
  pizza.ingredientes.forEach(ingrediente => {
    console.log(`- ${ingrediente}`);
  });
});
