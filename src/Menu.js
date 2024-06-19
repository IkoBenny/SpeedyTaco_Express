


class Item {
	
	constructor(name, nickname, category, description = name) {
		this.name = name;
		this.nickname = nickname;
		this.category = category;
		this.description = description;
	}
	
}

class SimpleItem {
	
	constructor(name) {
		this.name = name;
	}
	
}

	var classicBeefTaco = new Item("Classic Beef Taco", "Nitro Beef Racer", "Taco");
	var grilledChickenTaco = new Item("Grilled Chicken Taco", "Grilled Chicken Speedster", "Taco");
	var blackBeanTaco = new Item("Vegetarian Black Bean Taco", "Veggie Turbo Charger", "Taco");
	var shrimpTaco = new Item("Shrimp Taco", "Shrimp Sprinter", "Taco");
	var fishTaco = new Item("Fish Taco", "Fish Velocity", "Taco");
	
	var tacos = [];
	tacos.push(classicBeefTaco, grilledChickenTaco, blackBeanTaco, shrimpTaco, fishTaco);
	
	var beefBurrito = new Item("Beef Burrito", "Beef Nitro Burrito", "Burrito");
	var chickenBurrito = new Item("Chicken Burrito", "Chicken Turbo Charger", "Burrito");
	var veggieBurrito = new Item("Veggie Burrito", "Veggie Speedster Wrap", "Burrito");
	var breakfastBurrito = new Item("Breakfast Burrito", "Breakfast Blitz Burrito", "Burrito", "(served all day)");
	
	var burritos = [];
	burritos.push(beefBurrito, chickenBurrito, veggieBurrito, breakfastBurrito);
	
	var cheeseQuesadilla = new Item("Cheese Quesadilla", "Cheese Rocket Racer", "Quesadilla");
	var chickenQuesadilla = new Item("Chicken Quesadilla", "Chicken Speed Demon", "Quesadilla");
	var veggieQuesadilla = new Item("Veggie Quesadilla", "Veggie Turbo Thrust", "Quesadilla");
	
	var quesadillas = [];
	quesadillas.push(cheeseQuesadilla, chickenQuesadilla, veggieQuesadilla);
	
	var chipsAndSalsa = new SimpleItem("Chips & Victory Salsa");
	var streetCorn = new SimpleItem("Mexican Street Corn Sprint");
	var chipsAndGuacamole = new SimpleItem("Guac Grand Prix & Chips");
	
	var sides = [];
	sides.push(chipsAndSalsa, streetCorn, chipsAndGuacamole);
	
	var fountainFuel = new SimpleItem("Fountain Fuel (Various sodas)");
	var bottledWater = new SimpleItem("Bottled Throttle");
	var icedTea = new SimpleItem("Iced Speedster Tea");
	
	var drinks = [];
	drinks.push(fountainFuel, bottledWater, icedTea);
	
	var churro = new SimpleItem("Churro Charger");
	var iceCream = new SimpleItem("Fried Ice Cream Finish Line");
	
	var desserts = [];
	desserts.push(churro, iceCream);	
	
	module.exports = { tacos, classicBeefTaco, Item, SimpleItem }
	console.log(module);
	