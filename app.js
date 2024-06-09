"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Startup = /** @class */ (function () {
    function Startup(name, areaOfInterest, description, product) {
        this.name = name;
        this.areaOfInterest = areaOfInterest;
        this.description = description;
        this.product = product;
    }
    Startup.prototype.riceviIncentivo = function () {
        console.log("Hai ricevuto l'incentivo");
    };
    return Startup;
}());
var Incentivo = /** @class */ (function () {
    function Incentivo(incentivo) {
        this.id = incentivo.id;
        this.description = incentivo.description;
        this.value = incentivo.value;
        this.criteria = incentivo.criteria;
    }
    Incentivo.prototype.assegnaAStartup = function (startup) {
        console.log("Assegna l'incentivo");
    };
    return Incentivo;
}());
var Cittadino = /** @class */ (function () {
    function Cittadino(cittadino) {
        this.name = cittadino.name;
        this.surname = cittadino.surname;
        this.age = cittadino.age;
        this.sportsInterests = cittadino.sportsInterests;
    }
    Cittadino.prototype.partecipaAttività = function (startup) {
        console.log("Partecipa all'attività");
    };
    return Cittadino;
}());
var culturaSport = new Startup("La Cultura dello Sport", "App per il fitness", "Azienda leader nel settore software dello sport", "App per acquistare massa muscolare");
culturaSport.riceviIncentivo();
