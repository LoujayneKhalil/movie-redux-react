import { HANDLE_CLICK, CLOSE_MODAL } from "./popup.actions";

const initialState = {
  isModalOpen: false,
  selectedCard: null,
};

export const selectedCardReducer = (
  state = initialState.selectedCard,
  action
) => {
  switch (action.type) {
    case "SET_SELECTED_CARD":
      return action.payload;
    case "CLEAR_SELECTED_CARD":
      return null;
    default:
      return state;
  }
};

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CLICK:
      return {
        ...state,
        isModalOpen: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    case "SET_DATA":
      return action.payload;

    case "CLEAR_SELECTED_CARD":
      return null;
      
    default:
      return state;
  }
};

// export default popupReducer;
