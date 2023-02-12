import { Typology } from "../../Typology"
import { TypologyTypes } from "../../TypologyTypes"
import { TypologyFactory } from "../TypologyFactory"

export class ButterflyTypology implements TypologyFactory {
    createTypology(): Typology {
        return {
            roomsCount: 2,
            bathCount: 2,
            image: "assets/images/butterfly-typology.jpeg"
        }
    }

    getTypology(): TypologyTypes {
        return "Butterfly"
    }
}