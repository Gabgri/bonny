"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cittadino = exports.Incentivo = exports.Startup = void 0;
var Startup = /** @class */ (function () {
    function Startup(name, areaOfInterest, description, products) {
        this.name = name;
        this.areaOfInterest = areaOfInterest;
        this.description = description;
        this.products = products;
    }
    Startup.prototype.riceviIncentivo = function (incentivo) {
        console.log("Congratulazioni! la tua startup \"".concat(this.name, "\" \n            ha ottenuto un ").concat(incentivo.description, " di ").concat(incentivo.value, "\u20AC, codice identificativo ").concat(incentivo.id, ",\n            per aiutarti a promuovere la tua attivit\u00E0 in \"").concat(this.areaOfInterest, "\", \"").concat(this.description, "\"."));
    };
    return Startup;
}());
exports.Startup = Startup;
var Incentivo = /** @class */ (function () {
    function Incentivo(id, description, value, criteria) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.criteria = criteria;
    }
    Incentivo.prototype.assegnaAStartup = function (startup) {
        console.log("La startup \"".concat(startup.name, "\" ha ricevuto ").concat(this.description, " del valore di ").concat(this.value, "\u20AC, \n            numero identificativo \"").concat(this.id, "\", \n            grazie al suo impegno nell'ottenere: \"").concat(this.criteria, "\""));
    };
    return Incentivo;
}());
exports.Incentivo = Incentivo;
var Cittadino = /** @class */ (function () {
    function Cittadino(name, surname, age, sportsInterests) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.sportsInterests = sportsInterests;
    }
    Cittadino.prototype.partecipaAttività = function (startup) {
        console.log("Congratulazioni ".concat(this.name, " ").concat(this.surname, "! grazie al tuo risparmio su Bonny puoi partecipare alle attivit\u00E0 proposte da \n            ").concat(startup.name, " in ").concat(startup.description, " oppure scegliere, in base alla tua et\u00E0 (").concat(this.age, ") e \n            ai tuoi interessi (").concat(this.sportsInterests, "), di investire in prodotti per il controllo della\n            tua solute tra quelli proposti dall'azienda:\"").concat(startup.products, "\""));
    };
    return Cittadino;
}());
exports.Cittadino = Cittadino;
