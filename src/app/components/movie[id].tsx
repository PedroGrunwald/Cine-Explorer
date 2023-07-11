import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Api } from '@/lib/api'

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  adult: Boolean 
// titulo  resumo, duração, classificação, gênero e imagem do filme.
}

export default function ExampleClientComponent() {
  const router = useRouter();
  const { tag, item } = router.query;
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  useEffect(() => {
    if (tag && item) {
      // Função assíncrona para fazer a solicitação à API do MovieDB
      const fetchMovieDetails = async () => {
        try {
          // Fazer a solicitação para obter o filme com base na ID
          const response = await Api.get<MovieDetails>(
            `https://api.themoviedb.org/3/movie/${item}?api_key=YOUR_API_KEY`
          );

          // Acessar os detalhes do filme a partir da resposta da API
          const movieDetails = response.data;

          // Atualizar o estado com os detalhes do filme
          setMovieDetails(movieDetails);
        } catch (error) {
          console.error('Erro ao obter detalhes do filme:', error);
        }
      };

      // Chamar a função para buscar os detalhes do filme
      fetchMovieDetails();
    }
  }, [tag, item]);

  return (
    <div>
      {movieDetails ? (
        <div>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          <p>Release Date: {movieDetails.release_date}</p>
        
        </div>
      ) : (
        <p>Carregando detalhes do filme...</p>
      )}
    </div>
  );
}