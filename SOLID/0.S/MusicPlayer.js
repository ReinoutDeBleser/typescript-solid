"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicPlayer = void 0;
require("./Car");
var MusicPlayer = /** @class */ (function () {
    function MusicPlayer() {
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
    }
    Object.defineProperty(MusicPlayer.prototype, "musicLevel", {
        get: function () {
            return this._musicLevel;
        },
        set: function (value) {
            this._musicLevel = value;
            this._oldMusicLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    MusicPlayer.prototype.turnMusicOn = function () {
        this._musicLevel = this._oldMusicLevel;
    };
    MusicPlayer.prototype.turnMusicOff = function () {
        this._musicLevel = 0;
    };
    return MusicPlayer;
}());
exports.MusicPlayer = MusicPlayer;
