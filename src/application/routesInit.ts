import ApartmentDetailsController from "../adapters/controller/ApartmentDetailsController";
import { TypologieSimpleFactory } from "../domain/entities/typologies/factory/TypologySimpleFactory"

export const ApartmentDetailsInit = () => {
    const typologySimpleFactory = TypologieSimpleFactory();
    return ApartmentDetailsController(typologySimpleFactory);
}