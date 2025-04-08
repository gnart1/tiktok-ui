import * as httpRequest from '~/utils/httpRequest';

export const getFollowing = async (page) => {

    try {
        const res = await httpRequest.get(`me/followings`, {
            params: {
                page
            }
        });
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }

}

