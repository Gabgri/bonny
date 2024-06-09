import { IStartup, IIncentivo, ICittadino } from "./interfaces"; 

/*
Per usufruire del servizio basta compilare il questionario 
per poter individuare la posizione fiscale e i relativi bonus a cui si potrebbe avere diritto. 
Alcune delle prestazioni analizzate sono: ISEE, Bonus Gas, Bonus Elettrico, Bonus Idrico. 

Inserendo il codice fiscale e i dati richiesti è possibile scoprire se si ha diritto a qualche bonus o agevolazione fiscale. 
Sono anche disponibili servizi quali richiesta di ISEE e 730. 

Nella pagina dedicata si trova un elenco di associazioni sportive convenzionate 
per gli utenti che vogliono investire il risparmio generato su Bonny 
nel mantenimento della propria salute e benessere attraverso lo sport.
*/

const sportsInterests = ["Ciclismo", "Nuoto", "Calcio", "Pallacanestro", "Tennis", "Basket", "Pallavolo"];
const companies = [];


class Startup implements IStartup { // inclusi i dettagli sui prodotti/servizi offerti e la ricezione di incentivi statali.
    name: string;
    areaOfInterest: string;
    description: string;
    product: string;

    constructor(name:string, areaOfInterest:string, description:string, product:string) {
        this.name = name;
        this.areaOfInterest = areaOfInterest;
        this.description = description;
        this.product = product;
    }

    riceviIncentivo(incentivo: IIncentivo): void {
        console.log("Hai ricevuto l'incentivo");
    }

}

class Incentivo implements IIncentivo {
    id: number;
    description: string;
    value: number; // 1000 - 3000 - 6000
    criteria: string; // ISEE <=20.000 <=15.000 <= 10.000

    constructor(id:number, description:string, value:number, criteria:string) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.criteria =criteria; 
    }

    assegnaAStartup(startup: IStartup): void {
        console.log("Assegna l'incentivo");
    }
}

class Cittadino implements ICittadino {
    name: string;
    surname: string;
    age: number;
    sportsInterests: string;

    constructor(name:string, surname:string, age:number, sportsInterests:string) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.sportsInterests = sportsInterests;
    }

    partecipaAttività(startup: IStartup): void {
        console.log("Partecipa all'attività")
    }
}

let culturaSport = new Startup("La Cultura dello Sport", "App per il fitness", "Azienda leader nel settore software dello sport", "App");
let wearableFitness = new Startup("Wearable Fitness", "Tecnologie wearable", "Indossabili per misurare i tuoi valori mentre fai sport", "Smartwatch");
let nuoveSportech = new Startup("Innovation SportLab","Attrezzature sportive innovative","Nuove attrezzature per allenarsi","Attrezzature");

let Marco = new Cittadino("Marco", "Rossi", 34, "Ciclismo");
let Sofia = new Cittadino("Sofia", "Verdi", 27, "Nuoto");
let Matteo = new Cittadino("Matteo", "Bianchi", 29, "Calcio");
let Anna = new Cittadino("Anna", "Neri", 26, "Pallacanestro");