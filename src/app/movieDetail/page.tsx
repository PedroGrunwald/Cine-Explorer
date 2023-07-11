import React from 'react'
import Footer from '../../components/Footer'
import HeaderDetails from '../../components/HeaderDetails'
import { Api } from '@/lib/api'



const Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWMzMmNkZDc3YzJhODU5NDcyN2JlMmJmZGRhYjNkNyIsInN1YiI6IjY0YWMyMjJjM2UyZWM4MDBhZjdlODQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeT_hlYc1SEhCP9osB4E-iRjXK9c3ZV0aKh4I1y5mxE'
interface Movie {
  title: string
  id: number
  release_date: string
  poster_path: string
  adult: Boolean
}

export default async function MovielDetail() {
  
  const response = await Api.get(`https://api.themoviedb.org/3/movie/447365?api_key=${process.env.API_KEY}`, {
    headers: {
      Authorization: `Bearer ${Token}`
    }
  })

  const movies: Movie[] = response.data.results

  if (movies.length === 0) {
    return "LOADING"
  }
  return (
    <>
      <HeaderDetails />

      <div>
        <h1>titulo filme</h1>
        <p>resumo do filme</p>
        <p>duração do filme</p>
        <p>classificação do filme</p>
        <p>genero do filme</p>
        <p>Imagem do filme</p>
      </div>


      <Footer />
    </>
  )
}

