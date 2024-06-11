import { IStartup, IIncentivo, ICittadino } from "./interfaces"; 

export class Startup implements IStartup {
    name: string;
    areaOfInterest: string;
    description: string;
    products: string[];

    constructor(name:string, areaOfInterest:string, description:string, products:string[]) {
        this.name = name;
        this.areaOfInterest = areaOfInterest;
        this.description = description;
        this.products = products;
    }

    riceviIncentivo(incentivo: IIncentivo): void {
        console.log(`Congratulazioni! la tua startup "${this.name}" 
            ha ottenuto un ${incentivo.description} di ${incentivo.value}€, codice identificativo ${incentivo.id},
            per aiutarti a promuovere la tua attività in "${this.areaOfInterest}", "${this.description}".`)
    }
}

export class Incentivo implements IIncentivo {
    id: number;
    description: string;
    value: number; 
    criteria: string[]; 

    constructor(id:number, description:string, value:number, criteria:string[]) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.criteria = criteria; 
    }

    assegnaAStartup(startup: IStartup): void {
        console.log(`La startup "${startup.name}" ha ricevuto ${this.description} del valore di ${this.value}€, 
            numero identificativo "${this.id}", 
            grazie al suo impegno nell'ottenere: "${this.criteria}"`);
    }
}

export class Cittadino implements ICittadino {
    name: string;
    surname: string;
    age: number;
    sportsInterests: string[];

    constructor(name:string, surname:string, age:number, sportsInterests:string[]) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.sportsInterests = sportsInterests;
    }

    partecipaAttività(startup: IStartup): void {
        console.log(`Congratulazioni ${this.name} ${this.surname}! grazie al tuo risparmio su Bonny puoi partecipare alle attività proposte da 
            ${startup.name} in ${startup.description} oppure scegliere, in base alla tua età (${this.age}) e 
            ai tuoi interessi (${this.sportsInterests}), di investire in prodotti per il controllo della
            tua solute tra quelli proposti dall'azienda:"${startup.products}"`)
    }
}