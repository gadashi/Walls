class Building{
//Idee: alle Gegner laufen zur Basis, Minen und Türme verringern den Wert
// der FValue vom Pathfinding. So greifen sie automatisch nahe Türme und Minen an
//increase FValue if it has 3 or more neighbours


	constructor(name){
    this.hp;
    this.supportedTile;
    this.name =name;
    this.level;
		this.effect = eval("this." + name + "()" );
		this.pTile;
	}

	upgrade(){

	}

	Wall(){
		let effects = {

			tileSpeedModifier: 20,
			prize: 10,
			rCost: 0.03,
			onBuild: function(pTile){
					ctrl.rCost += this.rCost / (1000 * ctrl.dt);
			},
			onDestroy: function(killer){
				ctrl.rCost -= this.rCost / (1000 * ctrl.dt);}
		};
		this.supportedTile = "grass";
		return effects;
	}

	Tower(){
		let effects = {

			tileSpeedModifier: -2,
			prize: 40,
			rCost: 0.1,
			onBuild: function(pTile){
				ctrl.rCost += this.rCost / (1000 * ctrl.dt);
			},
			onDestroy: function(killer){
				ctrl.rCost -= this.rCost / (1000 * ctrl.dt);

			}
		};
		this.supportedTile = "grass";

		return effects;
	}

	Mine(){
		let effects = {
			tileSpeedModifier: -4,
			id: 0,
			income: 2,
			prize: 80,
			pTile: null,
			onBuild: function(pTile){
				this.pTile = pTile;
				ctrl.mines.push(this);
				this.id = ctrl.mines.length;
				console.log(ctrl.mines);
			},
			onDestroy: function(killer){
				//ersetze das jetzige Array element mit dem letzten im Array
				if(this.id < ctrl.mines.length - 1){
					let l = ctrl.mines.length - 1;
					ctrl.mines[this.id] = ctrl.mines[l];
					ctrl.mines[l].id = this.id;
					}
				ctrl.mines.pop();
				console.log(ctrl.mines);

			}
		};
		this.supportedTile = "gold";
		return effects;

	}

	Base(){
		let effects = {
			tileSpeedModifier: 0,
			prize: 0,
			onBuild: function(pTile){
			},
			onDestroy: function(killer){
			}
		};
		this.supportedTile = "grass";
		return effects;
	}

	None(){
		let effects = {
			tileSpeedModifier: 0,
			prize: 0,
			onBuild: function(pTile){},
			onDestroy: function(killer){
			}
		};
		return effects;
	}

}




//class Bridge{}
//class Gate{}
