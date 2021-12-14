import axios from "axios";

export default class PostService {
    static async getAll() {
        const resposne = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return resposne.data;
    }
}