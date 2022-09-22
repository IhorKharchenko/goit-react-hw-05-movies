import { Global, css } from '@emotion/react';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from './Box';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';
const ErrorPage = lazy(() => import('./ErrorPage/ErrorPage'));
const Casts = lazy(() => import('./Casts/Casts'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const SharedLayout = lazy(() => import('./SharedLayout'));
const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MoiveDetails'));
const Movies = lazy(() => import('../pages/Movies'));

const GlobalStyles = css`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: system-ui, 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  ul,
  ol,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a {
    color: black;
    text-decoration: none;
    &:visited {
      color: black;
    }
  }
`;
export const App = () => {
  return (
    <Box as="main" p="3">
      <Global styles={GlobalStyles} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route
              path="movies/get-movie-details/:id"
              element={<MovieDetails />}
            >
              <Route path="cast" element={<Casts />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} position="top-center" />
    </Box>
  );
};
