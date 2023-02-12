import { Typology } from "../../Typology"
import { TypologyTypes } from "../../TypologyTypes"
import { TypologyFactory } from "../TypologyFactory"


export class TwoDOneBTypology implements TypologyFactory {
    createTypology(): Typology {
        return {
            roomsCount: 2,
            bathCount: 1,
            image: "assets/images/2D1B.png"
        }
    }

    getTypology(): TypologyTypes {
        return "2D1B"
    }
}