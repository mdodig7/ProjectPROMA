import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const Register = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={require('../assets/login.png')}/>
        </View>
        <View style={styles.section}>
          <TextInput
            style={styles.textInput}
            onChangeText={props.username}
            placeholder="Enter Username"
            placeholderTextColor="#8b9cb5"
          />
        </View>
        {props.errortextUsername != '' ? (
          <Text style={styles.errorTextStyle}>
            {props.errortextUsername}
          </Text>
        ) : null}
        <View style={styles.section}>
          <TextInput
            style={styles.textInput}
            onChangeText={props.email}
            underlineColorAndroid="#f000"
            placeholder="Enter Email"
            placeholderTextColor="#8b9cb5"
          />
        </View>
        {props.errortextEmail != '' ? (
          <Text style={styles.errorTextStyle}>
            {props.errortextEmail}
          </Text>
        ) : null}
        <View style={styles.section}>
          <TextInput
            style={styles.textInput}
            onChangeText={props.password}
            underlineColorAndroid="#f000"
            placeholder="Enter Password"
            placeholderTextColor="#8b9cb5"
          />
        </View>
        {props.errortextPassword != '' ? (
          <Text style={styles.errorTextStyle}>
            {props.errortextPassword}
          </Text>
        ) : null}
        <View style={styles.section}>
          <TextInput
            style={styles.textInput}
            onChangeText={props.confirmPassword}
            underlineColorAndroid="#f000"
            placeholder="Confirm Password"
            placeholderTextColor="#8b9cb5"
          />
        </View>
        {props.errortextConfirmPassowrd != '' ? (
          <Text style={styles.errorTextStyle}>
            {props.errortextConfirmPassowrd}
          </Text>
        ) : null}
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={props.register}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

  image: {
    marginTop: 150,
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    margin: 30
  },

  section: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },

  textInput: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },

  button: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
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
    marginLeft: 50,
    fontSize: 14,
  }
});

export default Register;