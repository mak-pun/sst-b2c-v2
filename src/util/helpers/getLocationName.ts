import { City, Country } from "../../api/types"

const getCityName = (cities: Array<City>, countries: Array<Country>, cityId: string) => {

    const city = cities.find(city => city.id === cityId)

    if (city) {
        const country = countries.find(country => country.id === city.country_id)
        return city.name + (country ? ', ' + country.name: '')
    }

    return cityId
}

export default getCityName