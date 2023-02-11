import { TypologieTypes } from "./typologies/TypologyTypes";

export interface Building {
    code: string,
    name: string,
    address: string,
    city: string,
    state: string,
    country: string,
    floorCount: number,
    typologiesType: TypologieTypes
}