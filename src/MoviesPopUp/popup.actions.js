export const HANDLE_CLICK = "HANDLE_CLICK";

export const CLOSE_MODAL = "CLOSE_MODAL";

export const setSelectedCard = (card) => ({
  type: 'SET_SELECTED_CARD',
  payload: card,
});


export const clearSelectedCard = () => ({
  type: 'CLEAR_SELECTED_CARD',
});


export const handleClick = () => ({
  type: HANDLE_CLICK,
});
export const closeModal = () => ({
  type: CLOSE_MODAL,
});
