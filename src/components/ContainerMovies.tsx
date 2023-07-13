import React from 'react'
import Image from 'next/image'
import { Api } from '@/lib/api'

const Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWMzMmNkZDc3YzJhODU5NDcyN2JlMmJmZGRhYjNkNyIsInN1YiI6IjY0YWMyMjJjM2UyZWM4MDBhZjdlODQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeT_hlYc1SEhCP9osB4E-iRjXK9c3ZV0aKh4I1y5mxE'
const ApiKey = '19c32cdd77c2a8594727be2bfddab3d7'
interface Movie {
    title: string
    id: number
    release_date: string
    poster_path: string
    adult: Boolean
}

export default async function Home() {

    const response = await Api.get(`/trending/all/day?api_key=${ApiKey}`, {
        headers: {
            Authorization: `Bearer ${Token}`
        }
    })

    const movies: Movie[] = response.data.results

    if (movies.length === 0) {
        return "LOADING"
    }
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Filmes em destaque
                    </h2>
                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                        Não perca a oportunidade de assistir os filmes mais favoritos do cinema para a tela de sua casa, os mais premiados e bem avaliados diretamente no conforto de sua casa!
                    </p>
                </header>
            </div>
            <div>
                <ul>
                    {movies.map((movie) => (
                        <ul
                            key={movie.id}
                            className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                            <li>
                                <a href={`/${movie.id}`} className="block overflow-hidden group">
                                    <h3
                                        className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                    >
                                        {movie.title}
                                    </h3>
                                </a>
                                <p className="mt-2 flex flex-col">
                                    <span className=""> {movie.release_date} </span>
                                    <span className="tracking-wider text-gray-900">Classificação: {movie.adult ? "+18" : "livre"}</span>
                                </p>
                                <Image
                                    className="h-[450px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    width={330}
                                    height={450}
                                    alt="movie image"
                                />
                                <div className="relative pt-3 bg-white">
                                </div>
                            </li>
                        </ul>
                    )
                    )
                    }
                </ul>
            </div>
        </section>
    )
}