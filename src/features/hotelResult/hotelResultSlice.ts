import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'

import type { AppThunk } from '../../app/store'
import type { HotelResult, RoomClassResult, Sample } from '../../api/types'
import type { FetchResponsePayload } from '../../api/hotelSearch'

import { HotelSearch } from '../../api'

import { helpers } from '../../util'
import { formatBedCombinationLabel } from '../../helper/format'

export interface Selection {
  isLoading: boolean;
  roomNo: string;
  roomClassId: string;
  isRoomClassSelected: boolean;
  sampleId: string;
  isSampleSelected: boolean;
  occupancySolutionId: string;
  selectedOptions: Array<{
    selectedOptionId: string;
    amount: number;
    min: number;
    max: number;
  }>,
  selectedBedCombinations: Array<string>
}

interface HotelResultState {
  result?: HotelResult;
  selections: Array<Selection>;
  error: string | null;
  isLoading: boolean;
}

const initialState: HotelResultState = {
  selections: [],
  result: undefined,
  error: null,
  isLoading: false
}


const prepareResult = (result: HotelResult) => {
  result.room = result.room.map(room => {
    room.room_classes = room.room_classes.map(roomClass => {
      roomClass.samples = roomClass.samples.map(prepareSample)
      return roomClass
    })
    return room
  })

  return result
}

const prepareSample = (sample: Sample) => {
  sample.available_options = _.sortBy(sample.available_options, availableOption => parseFloat(availableOption.amount_per_option.amount))
  return sample
}
const prepareSelections = (result: HotelResult): Array<Selection> => {
  const selections: Array<Selection> = []

  result.room.forEach(room => {
    const roomNo = room.index
    room.room_classes.forEach(roomClass => {
      const roomClassId = roomClass.room_class_id
      const isRoomClassSelected = false

      const cheapestSample = _.minBy(roomClass.samples, sample => parseFloat(sample.total_amount.amount))

      const selectedBedCombinations = roomClass.rooms.map(room => formatBedCombinationLabel(room.bed_combinations[0]))
      roomClass.samples.forEach(sample => {
        const sampleId = sample.sample_id
        const isSampleSelected = cheapestSample?.sample_id === sampleId
        const occupancySolutionId = sample.selected_occupancy_solution_id
        const selectedOptions = getSelectedOptions(sample)


        selections.push({
          isLoading: false,
          roomNo,
          roomClassId,
          isRoomClassSelected,
          sampleId,
          isSampleSelected,
          occupancySolutionId,
          selectedOptions,
          selectedBedCombinations
        })
      })
    })
  })
  // console.log('preparedSelections', selections)
  return selections
}

const getSelectedOptions = (sample: Sample) => {
  const selectedOptions = sample.available_options.map(availableOption => {
    return {
      selectedOptionId: availableOption.selected_option_id,
      amount: availableOption.amount,
      min: availableOption.min,
      max: availableOption.max,
    }
  })
  return selectedOptions
}


const repoDetails = createSlice({
  name: 'hotelResult',
  initialState,
  reducers: {
    getHotelResultStart(state: HotelResultState) {
      state.isLoading = true
    },
    getHotelResultSuccess(state: HotelResultState, action: PayloadAction<FetchResponsePayload>) {
      const { hotel: result } = action.payload

      state.result = prepareResult(result)
      state.selections = prepareSelections(result)
      state.isLoading = false
      state.error = null
    },
    getHotelResultFailed(state: HotelResultState, action: PayloadAction<string>) {
      state.result = undefined
      state.isLoading = false
      state.error = action.payload
    },
    recalculateSampleStart(state: HotelResultState, action: PayloadAction<Selection>) {
      const { selections: selectionHaystack } = state
      const selectionNeedle = action.payload

      const selection = helpers.findSelection(selectionHaystack, selectionNeedle)

      // console.log('matched selection')
      selection.isLoading = true

    },
    recalculateSampleSuccess(state: HotelResultState, action: PayloadAction<{ selection: Selection, sample: Sample }>) {
      const { result, selections: selectionHaystack } = state
      const { selection, sample: updatedSample } = action.payload

      const preparedSample = prepareSample(updatedSample)

      const room = result?.room.find(room => room.index === selection.roomNo)
      const roomClass = room?.room_classes.find(roomClass => roomClass.room_class_id === selection.roomClassId) as RoomClassResult

      roomClass.samples = roomClass?.samples.map(sample => {
        if (sample.sample_id === selection.sampleId) {
          // console.log('sample 000' , preparedSample.available_options)
          // Update sample and selection
          const matchedSelection = helpers.findSelection(selectionHaystack, selection)
          const selectedOptions = getSelectedOptions(preparedSample)
          // console.log('sample 001' , selectedOptions)
          matchedSelection.selectedOptions = selectedOptions
          matchedSelection.occupancySolutionId = preparedSample.selected_occupancy_solution_id
          // console.log('final', matchedSelection.selectedOptions)
          matchedSelection.isLoading = false
          return preparedSample
        } else {
          return sample
        }
      }) as Array<Sample>


    },
    recalculateSampleFailed(state: HotelResultState, action: PayloadAction<{ selection: Selection, error: string }>) {
      const { selections: selectionHaystack } = state
      const { selection: selectionNeedle, error } = action.payload

      const selection = helpers.findSelection(selectionHaystack, selectionNeedle)

      selection.isLoading = false
      state.error = error
    },
    selectSample(state: HotelResultState, action: PayloadAction<{ roomNo: string, roomClassId: string, sampleId: string }>) {
      const { selections } = state
      const { roomNo, roomClassId, sampleId } = action.payload
      const matchedSample = helpers.findSelection(selections, { roomNo, roomClassId, sampleId })

      selections.forEach(selection => {
        if (selection.roomNo === roomNo && selection.roomClassId === roomClassId) {
          selection.isSampleSelected = false
        }
      })

      matchedSample.isSampleSelected = true
    },
    selectBedCombination(state: HotelResultState, action: PayloadAction<{ selection: Selection; index: number, bedCombination: string; }>) {
      const { selections: selectionHaystack } = state
      const { selection: selectionNeedle, index, bedCombination } = action.payload
      const selection = helpers.findSelection(selectionHaystack, selectionNeedle)
      selection.selectedBedCombinations[index] = bedCombination
    },
    selectRoomClass(state: HotelResultState, action: PayloadAction<Selection>) {
      const { selections: selectionHaystack } = state
      const selectionNeedle = { ...action.payload }

      console.log('selectRoomClass', selectRoomClass)
      selectionHaystack.forEach(selection => {
        if (selection.roomNo === selectionNeedle.roomNo) {
          if (selection.roomClassId === selectionNeedle.roomClassId) {
            selection.isRoomClassSelected = true
          } else {
            selection.isRoomClassSelected = false
          }
        }
      })

      console.log('selectionHaystack', selectionHaystack)


    },
    reset(state: HotelResultState) {
      state.selections = []
      state.result = undefined
      state.error = null;
      state.isLoading = false
    }
  }
})

export const {
  getHotelResultStart,
  getHotelResultSuccess,
  getHotelResultFailed,
  recalculateSampleStart,
  recalculateSampleSuccess,
  recalculateSampleFailed,
  selectSample,
  selectBedCombination,
  selectRoomClass,
  reset
} = repoDetails.actions

export default repoDetails.reducer

export const getHotelResult = (
  searchId: string,
  hotelId: string
): AppThunk => async dispatch => {
  try {
    dispatch(getHotelResultStart())
    const res = await HotelSearch.fetch(searchId, hotelId)
    dispatch(getHotelResultSuccess(res))
  } catch (err) {
    dispatch(getHotelResultFailed(err.toString()))
  }
}

export const recalculateSample = (
  searchId: string,
  hotelId: string,
  selection: Selection
): AppThunk => async dispatch => {
  try {
    const { roomNo, roomClassId, sampleId, occupancySolutionId, selectedOptions } = selection
    dispatch(recalculateSampleStart(selection))
    const res = await HotelSearch.recalculate(
      searchId,
      hotelId,
      roomNo,
      roomClassId,
      sampleId,
      occupancySolutionId,
      selectedOptions
    )

    // console.log('res', res)
    const sample = res.data.samples[0]

    dispatch(recalculateSampleSuccess({ selection, sample }))

  } catch (err) {
    dispatch(recalculateSampleFailed({
      selection,
      error: err.toString()
    }))
  }
}