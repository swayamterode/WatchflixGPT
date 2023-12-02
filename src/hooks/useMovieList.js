import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedMovieId } from '../utils/movieSlice';

const useMovieList = () => {
  const dispatch = useDispatch();
  const [isBlackScreenVisible, setIsBlackScreenVisible] = useState(false);
  const [clickedMovieId, setClickedMovieId] = useState(null);

  const handleMovieID = (movieId) => {
    dispatch(setSelectedMovieId(movieId));
    setIsBlackScreenVisible(true);
    setClickedMovieId(movieId);
  };

  const handleBlackScreenClick = () => {
    setIsBlackScreenVisible(false);
    setClickedMovieId(null);
  };

  return {
    isBlackScreenVisible,
    clickedMovieId,
    handleMovieID,
    handleBlackScreenClick,
  };
};

export default useMovieList;
