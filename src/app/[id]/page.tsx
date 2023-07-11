import React from 'react'
import HeaderDetails from '../../components/HeaderDetails'
import { Api } from '@/lib/api'



const Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWMzMmNkZDc3YzJhODU5NDcyN2JlMmJmZGRhYjNkNyIsInN1YiI6IjY0YWMyMjJjM2UyZWM4MDBhZjdlODQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeT_hlYc1SEhCP9osB4E-iRjXK9c3ZV0aKh4I1y5mxE'

type MovieId = {
  params: {
    id: String
  }
}
interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  adult: Boolean;
 
  // titulo  resumo, duração, classificação, gênero e imagem do filme.
}

export default async function MovieDetail({ params }: MovieId) {

  const { id } = params
  const response = await Api.get(`/movie/${id}?api_key=${process.env.API_KEY}`, {
    headers: {
      Authorization: `Bearer ${Token}`
    }
  })
  const movieDetail: MovieDetails = response.data

  return (
    <>
      <HeaderDetails />

      <div>
        <h1>{movieDetail.title}</h1>
        <p>resumo do filme</p>
        <p>duração do filme</p>
        <p>classificação do filme</p>
        <p>generos</p>
        <p>Imagem do filme</p>
      </div>



    </>
  )
}

