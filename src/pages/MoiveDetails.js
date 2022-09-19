import { Box } from 'components/Box';
import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useMemo, useState } from 'react';
import {
  useParams,
  useLocation,
  Outlet,
  NavLink,
  Link,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import * as API from '../services/api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  //   console.log(id);
  const getMovieDetails = useMemo(
    () => async id => {
      try {
        const movie = await API.getMovieDetails(id);

        if (!movie) {
          return;
        } else {
          // console.log(movie);
          setMovie(movie);
        }
      } catch (error) {
        toast.error(error);
      }
    },
    []
  );
  useEffect(() => {
    // console.log('рендер');
    getMovieDetails(Number(id));
  }, [getMovieDetails, id]);
  //   console.log(movie);

  if (!movie) return;
  //   console.log(movie);
  return (
    <>
      <Link to={location.state?.from ?? '/home'}>Back to the list</Link>
      <Box p={4} display="flex" borderBottom="1px solid black">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt=""
        />
        <Box p={4}>
          <h2>{movie.title}</h2>
          <h3>({movie.tagline})</h3>
          <p>User score: {Math.round(movie.vote_average * 100) / 10}%</p>
          <b>Overview</b>
          <p>{movie.overview}</p>
          <b>Genres</b>
          <p>
            {movie.genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </Box>
      </Box>
      <Box p={4} display="flex" flexDirection="column">
        <NavLink to={'cast'} state={{ from: location.state.from }}>
          Cast
        </NavLink>
        <NavLink to={'reviews'} state={{ from: location.state.from }}>
          Reviews
        </NavLink>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
