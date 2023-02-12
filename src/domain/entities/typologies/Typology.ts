import { TypologyTypes } from "./TypologyTypes"

export interface Typology {
    roomsCount: number,
    bathCount: number,
    image: string
}

export interface TypologyFilters {
    type: TypologyTypes,
    roomsCount: number,
    bathCount: number
}
