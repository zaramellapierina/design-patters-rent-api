import { Typology } from "./typologies/Typology";
import { TypologieTypes } from "./typologies/TypologyTypes";

export interface Apartment {
    code: string,
    apartmentNumber: number,
    floor: number,
    meters: number,
    typologyType: TypologieTypes,
    typology: Typology
}