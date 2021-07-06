const SET_CART = 'SET_CART'; //Загрузить тележку с сервера
const CLEAR_CARD = 'CREAR_CARD'; //Очистить тележку



const defaultCardList = {
  cardList: [],
  fullPrice: 0
}

export const cardReducer = (state = defaultCardList, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cardList: [...action.payload.currentProduct],
        fullPrice: action.payload.fullPrice
      }
      case CLEAR_CARD:
      return {
        ...state,
        cardList: [],
        fullPrice: 0
      }
  
    default:
      return state;
  }
}

export const setCard = data => ({type: SET_CART, payload: data});
export const clearCard = () => ({type: CLEAR_CARD});