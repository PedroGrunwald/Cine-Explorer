import React from 'react'
import { Api } from '@/lib/api'
import Image from 'next/image'
import Header from '@/components/Header'


const ApiKey = '19c32cdd77c2a8594727be2bfddab3d7'
const Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWMzMmNkZDc3YzJhODU5NDcyN2JlMmJmZGRhYjNkNyIsInN1YiI6IjY0YWMyMjJjM2UyZWM4MDBhZjdlODQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeT_hlYc1SEhCP9osB4E-iRjXK9c3ZV0aKh4I1y5mxE'

type MovieId = {
  params: {
    id: String

  }
}
interface MovieDetails {
  id: Number;
  title: String;
  overview: String;
  release_date: String;
  adult: Boolean;
  poster_path: String;
  genres: String[];
  runtime: String;

}

export default async function MovieDetail({ params }: MovieId) {

  const { id } = params
  const response = await Api.get(`/movie/${id}?api_key=${ApiKey}`, {
    headers: {
      Authorization: `Bearer ${Token}`
    }
  })
  const movieDetail: MovieDetails = response.data

  return (
    <>
      <Header />

      <div>
        <h1>{movieDetail.title}</h1>
        <p>{movieDetail.overview}</p>
        <p>{movieDetail.runtime} min</p>
        <p>{movieDetail.adult ? "+18" : "livre"}</p>
        {movieDetail.genres.map((genre : any) =>(<div key={genre.id}>{genre.name}</div>))}
        <Image
          className=" object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
          width={330}
          height={450}
          alt="movie image"
        />
      </div>

     

    </>
  )
}

