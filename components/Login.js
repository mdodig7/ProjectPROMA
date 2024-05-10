import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

const Login = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/login.png")} />    
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={props.username}
          value={props.usernameValue}
        />  
      </View>
      {props.errortextUsername != '' ? (
          <Text style={styles.errorTextStyle}>
          {props.errortextUsername}
          </Text>
        ) : null}
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={props.password}
          value={props.passwordValue}
        />
      </View>
      {props.errortextPassword != '' ? (
           <Text style={styles.errorTextStyle}>
            {props.errortextPassword}
          </Text>
        ) : null}
      <TouchableOpacity style={styles.loginBtn} onPress={props.login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View  style={{flexDirection: "row", marginTop: 10}}>
        <Text>Don't have an account yet?</Text>
        <TouchableOpacity onPress={props.register}>
          <Text style={{color:"blue"}}> Sign up</Text>
        </TouchableOpacity> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }, 

  image: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },

   inputView: {
    backgroundColor: "#C0CBff",
    borderRadius: 30,
    width: "65%",
    height: 40,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },

    textInput: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    alignItems: "center",
    marginTop: 25,
    backgroundColor: "#b6ffa7",
    paddingVertical: 10,
  },

  errorTextStyle: {
    color: 'red',
    marginRight: 70,
    fontSize: 14,
  }
});

export default Login;