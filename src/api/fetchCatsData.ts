import axios from "axios"

export const fetchCatsData =  async (limit: number, pageNo: number) => {
    try {
        let response = await axios.get(`https://api.thecatapi.com/v1/breeds?limit=${limit}&page=${pageNo}`, {
            headers: {
                'x-api-key': 'live_HPvtNnVPu1A9xKut0K5qyf3W1PDYmtd0bF5cO9E4b91gexTeAIiryvgkuMhgSiqP',
            }
        })
        console.log(response?.data);
        return response?.data;
    } catch (error) {
        console.log({error})
        return null
    }
}