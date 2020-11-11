import React from 'react'

type Props = {
    number: number;
    className?: string;
}

const Stars = (props: Props) => {

    const { number, className } = props

    const renderStars = (stars: number) => {
        const starElements = []
        for (let i = 0; i < stars; i++) {
            starElements.push(<small key={i} className="fas fa-star"></small>)
        }
        return starElements
    }

    return (
        <>
        <span className={'text-yellow-lighter-2 ' + (className || '')}>
            {renderStars(number)}
        </span>
        </>
    )
}

export default Stars