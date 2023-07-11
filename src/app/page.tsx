import React from 'react'
import Image from 'next/image'
import { Api } from '@/lib/api'

const apiKey = '19c32cdd77c2a8594727be2bfddab3d7';
const Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWMzMmNkZDc3YzJhODU5NDcyN2JlMmJmZGRhYjNkNyIsInN1YiI6IjY0YWMyMjJjM2UyZWM4MDBhZjdlODQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeT_hlYc1SEhCP9osB4E-iRjXK9c3ZV0aKh4I1y5mxE'

interface Movie {
    title: string
    id: number
    release_date: string
    poster_path: string
}

export async function Home() {

    const response = await Api.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`, {
        headers: {
            Authorization: `Bearer ${Token}`
        }
    })

    const movies: Movie[] = response.data

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
                <ul>
                    {movies.map((movie) => {
                        <ul
                            key={movie.id}
                            className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                            <li>
                                <a href="#" className="block overflow-hidden group">
                                    <h3
                                        className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                    >
                                        {movie.title}
                                    </h3>
                                    <Image
                                        src={movie.poster_path}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                    <div className="relative pt-3 bg-white">
                                        <p className="mt-2">
                                            <span className="sr-only"> {movie.release_date} </span>
                                            <span className="tracking-wider text-gray-900">  </span>
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    })
                    }
                </ul>
            </div>
            <div>
            </div>
        </section>
    )
}
