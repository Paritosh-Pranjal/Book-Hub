import api from "services/api";

export const fetchBookDetails = (name:string) => {
    return api.get(`volumes?q=${name}`)
}