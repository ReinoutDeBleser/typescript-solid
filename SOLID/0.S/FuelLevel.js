var FuelLevel = /** @class */ (function () {
    function FuelLevel(fuel, maxFuel) {
        if (fuel === void 0) { fuel = 0; }
        if (maxFuel === void 0) { maxFuel = 100; }
        this._fuel = fuel;
        this._maxFuel = maxFuel;
    }
    Object.defineProperty(FuelLevel.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        set: function (value) {
            this._fuel -= value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FuelLevel.prototype, "maxFuel", {
        get: function () {
            return this._maxFuel;
        },
        enumerable: false,
        configurable: true
    });
    FuelLevel.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this._maxFuel);
    };
    return FuelLevel;
}());
