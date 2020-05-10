import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '3dec519a-9ed9-4d00-a8c6-4541a128800e',
    }
});

export const API = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then((response) => {
                return response.data
            })
    },

    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    getProfile(paramsId) {
        return instance.get(`profile/${paramsId || 2}`)
            .then(response => response.data)
    },

    setFollow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then(response => response.data)
    },

    setUnfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then(response => response.data)
    },
};

export default API;