import { AvailableOption } from '../../api/types'

const hasValueAddWithExtraCost = (availableOptions: Array<AvailableOption>) => {
    let filteredAvailableOptions = availableOptions.filter(option => {
        return ['promotion_option', 'hotel_option'].includes(option.type) &&
            (option.amount_per_option.amount !== '0' && option.min !== option.max);
    })
    return filteredAvailableOptions.length > 0;
};

export default hasValueAddWithExtraCost;