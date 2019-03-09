class Building{
	constructor(name,supportedTile){
    this.x;
    this.y;
    this.hp;
    this.supportedTile = supportedTile;
    this.name =name;
    this.level;
		this.effect =  eval("this." + name + "()" );
		this.genIncome;
	}

	build(){
		 setInterval(this.effect.addIncome,1000);
		 this.genIncome = nrInterval;
		 nrInterval++;
		 console.log(this.genIncome);
	}

	upgrade(){

	}

	Wall(){
		let effects = {
			prize: 10
		};
		return effects;
	}

	Tower(){
		let effects = {
			prize: 40
		};
		return effects;
	}

	Mine(){
		let effects = {
			id: 0,
			income: 2,
			prize: 50,
			addIncome: function(){ctrl.money+= effects.income;
		console.log(ctrl.money);
	}
		};

		return effects;

	}

	Base(){
		let effects = {
			prize: 0
		};
		return effects;
	}

}




//class Bridge{}
//class Gate{}
