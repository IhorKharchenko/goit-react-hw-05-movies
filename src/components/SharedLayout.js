import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from './Box';
import { Loader } from './Loader/Loader';
const AppBar = lazy(() => import('./AppBar'));
const SharedLayout = () => {
  return (
    <Box>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
export default SharedLayout;
