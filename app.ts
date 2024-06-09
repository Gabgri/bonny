interface IStartup {
    name: string;
    areaOfInterest: string;
    description: string;
    product: string;
    riceviIncentivo(incentivo: IIncentivo): void;
}

interface IIncentivo {
    id: number;
    description: string;
    value: number;
    criteria: string;
    assegnaAStartup(startup: IStartup): void;
}

interface ICittadino {
    name: string;
    surname: string;
    age: number;
    sportsInterests: string;
    partecipaAttività(startup: IStartup): void
}

class Startup implements IStartup {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

}

class Incentivo implements IIncentivo {

}

class Cittadino implements ICittadino {

}