import { Typology } from "../Typology";
import { TypologieTypes } from "../TypologyTypes";

export interface TypologyFactory {
    createTypology(): Typology,
    getTypology(): TypologieTypes
}
