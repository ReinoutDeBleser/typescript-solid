"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
require("./Engine");
require("./FuelLevel");
require("./MusicPlayer");
var Car = /** @class */ (function () {
    // depending on the generated object, a new car can have a higher max fuel cap.
    function Car(engine, musicPlayer, fuelLevel) {
        //it is convention to start property names in TypeScript with an underscore.
        // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
        this._miles = 0; // car drives miles.
        this._engine = engine;
        this._musicPlayer = musicPlayer;
        this._fuelLevel = fuelLevel;
    }
    Object.defineProperty(Car.prototype, "miles", {
        // the number of miles driven by the car
        get: function () {
            return this._miles;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.drive = function () {
        //what I am doing here is a good principle called "failing early"
        // If you have some conditions you need to check, that will exclude most of the code in your function check that first
        // This prevents your "happy path" of code to be deeply indented.
        // if the engine is off or the fuel is empty.
        if (engine.engineStatus === false || fuelLevel.fuel <= 0) { //make this an engine Method.
            return;
        }
        fuelLevel.fuel -= 1;
        this._miles += engine.FuelMileage;
    };
    return Car;
}());
exports.Car = Car;
// When you see <cast>variable this is a "cast" of a variable, explicitly telling the code what the type of this variable will be.
// This is sometimes needed when a default JS function does not return a precise enough Type.
// I need to cast this to HtmlElement because the default Element return type is not specific to the HTML context (because some versions of JS can also be used in the backend, see node.js)
// This makes it not having some properties like .innerText. Test it out yourself by removing the <HTMLElement>//constants probably need to stay but also be usable in the classes?
var milesElement = document.querySelector('#miles-value'); // where total miles driven is shown.
var audioElement = document.querySelector('#car-music'); // this goes to the music wv file, not part of the player?
//music const & listeners
var musicToggleElement = document.querySelector('#music-toggle'); // MusicPlayer
var musicSliderElement = document.querySelector('#music-slider'); // MusicPlayer
//Fuel const & listeners
var addFuelForm = document.querySelector('#add-fuel-form'); // Gas Pump on submit amount is added.
var addFuelInput = document.querySelector('#add-fuel-input'); // Fuel - input, the amoubt the pump adds. ?
var fuelLevelElement = document.querySelector('#fuel-level'); // where current fuel level is shown.
//engine const & listeners
var engineToggleElement = document.querySelector('#engine-toggle'); //Engine
var fuelLevel = new FuelLevel(0);
var musicPlayer = new MusicPlayer(0, 50);
var engine = new Engine(false);
var car = new Car(engine, musicPlayer, fuelLevel); // car has max fuel cap of 100 using this constructor.
//I use input instead of change, because then the value changes when I move the mouse, not only on release
addFuelForm.addEventListener('submit', function (event) {
    event.preventDefault();
    fuelLevel.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = fuelLevel.fuel.toString();
});
engineToggleElement.addEventListener('click', function () {
    if (engine.engineStatus) {
        engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    engine.turnEngineOn();
});
musicToggleElement.addEventListener('click', function () {
    if (musicPlayer.musicLevel === 0) {
        musicPlayer.turnMusicOn();
        musicSliderElement.value = musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    musicPlayer.turnMusicOff();
});
musicSliderElement.addEventListener('input', function (event) {
    var target = (event.target);
    musicPlayer.musicLevel = target.value;
    audioElement.volume = musicPlayer.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = musicPlayer.musicLevel ? 'Turn music off' : 'Turn music on';
});
addFuelForm.addEventListener('submit', function (event) {
    event.preventDefault();
    fuelLevel.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = fuelLevel.fuel.toString();
});
setInterval(function () {
    car.drive();
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = (car.miles);
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = fuelLevel.fuel.toString();
    // make this a MusicPlayer-method?
    if (musicPlayer.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
