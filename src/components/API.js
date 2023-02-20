import axios from "axios";

export const GetData = async (limit = 10, page = 1) => {
    return await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _limit: limit,
            _page: page,
        }
    })
    //let response
    // try {
    //     response =  await axios.get('https://jsonplaceholder.typicode.com/posts123')
    //     return response.data
    // } catch (err) {
    //     console.log(err)
    // }
}
export const GetById = async (id) => await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)

export const GetCommentsByPostId = async (id) => await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
