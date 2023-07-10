'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function ContainerMovies() {
    const [movies, setMovies] = useState([])


    useEffect(() => {


        return () => {

        }
    }, [])

    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Product Collection
                    </h2>

                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                        natus?
                    </p>
                </header>

                <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                    <li>
                        <a href="#" className="block overflow-hidden group">
                            <Image
                                src="/profile.png"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />

                            <div className="relative pt-3 bg-white">
                                <h3
                                    className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                >
                                    Basic Tee
                                </h3>

                                <p className="mt-2">
                                    <span className="sr-only"> Regular Price </span>

                                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                </p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block overflow-hidden group">
                            <Image
                                src="/profile.png"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />

                            <div className="relative pt-3 bg-white">
                                <h3
                                    className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                >
                                    Basic Tee
                                </h3>

                                <p className="mt-2">
                                    <span className="sr-only"> Regular Price </span>

                                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                </p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block overflow-hidden group">
                            <Image
                                src="/profile.png"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />

                            <div className="relative pt-3 bg-white">
                                <h3
                                    className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                >
                                    Basic Tee
                                </h3>

                                <p className="mt-2">
                                    <span className="sr-only"> Regular Price </span>

                                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                </p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block overflow-hidden group">
                            <Image
                                src="/profile.png"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />

                            <div className="relative pt-3 bg-white">
                                <h3
                                    className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                >
                                    Basic Tee
                                </h3>

                                <p className="mt-2">
                                    <span className="sr-only"> Regular Price </span>

                                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ContainerMovies