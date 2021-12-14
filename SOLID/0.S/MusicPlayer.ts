class MusicPlayer {
    private _musicLevel : number;
    private _oldMusicLevel : number;
    constructor(musicLevel : number = 0, oldMusicLevel: number = 50) {
        this._musicLevel = musicLevel;
        this._oldMusicLevel = oldMusicLevel;
    }
    // getter for the setinterval.
    get musicLevel(): number { // MusicPlayer
        return this._musicLevel;
    }
    //setter for the functionalities.
    set musicLevel(value: number) { // MusicPlayer
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }
    //on button for MP
    turnMusicOn() { // MusicPlayer
        this._musicLevel = this._oldMusicLevel;
    }
    //off button for MP
    turnMusicOff() {
        this._musicLevel = 0;
    }
}