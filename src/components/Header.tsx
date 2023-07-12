'use client'
import { Api } from '@/lib/api'
import React, { useEffect, useState } from 'react'

const Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWMzMmNkZDc3YzJhODU5NDcyN2JlMmJmZGRhYjNkNyIsInN1YiI6IjY0YWMyMjJjM2UyZWM4MDBhZjdlODQ5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeT_hlYc1SEhCP9osB4E-iRjXK9c3ZV0aKh4I1y5mxE'


export default  function Header({ getSearchResults }: any) {
  const [inputValue, setInputValue] = useState()
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   Api.get(`/discover/movie?api_key=${process.env.API_KEY}`), {
  //     headers: {
  //       Authorization: `Bearer ${Token}`
  //     },
     
  //   }
  // },[])


// function busca(a) {
//   if (finds === "") {
//       return a
//   } else {
//       return a.nomeFilme.toLowerCase().includes(finds.toLowerCase()) 
//   }

{/* <button onClick={() => getFilmes()}>Buscar</button> */}
// }

  return (
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <label className="sr-only" htmlFor="search"> Search </label>
              <input
                className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Procure pelo filme"
              />
              <button
                type="button"
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
              >
                <span className="sr-only">Search</span>
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
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Cine Explorer
          </h1>
          <p className="mt-1.5 text-sm text-gray-500">
            O seu melhor explorador de filmes, divirta-se!!
          </p>
        </div>
      </div>
    </header>
  )
}

