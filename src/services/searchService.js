import * as httRequest from '~/utils/httpRequest'

export const search = async (q, type = 'less') => {
    try {
        const res = await httRequest.get('users/search', {
            params: {
                q,
                type
            }
        })
        return res.data
    }
    catch (error) {
        console.log(error)
    }
}