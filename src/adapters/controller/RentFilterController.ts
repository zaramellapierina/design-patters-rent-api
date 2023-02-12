import { ApartmentFilters } from "../../domain/entities/Apartment"
import { BuildingFilters } from "../../domain/entities/Building"
import { TypologyFilters } from "../../domain/entities/typologies/Typology"
import { RentFiltersQueryBuilder } from "../utils/queryBuilder/RentFiltersQueryBuilder"

export interface RentFilter {
    BuildingFilters: BuildingFilters,
    ApartmentsFilters: ApartmentFilters,
    TypologiesFilters: TypologyFilters
}

const RentFilterController = (req: any, res: any) => {
    const filters: RentFilter = req.body?.rentFilters;
    const filtersBuilder = RentFiltersQueryBuilder(filters);
    let dataFiltered = []

    if (filters)
        dataFiltered = filtersBuilder.
            addBuildingQuery().
            addApartmentQuery().
            getFilters()
    else
        dataFiltered = filtersBuilder.getFilters()

    res.send({
        status: 200,
        url: req.url,
        data: dataFiltered,
    })
}

export default RentFilterController;
