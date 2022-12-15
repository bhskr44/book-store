import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Categories = () => {
  const dispatch = useDispatch();

  const checkStatus = () => {
    dispatch({ type: 'check-status' });
  };

  const handleOnclick = () => {
    checkStatus();
  };

  const status = useSelector((state) => state.categories);

  return (
    <div className="categories">
      <p>{status}</p>
      <button type="button" onClick={handleOnclick}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
