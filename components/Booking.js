import React from 'react';
import { 
  StyleSheet, 
  ScrollView,
  View, 
  Text, 
  TextInput,
  TouchableOpacity
} from "react-native";
import { RadioButton } from 'react-native-paper';

const Booking = (props) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.section}>
          <Text style={styles.text}>Name: </Text>
          <TextInput style={styles.textInput} placeholder="    enter name" value={props.name} onChangeText={props.setName}/>
        </View>
        {props.errortextName != '' ? (
            <Text style={styles.errorTextStyle}>
            {props.errortextName}
            </Text>
        ) : null}
        <View style={styles.section}>
          <Text style={styles.text}>Surname: </Text>
          <TextInput style={styles.textInput} placeholder="    enter surname" value={props.surname} onChangeText={props.setSurname}/>
        </View>
        {props.errortextSurname != '' ? (
            <Text style={styles.errorTextStyle}>
            {props.errortextSurname}
            </Text>
        ) : null}
        <View style={styles.section}>
          <Text style={styles.text}>Address: </Text>
          <TextInput style={styles.textInput} placeholder="    enter address" value={props.address} onChangeText={props.setAddress}/>
        </View>
        {props.errortextAddress != '' ? (
            <Text style={styles.errorTextStyle}>
            {props.errortextAddress}
            </Text>
        ) : null}
        <View style={styles.section}>
          <Text style={styles.text}>Postal code: </Text>
          <TextInput keyboardType='numeric' maxLength={5} style={styles.textInput} placeholder="    enter postal code" value={props.postalCode} onChangeText={props.setPostalCode}/>
        </View>
        {props.errortextPostalCode != '' ? (
            <Text style={styles.errorTextStyle}>
            {props.errortextPostalCode}
            </Text>
        ) : null}
        <View style={styles.section}>
          <Text style={styles.text}>City: </Text>
          <TextInput style={styles.textInput} placeholder="    enter city" value={props.city} onChangeText={props.setCity}/>
        </View>
        {props.errortextCity != '' ? (
            <Text style={styles.errorTextStyle}>
            {props.errortextCity}
            </Text>
        ) : null}
        <View style={styles.section}>
          <Text style={styles.text}>Country: </Text>
          <TextInput style={styles.textInput} placeholder="    enter country" value={props.country} onChangeText={props.setCountry}/>
        </View>
        {props.errortextCountry != '' ? (
            <Text style={styles.errorTextStyle}>
            {props.errortextCountry}
            </Text>
        ) : null}
        <View style={{marginLeft: 20}}>
          <Text style={styles.text}>Payment</Text>
          <View style={{flexDirection:'row', marginLeft: 60}}>
            <RadioButton value="Cash" status={ props.checked === 'Cash' ? 'checked' : 'unchecked' } onPress={props.cash} />
            <Text>Cash</Text>
          </View>
          <View style={{flexDirection:'row', marginLeft: 60}}>
            <RadioButton value="Card"
          status={ props.checked === 'Card' ? 'checked' : 'unchecked' } onPress={props.card} />
            <Text>Card</Text>
          </View>
          {props.checked === "Card" ? (
            <View>
              <View style={styles.inputViewCard}>
                <Text style={styles.text}>Card Number:</Text>
                <TextInput keyboardType='numeric' maxLength={16} style={styles.textInputCard} value={props.cardNumber} onChangeText={props.setCardNumber}/>
              </View>
              {props.errortextCardNumber != '' ? (
                <Text style={styles.errorTextStyle}>
                {props.errortextCardNumber}
                </Text>
              ) : null}
              <View style={styles.inputViewCard}>
                <Text style={styles.text}>Name on card: </Text>
                <TextInput style={styles.textInputCard} value={props.nameOnCard} onChangeText={props.setNameOnCard}/>
              </View>
              {props.errortextNameOnCard != '' ? (
                <Text style={styles.errorTextStyle}>
                {props.errortextNameOnCard}
                </Text>
              ) : null}
              <View style={{flexDirection:'row'}}>
                <View style={styles.textInputExpirationDate}>
                  <Text style={styles.text}>Expiration Date:</Text>
                  <TextInput keyboardType='numeric' maxLength={4} style={styles.textInputCard} value={props.expirationDate} onChangeText={props.setExpirationDate}/>
                </View>
                <View style={styles.textInputCvv}>
                  <Text style={styles.text}>CVV: </Text>
                  <TextInput keyboardType='numeric' maxLength={3} style={styles.textInputCard} value={props.cvv} onChangeText={props.setCvv}/>
                </View>
              </View>
              {props.errortext != '' ? (
                  <Text style={styles.errorTextStyle}>
                  {props.errortext} 
                  </Text>
              ) : null}
            </View>
          ) : null }
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={props.createBooking}>
            <Text style={styles.buttonText}>Book</Text>
        </TouchableOpacity>
      </View>
     </ScrollView>
  );
};

const styles = StyleSheet.create({

  section: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 35,
    margin: 10,
  },

  text: {
    fontWeight: "bold",
    color: "#444444",
    marginTop: 10,
    fontSize: 16
  },

 textInput: {
   fontsize: 14,
    flex: 1,
    paddingLeft: 5,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
  },

    inputViewCard: {
    flexDirection:'row', 
    width: "70%",
    height: 30,
    margin: 10
  },

  textInputExpirationDate: {
    flexDirection:'row', 
    width: "50%", 
    height: 30, 
    margin: 10
  },

  textInputCvv: {
    flexDirection:'row', 
    width: "30%", 
    height: 30, 
    margin: 10
  },

  textInputCard: {
    flex: 1,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: '#dadae8',
  },

  button: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  
  errorTextStyle: {
    color: 'red',
    marginRight: 70,
    fontSize: 14,
    marginLeft: 80
  }
});

export default Booking;