import { Link, useLocation } from 'react-router-dom';
import { Box } from './Box';

export const TrendingMoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Box>
      <h1>Now trending</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/get-movie-details/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};
