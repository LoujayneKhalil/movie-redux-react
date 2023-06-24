import { CLOSE_MODAL, OPEN_MODAL } from "./popup.actions";

const initialState = {
  selectedCard: null,
};

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        selectedCard: action.payload,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        selectedCard: null,
      };

    default:
      return state;
  }
};
