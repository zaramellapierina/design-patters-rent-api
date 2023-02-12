import { getPriority } from "os";
import { Apartment, ApartmentFilters } from "../../../domain/entities/Apartment";
import { Building, BuildingFilters } from "../../../domain/entities/Building";
import { TypologyFilters } from "../../../domain/entities/typologies/Typology";
import { RentFilter } from "../../controller/RentFilterController";
import apartments from "../../repository/data/apartments.json";
import building from "../../repository/data/building.json";
import { castApartments } from "../cast.utils";

export const RentFiltersQueryBuilder = (filters: RentFilter) => {
    //We can Adapt the search data to data table
    let buildingData: Building[] = building;
    let apartmentData: Apartment[] = castApartments(apartments);

    const addBuildingQuery = () => {
        const buildingFilters = filters.BuildingFilters;
        if (buildingFilters)
            Object.keys(buildingFilters).forEach(field => {
                buildingData = buildingData.filter(record => {
                    return record[field as keyof Building] === buildingFilters[field as keyof BuildingFilters]
                });
            });
        return builder;
    }

    const addApartmentQuery = () => {
        const apartmentFilters = filters.ApartmentsFilters
        console.log(apartmentFilters)
        if (apartmentFilters)
            Object.keys(apartmentFilters).forEach(field => {
                apartmentData = apartmentData.filter(record => {
                    console.log(record, field)
                    return record[field as keyof Apartment] === apartmentFilters[field as keyof ApartmentFilters];
                })
            })
        if (!filters.BuildingFilters && !apartmentFilters)
            apartmentData = []

        return builder;
    }

    //TODO
    const addTypologyQuery = (filters: TypologyFilters) => {
        return filters;
    }

    /* We only include de building that have apartments */
    const getFilters = (): Building[] => {
        const result: Building[] = []
        buildingData.forEach(building => {
            const buildingApartments = apartmentData.filter(
                apartment => apartment.buildingCode === building.code)

            if (buildingApartments.length > 0) {
                building.apartments = buildingApartments;
                result.push(building)
            }
        })
        return result;
    }

    const builder = {
        addBuildingQuery,
        addApartmentQuery,
        addTypologyQuery,
        getFilters
    }

    return builder;
}
