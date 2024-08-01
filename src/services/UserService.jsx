import axios from "axios";

const API = "http://localhost:3000/users";

class UserService {
    // detail
    static getById(id) {
        return axios.get(`${API}/${id}`);
    }

    // add
    static add(data) {
        return axios.post(API, data);
    }

    // add
    static update(id, data) {
        return axios.put(`${API}/` + id, data);
    }

    // add
    // static update(id, data) {
    //     return axios.put(`${API}/` + id, data);
    // }
}

export default UserService;
