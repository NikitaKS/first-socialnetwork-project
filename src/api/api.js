import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'a1408a51-e2c8-48b4-9b0f-06ce8121bd8d'}
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(res => {
            return res.data
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`,
        ).then(res => {
            return res.data
        })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`,
        ).then(res => {
            return res.data
        })
    },
    authMe() {
        return instance.get('auth/me');
    },
    getUserProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI');
        return profileAPI.getUserProfile(userId);
    }
};
export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
};
export const authAPI = {
    me() {
        return instance.get('auth/me');
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logOut() {
        return instance.delete('auth/login');
    }
};
