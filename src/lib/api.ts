import axios from 'axios'

export const Api = axios.create({
    baseURL: "https://api.themoviedb.org/3/trending/all/day?api_key=19c32cdd77c2a8594727be2bfddab3d7",
    headers:
    {
        accept: 'application/json',
      
    }
}
)

// https://api.themoviedb.org/3/trending/all/day?api_key=19c32cdd77c2a8594727be2bfddab3d7
// https://api.themoviedb.org/3/account/20132139/favorite/movies?api_key=19c32cdd77c2a8594727be2bfddab3d7 