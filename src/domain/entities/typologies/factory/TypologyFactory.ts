import { Typology } from "../Typology";
import { TypologyTypes } from "../TypologyTypes";

export interface TypologyFactory {
    createTypology(): Typology,
    getTypology(): TypologyTypes
}
