function Warriors (name, gender){
    this.name = name;
    this.gender = gender; 
    this.power = 1;
    this.level = 2;
    this.weapon = "wooden sword";
    
}

var myWarrior = new Warriors('Wanda', 'F');
console.log(myWarrior);

var myWarrior2 = new Warriors('Codrin', 'M');
console.log(myWarrior2);

Warriors.prototype.fight = function(){
    console.log(" rushes to the arena with ");
}

Warriors.prototype.faceoff = function(){
    
}

