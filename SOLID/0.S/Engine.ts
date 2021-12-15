import './Car'

export class Engine {
    private _fuel : number;
    private _engineStatus: boolean;
    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private readonly FUEL_MILEAGE: number;

    constructor(MAXIMUM_FUEL_CAPACITY){
        this._engineStatus = false;
        this._fuel = 0;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this.FUEL_MILEAGE = 10;
    }
    get getFuel(): number {
        return this._fuel;
    }

    consumeFuel() {
        this._fuel -=1
    }

    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }

    get engineStatus(): boolean {
        return this._engineStatus;
    }
    get mileage() {
        return this.FUEL_MILEAGE;
    }
    turnEngineOn() {
        this._engineStatus = true;
    }

    turnEngineOff() {
        this._engineStatus = false;
    }


}

