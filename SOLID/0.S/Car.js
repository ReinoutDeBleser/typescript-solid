"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Engine_1 = require("./Engine");
var MusicPlayer_1 = require("./MusicPlayer");
var Car = /** @class */ (function () {
    function Car(MAXIMUM_FUEL_CAPACITY) {
        this._miles = 0;
        this._musicPlayer = new MusicPlayer_1.MusicPlayer();
        this._engine = new Engine_1.Engine(MAXIMUM_FUEL_CAPACITY);
    }
    Object.defineProperty(Car.prototype, "musicPlayer", {
        get: function () {
            return this._musicPlayer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "miles", {
        get: function () {
            return this._miles;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.drive = function () {
        if (this.engine.engineStatus === false || this.engine.getFuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this.engine.consumeFuel();
        this._miles += this.engine.mileage;
    };
    return Car;
}());
exports.Car = Car;
var musicToggleElement = document.querySelector('#music-toggle');
var musicSliderElement = document.querySelector('#music-slider');
var engineToggleElement = document.querySelector('#engine-toggle');
var addFuelForm = document.querySelector('#add-fuel-form');
var addFuelInput = document.querySelector('#add-fuel-input');
var fuelLevelElement = document.querySelector('#fuel-level');
var milesElement = document.querySelector('#miles-value');
var audioElement = document.querySelector('#car-music');
var car = new Car(100);
musicToggleElement.addEventListener('click', function () {
    if (car.musicPlayer.musicLevel === 0) {
        car.musicPlayer.turnMusicOn();
        musicSliderElement.value = car.musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car.musicPlayer.turnMusicOff();
});
musicSliderElement.addEventListener('input', function (event) {
    var target = (event.target);
    car.musicPlayer.musicLevel = target.value;
    audioElement.volume = car.musicPlayer.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.musicPlayer.musicLevel ? 'Turn music off' : 'Turn music on';
});
engineToggleElement.addEventListener('click', function () {
    if (car.engine.engineStatus) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnEngineOn();
});
addFuelForm.addEventListener('submit', function (event) {
    event.preventDefault();
    car.engine.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.engine.getFuel.toString();
});
setInterval(function () {
    car.drive();
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = (car.miles);
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.engine.getFuel.toString();
    if (car.musicPlayer.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
