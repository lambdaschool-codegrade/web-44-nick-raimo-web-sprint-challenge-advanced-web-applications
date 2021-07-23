import Axios from "axios";

export const axiosWithAuth =() => {
    const token = localStorage.getItem('AuthToken');

    return axiosWithAuth.create({
        headers: {
            Authorization: token,
        },
    });
};