import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as API from '../services/api';
import { Box } from './Box';

const Casts = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState(null);
  useEffect(() => {
    // console.log(id);
    getMovieCasts(Number(id));
  }, [id]);
  //   console.log(movie);
  const getMovieCasts = async id => {
    try {
      const casts = await API.getMovieCasts(id);

      if (!casts) {
        return;
      } else {
        // console.log(casts.cast);
        setCasts(casts.cast);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  //   console.log(casts);
  if (!casts || casts.length === 0) return <p>No information about casts</p>;
  return (
    <Box p={4} borderTop="1px solid black">
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>
            <p>{cast.name}</p>
            {cast.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                alt=""
                width="75px"
              />
            )}
          </li>
        ))}
      </ul>
    </Box>
  );
};
export default Casts;
