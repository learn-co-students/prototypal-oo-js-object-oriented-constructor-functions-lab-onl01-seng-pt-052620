function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}
//tried to do it with an anon function
let Driver = function(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}