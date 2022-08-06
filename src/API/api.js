import axios from "axios";




const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "f8f86e4d-4439-4cdf-b461-2da385a7c8bc"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })

    },
    follow(userId) {
       return  instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile (userId) {
       return instance.get(`profile/`+ userId );
    }
}


export const authAPI = {
    me(){
        return  instance.get(`auth/me`)
    }
}



