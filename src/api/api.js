import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '3dec519a-9ed9-4d00-a8c6-4541a128800e',
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then((response) => {
                return response.data
            })
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

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    loginMe(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
            .then(response => response.data)
    },
    logoutMe() {
        return instance.delete('auth/login')
            .then(response => response.data )
    },
};

export const profileAPI = {
    getProfile(paramsId) {
        return instance.get(`profile/${paramsId || 2}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId || 2}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`/profile/status/`, {status: status})
            .then(response => response.data)
    }
};