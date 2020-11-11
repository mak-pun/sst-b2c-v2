import { createSlice, PayloadAction, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit'

import type { AppThunk } from '../../app/store'
import type { City, Country } from '../../api/types'

import { Location } from '../../api'

interface LocationsState {
    cities: Array<City>;
    countries: Array<Country>;
    error: string | null;
    isLoading: boolean;
}

const initialState: LocationsState = {
    cities: [],
    countries: [],
    error: null,
    isLoading: false
}

const repoDetails = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        loadLocationsStart(state: LocationsState) {
            state.isLoading = true
        },
        loadLocationsSuccess(state: LocationsState, action: PayloadAction<{ cities: Array<City>, countries: Array<Country> }>) {
            const { cities, countries } = action.payload
            state.cities = cities
            state.countries = countries
            state.isLoading = false
            state.error = null
        },
        loadLocationsFailed(state: LocationsState, action: PayloadAction<string>) {
            state.cities = []
            state.countries = []
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const {
    loadLocationsStart,
    loadLocationsSuccess,
    loadLocationsFailed
} = repoDetails.actions

export default repoDetails.reducer

export const loadLocations = (): AppThunk => async dispatch => {
    try {
        dispatch(loadLocationsStart())
        const responses = await Promise.all([
            Location.fetchCities(),
            Location.fetchCountries()
        ])

        dispatch(loadLocationsSuccess({
            cities: responses[0].cities,
            countries: responses[1].countries
        }))

    } catch (err) {
        dispatch(loadLocationsFailed(err.toString()))
    }
}