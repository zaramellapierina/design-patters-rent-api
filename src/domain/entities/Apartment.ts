import { Typology } from "./typologies/Typology";
import { TypologyTypes } from "./typologies/TypologyTypes";

export interface Apartment {
    code: string,
    buildingCode: string,
    apartmentNumber: number,
    floor: number,
    meters: number,
    typologyType: TypologyTypes,
    typology?: Typology
}

export interface ApartmentFilters {
    apartmentNumber: number,
    typologyType: TypologyTypes
}
