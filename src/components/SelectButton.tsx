import React, { useState } from 'react';

type Props = {
    label: string;
    className?: string;
    disabled?: boolean;
    selected?: boolean;
    onClicked: (selected?: boolean) => void
}

const SelectButton = (props: Props) => {

    const {label, className, disabled, selected, onClicked} = props

    return <>
        <button 
        disabled={disabled}
        type="button"
        className={(className || '')+' px-3 btn border-radius-3 border-width-2 font-weight-bold py-2 ' + (selected? 'btn-primary ':'btn-soft-primary ')}
        onClick={()=>onClicked(!selected)}
        >
            <span className={'far mr-2 '+(selected? 'fa-check-square  text-white': 'fa-square text-primary')}></span>
            <span>{label}</span>
        </button>
    </>
}
export default SelectButton

