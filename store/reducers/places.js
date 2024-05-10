import {PLACES} from "../../data/Places"
import {CHANGE_FAVORITE} from "../actions/places"

const initialState = {
  places:PLACES,
  favorites: []
}

const placeReducer = (state = initialState, action) => {
  const selected = state.favorites.findIndex((place) => place.id === action.id);
  switch (action.type) {
    case CHANGE_FAVORITE:
      if (selected > -1) {
        const newFavorites = [...state.favorites]; 
        newFavorites.splice(selected,1); //uklanja 1 element niza po indexu
        return { ...state, favorites: newFavorites }; 
      }
      else {
        const place = state.places.find((place) => place.id === action.id);
        return { ...state, favorites: state.favorites.concat(place),
      };
    }
    default:
      return state;
  }
}

export default placeReducer