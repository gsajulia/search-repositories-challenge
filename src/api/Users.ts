import axios from "axios";

const url = "https://api.github.com";

export const getUserBySearch = async (search: string) => {
    return axios.get(`${url}/users/${search}`);
};

export const getUserRepos = async (user: string) => {
    return axios.get(`${url}/users/${user}/repos`);
};

export const getStarredRepo = async (user: string) => {
    return axios.get(`${url}/users/${user}/starred`);
};
