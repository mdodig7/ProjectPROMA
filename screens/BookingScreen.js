import React, {useState} from "react";
import {StyleSheet} from "react-native";
import { RadioButton } from 'react-native-paper';
import Booking from '../components/Booking'
import {useSelector, useDispatch} from 'react-redux';
import { addBooking } from "../store/actions/bookings";

const BookingScreen = ({route,navigation}) => 
{ 
  const {id} = route.params;
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [checked, setChecked] = React.useState('Cash');
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [errortextName, setErrortextName] = useState("");
  const [errortextSurname, setErrortextSurname] = useState("");
  const [errortextAddress, setErrortextAddress] = useState("");
  const [errortextPostalCode, setErrortextPostalCode] = useState("");
  const [errortextCity, setErrortextCity] = useState("");
  const [errortextCountry, setErrortextCountry] = useState("");
  const [errortextCardNumber, setErrortextCardNumber] = useState("");
  const [errortextNameOnCard, setErrortextNameOnCard] = useState("");
  const [errortext, setErrortext] = useState("");
  const [valid, setValid] = useState(true);

  const places = useSelector(store => store.places.places); 
  const place = places.find((place) => place.id === id);

  const userForLogin = useSelector((store) => store.user.user);

  const bookings = useSelector((store) => store.bookings.bookings);
  const dispatch = useDispatch();

  const createBooking = () => {
    setErrortextName('');
    setErrortextSurname('');
    setErrortextAddress('');
    setErrortextPostalCode('');
    setErrortextCity('');
    setErrortextCountry('');
    setErrortextCardNumber('');
    setErrortextNameOnCard('');
    setErrortext('');
    let ok = true;
    
     if (name === '') {
      setErrortextName('Please fill name!');
      ok = false; 
    } 

    if (surname === '') {
      setErrortextSurname('Please fill surname!');
      ok = false; 
    } 

    if (address === '') {
      setErrortextAddress('Please fill address!');
      ok = false; 
    } 

    if (postalCode.length !== 5) {
      setErrortextPostalCode('Postal code is not valid!');
      ok = false; 
    } 

    if (city === '') {
      setErrortextCity('Please fill city!');
      ok = false; 
    } 
    
    if (country === '') {
      setErrortextCountry('Please fill country!');
      ok = false; 
    } 

    if(checked === "Card")
    {
      if (cardNumber.length !== 16) {
        setErrortextCardNumber('Card number is not valid!');
        ok=false;
      }

      if (nameOnCard === '') {
        setErrortextNameOnCard('Please fill Name on card!');
        ok=false;
      }

      if (cvv.length !== 3) {
        setErrortext('Card Verification Value is not valid!');
        ok=false;
      }
      
      if (expirationDate.length !== 4) {
        setErrortext('Expiration date is not valid!');
        ok=false;
      }
    }
    setValid(ok);
      
    var booking = {
      id:bookings.length,
      user: {
        id: userForLogin.id,
        name: name,
        surname: surname,
        address: address,
        postalCode: postalCode,
        city: city,
        country: country,
        checked: checked
       },
      place:place 
    };

    if(ok)
    {
      dispatch(addBooking(booking))
      navigation.navigate('ThankYou',{booking})
    }
  };

  return (
    <Booking
      name={name} 
      setName={(tekst) => {setName(tekst)}}
      errortextName={errortextName}
      surname={surname}
      setSurname={(tekst) => {setSurname(tekst)}}
      errortextSurname={errortextSurname}
      address={address}
      setAddress={(tekst) => {setAddress(tekst)}}
      errortextAddress={errortextAddress}
      postalCode={postalCode}
      setPostalCode={(tekst) => {setPostalCode(tekst)}}
      errortextPostalCode={errortextPostalCode}
      city={city}
      setCity={(tekst) => {setCity(tekst)}}
      errortextCity={errortextCity}
      country={country}
      setCountry={(tekst) => {setCountry(tekst)}}
      errortextCountry={errortextCountry}
      checked={checked}
      card={() => setChecked('Card')}
      cash={() => setChecked('Cash')}
      cardNumber = {cardNumber}
      setCardNumber = {(tekst) => {setCardNumber(tekst)}}
      errortextCardNumber={errortextCardNumber}
      nameOnCard = {nameOnCard}
      setNameOnCard = {(tekst) => {setNameOnCard(tekst)}}
      errortextNameOnCard={errortextNameOnCard}
      expirationDate = {expirationDate}
      setExpirationDate= {(tekst) => {setExpirationDate(tekst)}}
      cvv = {cvv}
      setCvv = {(tekst) => {setCvv(tekst)}}
      errortext={errortext}
      createBooking={createBooking}
    />
  )
};

const styles = StyleSheet.create({

});

export default BookingScreen;