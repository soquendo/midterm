import { Dispatch } from 'redux';

export const openModal = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'OPEN_MODAL' });
  };
};

export const closeModal = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
};