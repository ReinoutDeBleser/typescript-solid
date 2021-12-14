var MusicPlayer = /** @class */ (function () {
    function MusicPlayer(_musicLevel, _oldMusicLevel) {
        if (_musicLevel === void 0) { _musicLevel = 0; }
        if (_oldMusicLevel === void 0) { _oldMusicLevel = 50; }
        this._musicLevel = _musicLevel;
        this._oldMusicLevel = _oldMusicLevel;
    }
    Object.defineProperty(MusicPlayer.prototype, "musicLevel", {
        // getter for the setinterval.
        get: function () {
            return this._musicLevel;
        },
        //setter for the functionalities.
        set: function (value) {
            this._musicLevel = value;
            this._oldMusicLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    //on button for MP
    MusicPlayer.prototype.turnMusicOn = function () {
        this._musicLevel = this._oldMusicLevel;
    };
    //off button for MP
    MusicPlayer.prototype.turnMusicOff = function () {
        this._musicLevel = 0;
    };
    return MusicPlayer;
}());
