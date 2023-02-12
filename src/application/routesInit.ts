import ApartmentDetailsController from "../adapters/controller/ApartmentDetailsController";
import RentFilterController from "../adapters/controller/RentFilterController";
import { TypologieSimpleFactory } from "../domain/entities/typologies/factory/TypologySimpleFactory"

export const ApartmentDetailsInit = () => {
    const typologySimpleFactory = TypologieSimpleFactory();
    return ApartmentDetailsController(typologySimpleFactory);
}
