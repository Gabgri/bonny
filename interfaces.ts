export interface IStartup {
    name: string;
    areaOfInterest: string;
    description: string;
    product: string;
    riceviIncentivo(incentivo: IIncentivo): void;
}

export interface IIncentivo {
    id: number;
    description: string;
    value: number;
    criteria: string;
    assegnaAStartup(startup: IStartup): void;
}

export interface ICittadino {
    name: string;
    surname: string;
    age: number;
    sportsInterests: string;
    partecipaAttività(startup: IStartup): void
}
