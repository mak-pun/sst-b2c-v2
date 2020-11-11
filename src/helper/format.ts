import numbro from 'numbro'
import moment from 'moment'

export const formatPrice = (amount: number, currency: string) => {
    return currency + ' ' + numbro(amount).format({
        thousandSeparated: true,
        mantissa: 2
    })
}

export const ucfirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const formatDatetime = (str: string, type: 'date' | 'shortDate' | 'time') => {
    let format;
    let output;

    switch (type) {
        case 'date':
            format = 'D MMMM, YYYY';
            output = moment(str).format(format);
            break;
        case 'shortDate':
            format = 'D MMM, YYYY';
            output = moment(str).format(format);
            break;
        case 'time':
            format = 'h:mm a';
            output = moment(str).format(format);
            break;
    }
    return output;
}

export const formatBedCombinationLabel = (bedCombination: {[bedType: string]: number})=>{
    let result: Array<string> = []

    Object.keys(bedCombination).forEach(key=>{
        for(let i = 0; i < bedCombination[key]; i++){
            result.push(key)
        }
    })

    return result.join(', ')
}