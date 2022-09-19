import { Box } from 'components/Box';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as API from '../services/api';

const { SearchBox } = require('components/SearchBox');

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';
  const changeQuery = value => {
    setSearchParams(value ? { query: value } : {});
  };
  useEffect(() => {
    if (query !== '') submitSearch(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitSearch = async query => {
    setMovies(null);
    setIsLoading(true);
    try {
      const movies = await API.getMoviesByQuery(query);
      if (movies.length === 0) {
        toast.error(`We dont have any '${query}' movie`);
        setIsLoading(false);
        return;
      } else setMovies([...movies]);
      setIsLoading(false);
    } catch (error) {}
  };

  //   console.log(movies);
  return (
    <Box p={4}>
      <SearchBox onChange={changeQuery} onSubmit={submitSearch} />
      {isLoading && <Loader />}
      {movies && (
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
      )}
    </Box>
  );
};
export default Movies;
