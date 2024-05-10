export const CHANGE_FAVORITE = "CHANGE_FAVORITE";

export const changeFavorite = (id) => {
  return {
    type: CHANGE_FAVORITE,
    id: id
  }
}