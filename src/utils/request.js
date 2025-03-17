import axios from "axios";

const reqest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
})

export const get = async (path, options = {}) => {
    const response = await reqest.get(path, options)
    return response.data
}
export default reqest