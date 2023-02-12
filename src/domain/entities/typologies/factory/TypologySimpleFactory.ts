import { TypologyTypes } from "../TypologyTypes";
import { ButterflyTypology } from "./impl/ButterflyTipology";
import { TwoDOneBTypology } from "./impl/TwoDOneBTypology";
import { TypologyFactory } from "./TypologyFactory";

export interface TypologySimple {
    create: (typologyType: TypologyTypes) => TypologyFactory
}
export const TypologieSimpleFactory = (): TypologySimple => {
    const create = (typologyTypeSelected: TypologyTypes): TypologyFactory => {
        switch (typologyTypeSelected) {
            case "Butterfly": return new ButterflyTypology();
            case "2D1B": return new TwoDOneBTypology();
            default:
                throw new Error('Wrong typology type.');
        }
    }

    return {
        create
    }
}
