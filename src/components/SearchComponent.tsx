'use client'
import { Api } from '@/lib/api'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

const Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWMzMmNkZDc3YzJhODU5NDcyN2JlMmJmZGRhYjNkNyIsInN1YiI6IjY0YWMyMjJjM2UyZWM4MDBhZjdlODQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeT_hlYc1SEhCP9osB4E-iRjXK9c3ZV0aKh4I1y5mxE'
interface Movie {
    id: number;
    title: string;
    poster_path: String;
}

const SearchComponent: React.FC = () => {
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchParams = useSearchParams()
    const search = searchParams.get('query')

    useEffect(() => {
        if (search) {
            setSearchTerm(search);
        }
    }, [search]);

    const handleSearch = async () => {
        try {
            const response = await Api.get(`/search/movie?query=${searchTerm}&api_key=19c32cdd77c2a8594727be2bfddab3d7`, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });

            setSearchResults(response.data.results);
        } catch (error) {
            console.error('Erro na busca:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => handleSearch()}>Buscar</button>

            <ul>
                {searchResults.map((results) => (
                    <>
                        <li key={results.id}>{results.title}</li>
                        <Image
                            className="h-[450px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
                            width={330}
                            height={450}
                            alt="movie image"
                        />
                    </>
                ))}
            </ul>
        </div>
    );
};

export default SearchComponent;
