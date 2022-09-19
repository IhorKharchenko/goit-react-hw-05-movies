import { Global, css } from '@emotion/react';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from './Box';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';
const Casts = lazy(() => import('./Casts'));
const Reviews = lazy(() => import('./Reviews'));
const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('../pages/MoiveDetails'));
const Movies = lazy(() => import('../pages/Movies'));

const GlobalStyles = css`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
export const App = () => {
  return (
    <Box as="main" p="3">
      <Global styles={GlobalStyles} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route
              path="/movies/get-movie-details/:id"
              element={<MovieDetails />}
            >
              <Route path="cast" element={<Casts />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route
              path="*"
              element={
                <div>
                  <h1>Page not found</h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} position="top-center" />
    </Box>
  );
};
