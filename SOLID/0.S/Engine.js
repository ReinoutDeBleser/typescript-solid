"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
require("./Car");
var Engine = /** @class */ (function () {
    function Engine(MAXIMUM_FUEL_CAPACITY) {
        this._engineStatus = false;
        this._fuel = 0;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this.FUEL_MILEAGE = 10;
    }
    Object.defineProperty(Engine.prototype, "getFuel", {
        get: function () {
            return this._fuel;
        },
        enumerable: false,
        configurable: true
    });
    Engine.prototype.consumeFuel = function () {
        this._fuel -= 1;
    };
    Engine.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    Object.defineProperty(Engine.prototype, "engineStatus", {
        get: function () {
            return this._engineStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "mileage", {
        get: function () {
            return this.FUEL_MILEAGE;
        },
        enumerable: false,
        configurable: true
    });
    Engine.prototype.turnEngineOn = function () {
        this._engineStatus = true;
    };
    Engine.prototype.turnEngineOff = function () {
        this._engineStatus = false;
    };
    return Engine;
}());
exports.Engine = Engine;
