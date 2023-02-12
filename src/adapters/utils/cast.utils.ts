import { Apartment } from "../../domain/entities/Apartment";
import { TypologyTypes } from "../../domain/entities/typologies/TypologyTypes";

export const castApartments = (apartments: any[]): Apartment[] => {
    return apartments.map(({ buildingCode, code,
        apartmentNumber,
        floor,
        meters,
        typologyType: stringTypologyType }) => ({
            buildingCode,
            code,
            apartmentNumber,
            floor,
            meters,
            typologyType: stringTypologyType as TypologyTypes
        }))
}