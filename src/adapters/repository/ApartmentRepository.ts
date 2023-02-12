import { Apartment } from "../../domain/entities/Apartment";
import { TypologySimple } from "../../domain/entities/typologies/factory/TypologySimpleFactory";
import { TypologyTypes as TypologyTypes } from "../../domain/entities/typologies/TypologyTypes";
import apartments from "./data/apartments.json"

export const getApartmentByCode = (typologySimpleFactory: TypologySimple, apartmentCode: string): Apartment => {
    const apartmentData = apartments.find(apto => apto.code === apartmentCode);

    if (apartmentData) {
        const { buildingCode, apartmentNumber: code, apartmentNumber, floor, meters, typologyType } = apartmentData;
        const typologyTypeApartment = typologySimpleFactory.create((typologyType as TypologyTypes));
        return {
            buildingCode,
            code: code.toString(),
            apartmentNumber,
            floor,
            meters,
            typology: typologyTypeApartment.createTypology(),
            typologyType: typologyType as unknown as TypologyTypes
        }
    }

    throw new Error("The apartment doesn\'t exist")
}
