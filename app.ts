import { Startup, Incentivo, Cittadino } from "./classes";

const wearableFitness = new Startup("Wearable Fitness", "Wearable", "Tecnologie per misurare i tuoi valori mentre fai sport",["Smartwatch", "Anelli tech"]);
const innovationSportlab = new Startup("Innovation SportLab","Attrezzature","Nuove attrezzature innovative per l'allenamento",["Panche", " Manubri", " Tapirulan", " Cyclette"]);
const tennisWorld = new Startup("Tennis World", "Tennis", "Articoli a 360 gradi per il tennis",["Racchette", " Palline", " Cappellini", " Reti"]);

const incentivoMax = new Incentivo(8111, "incentivo massimo", 8000, ["emissioni zero", " prodotti ecosostenibili", " prodotti costruiti in italia"]);
const incentivoMid = new Incentivo(6011, "incentivo medio", 6000, ["prodotti ecosostenibili", " prodotti costruiti in italia"]);
const incentivoMin = new Incentivo(4001, "incentivo minimo", 4000, ["prodotti ecosostenibili"])

let marco = new Cittadino("Marco", "Rossi", 34, ["Tennis", " Ping Pong"]);
let sofia = new Cittadino("Sofia", "Verdi", 27, ["Nuoto", " Vela"]); 
let matteo = new Cittadino("Matteo", "Bianchi", 29, ["Calcio", " Rugby"]);

wearableFitness.riceviIncentivo(incentivoMin);
incentivoMin.assegnaAStartup(wearableFitness);
sofia.partecipaAttività(wearableFitness);

innovationSportlab.riceviIncentivo(incentivoMax);
incentivoMax.assegnaAStartup(innovationSportlab);
matteo.partecipaAttività(innovationSportlab);