import { Box } from 'components/Box';
import { TrendingMoviesList } from 'components/TrendingMoviesList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as API from '../services/api';

const Home = () => {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    getTrending();
  }, []);
  const getTrending = async () => {
    try {
      const movies = await API.getTrending();
      if (movies.length === 0) {
        toast.error(`Something went wrong`);
        return;
      } else SetMovies([...movies]);
    } catch (error) {
      toast.error(error);
    }
  };
  if (!movies) return;

  return (
    <Box as="main" p={4}>
      <TrendingMoviesList movies={movies} />
    </Box>
  );
};
export default Home;
