import axios from "axios";

export default class PostService {

    static async getAll(limit = 10, page = 1) {
        const resposne = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return resposne;
    }

    static async getPostByID(id) {
        const resposne = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return resposne;
    }

    static async getCommentsByID(id) {
        const resposne = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
        return resposne;
    }

}

