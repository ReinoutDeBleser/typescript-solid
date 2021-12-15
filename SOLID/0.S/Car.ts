import {Engine} from './Engine'
import {MusicPlayer} from './MusicPlayer'

export class Car {
    private _miles : number = 0;
    private readonly _musicPlayer : MusicPlayer;
    private readonly _engine : Engine;
    private MAXIMUM_FUEL_CAPACITY: number;
    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this._musicPlayer = new MusicPlayer();
        this._engine = new Engine(MAXIMUM_FUEL_CAPACITY);
    }

    get musicPlayer(): MusicPlayer{
        return this._musicPlayer;
    }

    get engine(): Engine{
        return this._engine;
    }

    get miles(): number {
        return this._miles;
    }

    drive() {
        if(this.engine.engineStatus === false || this.engine.getFuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this.engine.consumeFuel();
        this._miles += this.engine.mileage;
    }
}
const musicToggleElement = <HTMLElement>document.querySelector('#music-toggle');
const musicSliderElement = <HTMLInputElement>document.querySelector('#music-slider');
const engineToggleElement = <HTMLInputElement>document.querySelector('#engine-toggle');
const addFuelForm = document.querySelector('#add-fuel-form');
const addFuelInput = <HTMLFormElement>document.querySelector('#add-fuel-input');
const fuelLevelElement = <HTMLElement>document.querySelector('#fuel-level');
const milesElement = <HTMLElement>document.querySelector('#miles-value');
const audioElement = <HTMLAudioElement>document.querySelector('#car-music');

let car = new Car(100);


musicToggleElement.addEventListener('click', () => {
    if(car.musicPlayer.musicLevel === 0) {
        car.musicPlayer.turnMusicOn();
        musicSliderElement.value = car.musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car.musicPlayer.turnMusicOff();
});

musicSliderElement.addEventListener('input', (event) => {
    let target = <HTMLFormElement>(event.target);

    car.musicPlayer.musicLevel = target.value;
    audioElement.volume = car. musicPlayer.musicLevel / 100;

    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.musicPlayer.musicLevel ? 'Turn music off' : 'Turn music on';
});

engineToggleElement.addEventListener('click', () => {
    if(car.engine.engineStatus) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnEngineOn();
});

addFuelForm.addEventListener('submit', (event) => {
    event.preventDefault();

    car.engine.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.engine.getFuel.toString();
});


setInterval(() => {
    car.drive();

    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = <string><unknown>(car.miles);
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.engine.getFuel.toString();

    if(car.musicPlayer.musicLevel === 0) {
        audioElement.pause();
    } else {
        audioElement.play();
    }

}, 1000);