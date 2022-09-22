import ErrorPage from 'components/ErrorPage/ErrorPage';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as API from '../../services/api';
import { Box } from '../Box';
import {
  StyledCastName,
  StyledImg,
  StyledList,
  StyledListItem,
} from './Casts.styled';

const Casts = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState(null);
  const getMovieCasts = useMemo(
    () => async id => {
      try {
        const casts = await API.getMovieCasts(id);

        if (!casts) {
          return;
        } else {
          setCasts(casts.cast);
        }
      } catch (error) {
        toast.error(error);
      }
    },
    []
  );
  useEffect(() => {
    getMovieCasts(Number(id));
    return;
  }, [getMovieCasts, id]);

  if (!casts || casts.length === 0) return <ErrorPage rtnBtn={false} />;

  return (
    <Box p={4} borderTop="1px solid black">
      <StyledList>
        {casts.map(cast => (
          <StyledListItem key={cast.id}>
            <StyledCastName>{cast.name}</StyledCastName>
            {cast.profile_path ? (
              <StyledImg
                src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                alt={`Here should be the ${cast.name}'s photo`}
              />
            ) : (
              <p>Here should be the {cast.name}'s photo</p>
            )}
          </StyledListItem>
        ))}
      </StyledList>
    </Box>
  );
};
export default Casts;
