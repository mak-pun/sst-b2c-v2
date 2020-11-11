import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import { RoomClassResult, AvailableOption, OccupancySolution, Sample } from '../../../../api/types'
import SelectButton from '../../../../components/SelectButton'
import { recalculateSample, Selection } from '../../../../features/hotelResult/hotelResultSlice'
import { useDispatch } from 'react-redux'
import { useCurrentStateAndParams } from '@uirouter/react'
import BedSelection from './BedSelections'


type Props = {
    roomNo: string;
    roomClass: RoomClassResult;
    selectedSample: Sample;
    selection: Selection
}

type Target = 'adult' | 'child'

type ExtraBedModels = {
    adult?: boolean;
    child?: boolean;
}

type BreakfastModels = {
    adult?: boolean;
    child?: boolean;
}

type ExtraBedSettings = {
    disabled: boolean;
    hidden: boolean;
}

type AllExtraBedSettings = {
    canSelectBoth: boolean;
    adult: ExtraBedSettings;
    child: ExtraBedSettings;
}

type BreakfastSettings = {
    min: number;
    max: number;
    amount: number;
    optionNames: Array<string>;
    isPartial: boolean;
}

type AllBreakfastSettings = {
    adult: BreakfastSettings;
    child: BreakfastSettings;
}

const initialExtraBedSettings = {
    canSelectBoth: false,
    adult: {
        disabled: false,
        hidden: false
    },
    child: {
        disabled: false,
        hidden: false
    }
}
const initialBreakfastSettings = {
    adult: {
        min: 0,
        max: 0,
        amount: 0,
        optionNames: [
            'breakfast',
            'extra_bed_breakfast'
        ],
        isPartial: false
    },
    child: {
        min: 0,
        max: 0,
        amount: 0,
        optionNames: [
            'child_shared_main_bed_breakfast',
            'child_extra_bed_breakfast'
        ],
        isPartial: false
    }
}

// console.log('initialBreakfastSettings', initialBreakfastSettings)

const SimplifiedRoomClassOptions = (props: Props) => {

    const dispatch = useDispatch()

    const { roomNo, roomClass, selectedSample, selection } = props

    const { params } = useCurrentStateAndParams()
    const [options, setOptions] = useState<Array<AvailableOption>>([])
    const [allExtraBedSettings, setAllExtraBedSettings] = useState<AllExtraBedSettings>(initialExtraBedSettings)
    const [allBreakfastSettings, setAllBreakfastSettings] = useState<AllBreakfastSettings>(initialBreakfastSettings)

    const [extraBedModels, setExtraBedModels] = useState<ExtraBedModels>({})
    const [breakfastModels, setBreakfastModels] = useState<BreakfastModels>({})


    useEffect(() => {

        // console.log('selection', selection)
        // console.log('selectedSample', selectedSample)
        const filteredAvailableOptions = selectedSample?.available_options.filter(availableOption => availableOption.type === 'room_class_option')

        // console.log('filteredAvailableOptions', filteredAvailableOptions)
        setOptions(filteredAvailableOptions as Array<AvailableOption>)

    }, [selectedSample, selection])

    useEffect(()=>{
        setupExtraBedSettings()
        setupBreakfastSettings()
    }, [options])


    useEffect(() => {
        // console.log('breakfastModels', breakfastModels)
        // console.log('allBreakfastSettings', allBreakfastSettings)
    }, [allBreakfastSettings])

    const toggleExtraBed = (target: Target) => {
        let occupancySolutionCandidates: Array<OccupancySolution> = [];
        let extraBedModelsTemp = { ...extraBedModels, [target]: !extraBedModels[target] }

        if (!allExtraBedSettings.canSelectBoth) {
            if (target === 'adult') {
                extraBedModelsTemp.child = false
            } else if (target === 'child') {
                extraBedModelsTemp.adult = false
            }
        }

        setExtraBedModels(extraBedModelsTemp)

        // Prepare to recalculate

        if (!extraBedModelsTemp.adult && !extraBedModelsTemp.child) {

            // No extra beds
            occupancySolutionCandidates = roomClass.occupancy_solutions
                .filter(os => os.adults_in_extra_beds === 0 && os.children_in_extra_beds === 0)

        } else if (!extraBedModelsTemp.adult && extraBedModelsTemp.child) {

            // Child extra bed only
            occupancySolutionCandidates = roomClass.occupancy_solutions
                .filter(os => os.adults_in_extra_beds === 0 && os.children_in_extra_beds !== 0)

        } else if (extraBedModelsTemp.adult && !extraBedModelsTemp.child) {

            // Adult extra bed only
            occupancySolutionCandidates = roomClass.occupancy_solutions
                .filter(os => os.adults_in_extra_beds !== 0 && os.children_in_extra_beds === 0)

        } else {

            // both checked
            occupancySolutionCandidates = roomClass.occupancy_solutions
                .filter(os => os.adults_in_extra_beds !== 0 && os.children_in_extra_beds !== 0)

        }

        const occupancySolutionId = _.minBy(occupancySolutionCandidates, occupancySolution => occupancySolution.weight)?.id as string

        const preparedSelection = { ...selection, occupancySolutionId }

        dispatch(recalculateSample(params.searchId, params.hotelId, preparedSelection))
    }


    const toggleBreakfast = (target: Target) => {

        let breakfastModelsTemp = { ...breakfastModels, [target]: !breakfastModels[target] }

        const breakfastOptionIds = [...getBreakfastOptions(target)].map(option=>option.selected_option_id)

        const preparedSelectedOptions = [...selectedSample?.available_options].map(availableOption=>{
            return {
                selectedOptionId: availableOption.selected_option_id,
                amount: breakfastOptionIds.includes(availableOption.selected_option_id)
                    ? (breakfastModelsTemp[target]? availableOption.max: availableOption.min)
                    :availableOption.amount,
                min: availableOption.min,
                max: availableOption.max
            }
        }) 

        const preparedSelection = {...selection, selectedOptions: preparedSelectedOptions}

        dispatch(recalculateSample(params.searchId, params.hotelId, preparedSelection))
    }

    const getBreakfastOptions = (target: Target) => {
        return options
            .filter(option => allBreakfastSettings[target].optionNames.includes(option.name))
    };


    const setupExtraBedSettings = () => {

        let occupancySolution = roomClass.occupancy_solutions.find(os => os.id === selection.occupancySolutionId)

        let canUncheckAdultInExtraBed = roomClass.occupancy_solutions.filter(os => os.adults_in_extra_beds === 0).length > 0;
        let canCheckAdultInExtraBed = roomClass.occupancy_solutions.filter(os => os.adults_in_extra_beds !== 0).length > 0;

        let canUncheckChildInExtraBed = roomClass.occupancy_solutions.filter(os => os.children_in_extra_beds === 0).length > 0;
        let canCheckChildInExtraBed = roomClass.occupancy_solutions.filter(os => os.children_in_extra_beds !== 0).length > 0;

        const canSelectBoth = roomClass.occupancy_solutions.filter(os => os.adults_in_extra_beds !== 0 && os.children_in_extra_beds !== 0).length > 0;

        setExtraBedModels({
            adult: occupancySolution?.adults_in_extra_beds !== 0,
            child: occupancySolution?.children_in_extra_beds !== 0
        })

        setAllExtraBedSettings({
            canSelectBoth,
            adult: {
                disabled: !(canUncheckAdultInExtraBed && canCheckAdultInExtraBed),
                hidden: !extraBedModels.adult && !canCheckAdultInExtraBed
            },
            child: {
                disabled: !(canUncheckChildInExtraBed && canCheckChildInExtraBed),
                hidden: !extraBedModels.child && !canCheckChildInExtraBed
            }
        })

    }
    const setupBreakfastSettings = () => {

        const preparedBreakfastSettings = {} as AllBreakfastSettings

        (['adult', 'child'] as Array<Target>).forEach(target => {
            // console.log(getBreakfastOptions(target))
            preparedBreakfastSettings[target] = getBreakfastOptions(target).reduce((totalOptionSettings, optionSettings) => ({
                min: totalOptionSettings.min + optionSettings.min,
                max: totalOptionSettings.max + optionSettings.max,
                amount: totalOptionSettings.amount + optionSettings.amount,
            }), { min: 0, max: 0, amount: 0 }) as BreakfastSettings

            // console.log('preparedBreakfastSettings', preparedBreakfastSettings)
            preparedBreakfastSettings[target].optionNames = allBreakfastSettings[target].optionNames
            preparedBreakfastSettings[target].isPartial = preparedBreakfastSettings[target].min < preparedBreakfastSettings[target].amount && preparedBreakfastSettings[target].amount < preparedBreakfastSettings[target].max

        })

        setAllBreakfastSettings(preparedBreakfastSettings)
        setBreakfastModels({
            adult: preparedBreakfastSettings.adult.amount > 0,
            child: preparedBreakfastSettings.child.amount > 0
        })
    }

    return (<>
        {
            !(allExtraBedSettings.adult.hidden && allExtraBedSettings.child.hidden) && options.length > 0
            ? (
                <div className="w-100 position-relative m-4 m-md-0">
                    <div className="mt-1 pt-2">
                        <div className="mb-1 px-3">
                            <h6>Room Options</h6>

                            {/* Bed Selections */}

                            <BedSelection roomNo={roomNo} roomClass={roomClass} selection={selection}></BedSelection>

                            {/* Extra Bed Options */}

                            {(['adult', 'child'] as Array<Target>).map(target => {
                                return !allExtraBedSettings[target].hidden ?
                                    <SelectButton
                                        key={'extra-bed-option-'+target}
                                        label={(target === 'child' ? 'Child ' : '') + 'Extra Bed'}
                                        className='btn-xs mr-2'
                                        disabled={allExtraBedSettings[target].disabled}
                                        selected={extraBedModels[target]}
                                        onClicked={() => toggleExtraBed(target)}
                                    />
                                    : null
                            })}

                            {/* Breakfast Options */}

                            {
                                (['adult', 'child'] as Array<Target>).map(target => {
                                    return !(allBreakfastSettings[target].min === 0 && allBreakfastSettings[target].max === 0) ?
                                        <SelectButton
                                            key={'breakfast-option-'+target}
                                            label={(target === 'child' ? 'Child ' : '') + 'Breakfast ' + (allBreakfastSettings[target].isPartial ? ' (Partial)' : '')}
                                            className='btn-xs mr-2'
                                            disabled={allBreakfastSettings[target].min === allBreakfastSettings[target].max}
                                            selected={breakfastModels[target]}
                                            onClicked={() => toggleBreakfast(target)}
                                        /> : null
                                })
                            }

                        </div>
                    </div>
                </div>
            ): null
        }



    </>)
}

export default SimplifiedRoomClassOptions

