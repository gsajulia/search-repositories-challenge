import axios from "axios";

export const getWether = (url: string) =>{
  return axios.get(url);
}