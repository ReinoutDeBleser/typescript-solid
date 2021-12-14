var Engine = /** @class */ (function () {
    function Engine(_engineStatus, FUEL_MILEAGE) {
        if (_engineStatus === void 0) { _engineStatus = false; }
        if (FUEL_MILEAGE === void 0) { FUEL_MILEAGE = 10; }
        this._engineStatus = _engineStatus;
        this.FUEL_MILEAGE = FUEL_MILEAGE;
    }
    Object.defineProperty(Engine.prototype, "engineStatus", {
        //engine status going to  drive
        get: function () {
            return this._engineStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "FuelMileage", {
        get: function () {
            return this.FUEL_MILEAGE;
        },
        enumerable: false,
        configurable: true
    });
    //engine status update depending on toggle
    Engine.prototype.turnEngineOn = function () {
        this._engineStatus = true;
    };
    //engine status update depending on toggle
    Engine.prototype.turnEngineOff = function () {
        this._engineStatus = false;
    };
    return Engine;
}());
