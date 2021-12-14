class Engine {
    constructor(private _engineStatus: boolean = false, private FUEL_MILEAGE: number = 10) {
    }
    //engine status going to  drive
    get engineStatus(): boolean {
        return this._engineStatus;
    }
    get FuelMileage(): number {
        return this.FUEL_MILEAGE;
    }
    //engine status update depending on toggle
    turnEngineOn() {
        this._engineStatus = true;
    }
    //engine status update depending on toggle
    turnEngineOff() {
        this._engineStatus = false;
    }
}