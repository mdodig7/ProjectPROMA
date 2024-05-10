export const ADD_BOOKING = "ADD_BOOKING";

export const addBooking = (booking) => {
  return {
    type: ADD_BOOKING,
    booking: booking
  }
}
