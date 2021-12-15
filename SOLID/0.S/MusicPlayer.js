var MusicPlayer = /** @class */ (function () {
    function MusicPlayer(musicLevel, oldMusicLevel) {
        if (musicLevel === void 0) { musicLevel = 0; }
        if (oldMusicLevel === void 0) { oldMusicLevel = 50; }
        this._musicLevel = musicLevel;
        this._oldMusicLevel = oldMusicLevel;
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
