import { Apartment } from "./Apartment";
import { TypologyTypes } from "./typologies/TypologyTypes";

export interface Building {
    code: string,
    name: string,
    address: string,
    city: string,
    state: string,
    country: string,
    floorCount: number,
    apartments?: Apartment[]
    /* typologiesType: TypologieTypes */
}

export interface BuildingFilters {
    name: string,
    city: string,
    state: string,
    country: string,
}