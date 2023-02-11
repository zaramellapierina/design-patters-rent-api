import { TypologieTypes } from "../TypologyTypes";
import { ButterflyTypology } from "./impl/ButterflyTipology";
import { TwoDOneBTypology } from "./impl/TwoDOneBTypology";
import { TypologyFactory } from "./TypologyFactory";

export interface TypologySimple {
    create: (typologyType: TypologieTypes) => TypologyFactory
}
export const TypologieSimpleFactory = (): TypologySimple => {
    const create = (typologyTypeSelected: TypologieTypes): TypologyFactory => {
        switch (typologyTypeSelected) {
            case TypologieTypes.Butterfly: return new ButterflyTypology();
            case TypologieTypes["2D1B"]: return new TwoDOneBTypology();
            default:
                throw new Error('Wrong typology type.');
        }
    }

    return {
        create
    }
}
