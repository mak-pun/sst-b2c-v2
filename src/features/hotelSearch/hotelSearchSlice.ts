import { createSlice, PayloadAction, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit'
import moment from 'moment'

import type { AppThunk } from '../../app/store'
import type { Criteria, HotelResultSummary } from '../../api/types'
import type { SearchResponsePayload } from '../../api/hotelSearch'

import { HotelSearch } from '../../api'

interface HotelSearchResultsState {
  results: Array<HotelResultSummary>
  criteria: Criteria;
  searchId: string | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: HotelSearchResultsState = {
  results: [],
  criteria: {
    hotel_ids: [],
    // city: undefined,
    from: moment().add(1, 'week').format('YYYY-MM-DD'),
    to: moment().add(1, 'day').add(3, 'week').format('YYYY-MM-DD'),
    customer_country: 'country::thailand',
    instant_confirm_only: true,
    rooms: [{ adults: 1, children: [12] }]
  },
  searchId: null,
  error: null,
  isLoading: false
}

const repoDetails = createSlice({
  name: 'hotelSearchResults',
  initialState,
  reducers: {
    searchHotelsStart(state: HotelSearchResultsState, action: PayloadAction<Criteria>) {
      state.criteria = action.payload
      state.isLoading = true
    },
    searchHotelsSuccess(state: HotelSearchResultsState, action: PayloadAction<SearchResponsePayload>) {
      const { hotel_search_result, search_id } = action.payload
      state.results = hotel_search_result.hotel_list.filter(result=>{
        return result.rejected_reasons.length === 0 && result.images.length > 0
      })
      // state.criteria = hotel_search_result.criteria
      state.searchId = search_id
      state.isLoading = false
      state.error = null
    },
    searchHotelsFailed(state: HotelSearchResultsState, action: PayloadAction<string>) {
      state.results = []
      // state.criteria = {
      //   city: undefined,
      //   from: moment().add(1, 'day').formats('YYYY-MM-DD'),
      //   to: moment().add(1, 'day').add(1, 'week').format('YYYY-MM-DD'),
      //   customer_country: 'country::thailand',
      //   instant_confirm_only: true,
      //   rooms: [{ adults: 1, children: [12] }]
      // }
      state.searchId = null
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const {
  searchHotelsStart,
  searchHotelsSuccess,
  searchHotelsFailed
} = repoDetails.actions

export default repoDetails.reducer

export const searchHotels = (
  criteria: Criteria
): AppThunk => async dispatch => {
  try {
    console.log('searchHotels', criteria)
    dispatch(searchHotelsStart(criteria))
    const res = await HotelSearch.search(criteria)
    dispatch(searchHotelsSuccess(res))
  } catch (err) {
    dispatch(searchHotelsFailed(err.toString()))
  }
}