


class Item {
	
	constructor(name, nickname, category, description = name, id) {
		this.name = name;
		this.nickname = nickname;
		this.category = category;
		this.description = description;
		this.id = id;
	}
	
}

class SimpleItem {
	
	constructor(name, id) {
		this.name = name;
		this.id = id;
	}
	
}

	var classicBeefTaco = new Item("Classic Beef Taco", "Nitro Beef Racer", "Taco", undefined, 1);
	var grilledChickenTaco = new Item("Grilled Chicken Taco", "Grilled Chicken Speedster", "Taco", undefined, 2);
	var blackBeanTaco = new Item("Vegetarian Black Bean Taco", "Veggie Turbo Charger", "Taco", undefined, 3);
	var shrimpTaco = new Item("Shrimp Taco", "Shrimp Sprinter", "Taco", undefined, 4);
	var fishTaco = new Item("Fish Taco", "Fish Velocity", "Taco", undefined, 5);
	
	var tacos = [];
	tacos.push(classicBeefTaco, grilledChickenTaco, blackBeanTaco, shrimpTaco, fishTaco);
	
	var beefBurrito = new Item("Beef Burrito", "Beef Nitro Burrito", "Burrito", undefined, 1);
	var chickenBurrito = new Item("Chicken Burrito", "Chicken Turbo Charger", "Burrito", undefined, 2);
	var veggieBurrito = new Item("Veggie Burrito", "Veggie Speedster Wrap", "Burrito", undefined, 3);
	var breakfastBurrito = new Item("Breakfast Burrito", "Breakfast Blitz Burrito", "Burrito", "(served all day)", undefined, 4);
	
	var burritos = [];
	burritos.push(beefBurrito, chickenBurrito, veggieBurrito, breakfastBurrito);
	
	var cheeseQuesadilla = new Item("Cheese Quesadilla", "Cheese Rocket Racer", "Quesadilla", undefined, 1);
	var chickenQuesadilla = new Item("Chicken Quesadilla", "Chicken Speed Demon", "Quesadilla", undefined, 2);
	var veggieQuesadilla = new Item("Veggie Quesadilla", "Veggie Turbo Thrust", "Quesadilla", undefined, 3);
	
	var quesadillas = [];
	quesadillas.push(cheeseQuesadilla, chickenQuesadilla, veggieQuesadilla);
	
	var chipsAndSalsa = new SimpleItem("Chips & Victory Salsa", undefined, 1);
	var streetCorn = new SimpleItem("Mexican Street Corn Sprint", undefined, 2);
	var chipsAndGuacamole = new SimpleItem("Guac Grand Prix & Chips", undefined, 3);
	
	var sides = [];
	sides.push(chipsAndSalsa, streetCorn, chipsAndGuacamole);
	
	var fountainFuel = new SimpleItem("Fountain Fuel (Various sodas)", undefined, 1);
	var bottledWater = new SimpleItem("Bottled Throttle", undefined, 2);
	var icedTea = new SimpleItem("Iced Speedster Tea", undefined, 3);
	
	var drinks = [];
	drinks.push(fountainFuel, bottledWater, icedTea);
	
	var churro = new SimpleItem("Churro Charger", undefined, 1);
	var iceCream = new SimpleItem("Fried Ice Cream Finish Line", undefined, 2);
	
	var desserts = [];
	desserts.push(churro, iceCream);	
	
	module.exports = { tacos, classicBeefTaco, Item, SimpleItem }
	console.log(module);
	