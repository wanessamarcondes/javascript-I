// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon
const pokemon = {
    name: "Gardevoir",
    name_japan: "Gardevoir",
    number_pokedex: "282",
    previous: "Kirlia"
}

// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >."
pokemon.diga_ola = function () {
	console.log(`Hello, my name is ${this.name}. And my name in Japanese is ${this.name_japan}.`)
}

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.
pokemon.can_fly = true

// 4.
// Adicione um método ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyyyiinnngggg!".
pokemon.fly = function() {
    if (this.can_fly) {
        return "Flyyyyiinnngggg!"
    } else {
        return "Sorry, I can't fly"
    }
}

// 5.
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".
pokemon.do_something = function () {
	let action = ["FIGHT", "BAG", "RUN"]
	return action[Math.floor(Math.random() * action.length)]
}

// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will <NOME DO POKEMON> do?" e
// retorna o resultado do metodo
// `do_something`.
pokemon.ask = function () {
	console.log(`What will ${this.name} do?`)
	return this.do_something()
}

// 7. 
// Printe todas as propriedades 
// do seu pokemon no console.
for (const prop in pokemon) {
	console.log(prop)
}

// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>
for (const prop in pokemon) {
	console.log(`${prop}: ${pokemon[prop]}`)
}

// 9.
// Crie uma funcao construtora
// de um pokemon generico.
// function (nome, nome_japones) {}
function Pokemon(name, name_japan, can_fly) {
	this.name = name
	this.name_japan = name_japan
	this.can_fly = can_fly
	this.hello = function () {
		console.log(`Hello, my name is ${this.name}. And my name in Japanese is ${this.name_japan}.`)
	}
	this.fly = function () {
		if (this.can_fly) {
			return "Flyyyyiinnngggg!"
		} else {
			return "Sorry, I can't fly"
		}
	}
	this.do_something = function () {
		let action = ["FIGHT", "BAG", "RUN"]
		return action[Math.floor(Math.random() * action.length)]
	}
	this.ask = function () {
		console.log(`What will ${this.name} do?`)
		return this.do_something()
	}
}

for (const prop in Pokemon) {
    console.log(`${prop}: ${pokemon[prop]}`)
}