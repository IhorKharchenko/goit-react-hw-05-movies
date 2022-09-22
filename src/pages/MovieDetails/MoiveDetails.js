import { Box } from 'components/Box';
import { Loader } from 'components/Loader/Loader';
import { ReturnButton } from 'components/ReturnButton/ReturnButton';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as API from '../../services/api';
import {
  StyledDetailsNav,
  StyledNavLink,
  StyledSubTitle,
  StyledTagLine,
  StyledText,
  StyledTitle,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const getMovieDetails = useMemo(
    () => async id => {
      try {
        const movie = await API.getMovieDetails(id);

        if (!movie) {
          return;
        } else {
          setMovie(movie);
        }
      } catch (error) {
        toast.error(error);
      }
    },
    []
  );
  useEffect(() => {
    getMovieDetails(Number(id));
    return;
  }, [getMovieDetails, id]);

  if (!movie) return;

  return (
    <>
      <ReturnButton
        returnPath={location.state?.from ?? '/home'}
        text="Back to list"
      />
      <Box p={4} display="flex" borderBottom="1px solid black">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={`poster of movie: "${movie.title}"`}
        />
        <Box p={4} pt={0}>
          <StyledTitle>{movie.title}</StyledTitle>
          {movie.tagline && <StyledTagLine>({movie.tagline})</StyledTagLine>}

          <StyledText>
            User score: {Math.round(movie.vote_average * 100) / 10}%
          </StyledText>
          <StyledSubTitle>Overview</StyledSubTitle>
          <StyledText>{movie.overview}</StyledText>
          <StyledSubTitle>Genres</StyledSubTitle>
          <StyledText>
            {movie.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </StyledText>
        </Box>
      </Box>
      <StyledDetailsNav>
        <StyledNavLink to={'cast'} state={{ from: location.state?.from }}>
          Cast
        </StyledNavLink>

        <StyledNavLink to={'reviews'} state={{ from: location.state?.from }}>
          Reviews
        </StyledNavLink>
      </StyledDetailsNav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
