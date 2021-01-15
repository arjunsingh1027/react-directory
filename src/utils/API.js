import axios from "axios";

// get users
export default {
    userApi: function () {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
}