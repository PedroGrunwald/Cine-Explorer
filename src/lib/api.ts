import axios from 'axios'

export const Api = axios.create({
    baseURL: "https://api.themoviedb.org/3/trending/all/day?api_key=19c32cdd77c2a8594727be2bfddab3d7",
    headers:
    {
        accept: 'application/json',
      
    }
}
)