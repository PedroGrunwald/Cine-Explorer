'use client'
import { Api } from '@/lib/api'
import { useState } from 'react';
import { useSearchParams } from 'next/navigation'


const Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWMzMmNkZDc3YzJhODU5NDcyN2JlMmJmZGRhYjNkNyIsInN1YiI6IjY0YWMyMjJjM2UyZWM4MDBhZjdlODQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeT_hlYc1SEhCP9osB4E-iRjXK9c3ZV0aKh4I1y5mxE'
interface Movie {
    id: number;
    name: string;

}

const SearchComponent: React.FC = () => {
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const searchParams = useSearchParams()
    const [searchTerm, setSearchTerm] = useState('');
    const search = searchParams.get('query')

    const handleSearch = async () => {
        try {
            const response = await Api.get(`/discover/movie?query=${search}?api_key=19c32cdd77c2a8594727be2bfddab3d7`, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });
            console.log(search)
            setSearchResults(response.data.results);
        } catch (error) {
            console.error('Erro na busca:', error);
        }

    };

    // const moviesFiltered = response.data.response.filter((movie) => {
    //     return movie.name.toLowerCase().includes(movie.toLowerCase()) || movie.symbol.toLowerCase().includes(search.toLowerCase())
    // })

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => handleSearch()}>Buscar</button>
            {console.log(searchResults)}
            <ul>
                {searchResults.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchComponent;
