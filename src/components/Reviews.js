import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as API from 'services/api';
import { Box } from './Box';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  //   const location = useLocation();
  const getMovieReviews = useMemo(
    () => async id => {
      try {
        const reviews = await API.getMovieReviews(id);

        if (!reviews) {
          return;
        } else {
          // console.log(reviews.cast);
          setReviews(reviews);
        }
      } catch (error) {
        toast.error(error);
      }
    },
    []
  );
  useEffect(() => {
    // console.log(`рендер`);
    getMovieReviews(Number(id));
  }, [getMovieReviews, id]);

  if (!reviews || reviews.length === 0)
    return <p>No information about reviews</p>;
  else
    return (
      <Box p={4} borderTop="1px solid black">
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              {review.author_details.name ? (
                <b>Author: {review.author_details.name}</b>
              ) : (
                <b>Author: {review.author_details.username}</b>
              )}
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </Box>
    );
};
export default Reviews;
