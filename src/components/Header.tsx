import React from 'react'
import SearchComponent from './SearchComponent'

export default function Header() {

  return (
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <label className="sr-only" htmlFor="search"> Search </label>
              <SearchComponent/>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <a href="/" className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Cine Explorer
          </a>
          <p className="mt-1.5 text-sm text-gray-500">
            O seu melhor explorador de filmes, divirta-se!!
          </p>
        </div>
      </div>
    </header>
  )
}

