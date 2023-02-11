import { TypologySimple } from "../../domain/entities/typologies/factory/TypologySimpleFactory";
import { getApartmentByCode } from "../repository/ApartmentRepository";
import { sanitize } from "../utils/Security.utils";

const ApartmentDetailsController = (typologySimpleFactory: TypologySimple) =>
    async (req: any, res: any) => {
        try {
            const apartmentCode = sanitize(req.query.apartmentCode)
            const apartment = getApartmentByCode(typologySimpleFactory, apartmentCode);

            res.send({
                status: 200,
                url: req.url,
                data: apartment,
            })
        } catch (e: any) {
            res.send({
                status: 400,
                url: req.url,
                data: "Error: " + e.message,
            })
        }
    }

export default ApartmentDetailsController;
