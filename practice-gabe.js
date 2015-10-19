var Car = function(make, model, year, color){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.odometer = 0;
	this.working = true;
}

var car1 = new Car("Honda", "Odyssey", "2011", "White");
console.log(car1);

var car2 = new Car("Mitsubishi", "Montero", "2001", "Gray");

var ferrari = new Car("Ferrari", "FastZ", "2016", "Red");

Car.prototype = {
	forward: function(miles){
		this.odometer = this.odometer + miles;
	}
};

var Mechanic = function(name){
	this.name = name;
}

Mechanic.prototype = {
	fix: function(car){
		if(car.working === false){
			car.working = true;
		}
	}	
};

var joe = new Mechanic("Joe");

joe.fix(ferrari);


