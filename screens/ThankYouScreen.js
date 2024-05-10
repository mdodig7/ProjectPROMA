import React from "react";
import {StyleSheet} from "react-native";
import ThankYou from '../components/ThankYou';
import {useSelector} from 'react-redux';

const ThankYouScreen = ({route,navigation}) => 
{
  const {booking} = route.params; 
  const bookings = useSelector((store) => store.bookings.bookings);

  return (
    <ThankYou
      username={booking.user.name}
      surname={booking.user.surname}
      address={booking.user.address}
      postalCode={booking.user.postalCode}
      city={booking.user.city}
      country={booking.user.country}
      name={booking.place.name}
      location={booking.place.location}
      date={booking.place.date}
      price={booking.place.price}
      home={() => {navigation.navigate('Root')}}
    /> 
  )
}

const styles = StyleSheet.create({

});

export default ThankYouScreen;