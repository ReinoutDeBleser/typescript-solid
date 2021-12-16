var Restaurant1 = function() {
    function Restaurant(name, preparation) {
        this._name = name;
        this._preparation = preparation;
    }
    Restaurant.prototype.Cook = function(item) {
        this._preparation.on();
        this._preparation.cook(item);
        this._preparation.off();
    };
    return Restaurant;
}();
var Oven1 = function() {
    function Oven() {
    }
    Oven.prototype.on = function() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    Oven.prototype.off = function() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    };
    Oven.prototype.cook = function(item) {
        if (this._isOn) {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        } else {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    };
    return Oven;
}();
var Stove1 = function() {
    function Stove() {
    }
    Stove.prototype.on = function() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE STOVE IS ON!</p>";
        }, 1000);
        console.log("THE STOVE IS ON!"); //insert fart humor here
        this._isOn = true;
    };
    Stove.prototype.off = function() {
        setTimeout(function() {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE STOVE IS OFF!</p><hr>";
        }, 3000);
        console.log("THE STOVE IS OFF!"); //insert fart humor here
        this._isOn = false;
    };
    Stove.prototype.cook = function(item) {
        if (this._isOn) {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now preparing " + item + "!");
        } else {
            setTimeout(function() {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no heat!"); //insert fart humor here
        }
    };
    return Stove;
}();
var creperie = new Restaurant1("Creperie", new Stove1());
creperie.Cook("crepes"); //
 // let bakery = new Restaurant("Bakery", new Oven());
 // bakery.Cook("cookies");
 //Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
 /*
let bakery = new Restaurant("Bakery", new Oven));
bakery.Cook("cookies");


 */ 

//# sourceMappingURL=index.42b352ce.js.map
