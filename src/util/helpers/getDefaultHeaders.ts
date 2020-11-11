import { v4 as uuid } from 'uuid'

const getDefaultHeaders = () => {
    return {
        headers: {
            'X-TTID': uuid()
        }
    }
}

export default getDefaultHeaders