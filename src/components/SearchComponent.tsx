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
                className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                placeholder="Procure pelo filme"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                onClick={() => handleSearch()}
            ><span className="sr-only">Search</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg></button>

            <ul>
                {searchResults.map((results) => (
                    <>
                        <li key={results.id}>{results.title}</li>
                        <Image
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
