class FuelLevel {
    private  _fuel : number;
    private _maxFuel: number;
    constructor(fuel : number = 0, maxFuel: number = 100) {
        this._fuel= fuel;
        this._maxFuel = maxFuel;
    }
    get fuel(): number {
        return this._fuel;
    }
    set fuel(value: number) {
        this._fuel -= value;
    }
    get maxFuel(): number {
        return this._maxFuel;
    }
    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this._maxFuel);
    }
}