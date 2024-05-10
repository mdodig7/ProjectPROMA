import React from 'react';
import { 
  StyleSheet, 
  ImageBackground, 
  View, 
  Text, 
  Button, 
  Dimensions 
} from "react-native";

const Welcome = (props) => {

  return (
    <ImageBackground style={styles.picture} source={require('../assets/welcome.jfif')}>
      <View style={styles.header}>
        <View style={{paddingBottom: 15}}>
          <Text> </Text>
          <Text style={styles.text}>
              Hello {props.username}!
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Welcome to our page! </Text>
          </View>
          <View style={{ marginTop: 15}}>
            <Button title="BOOK A TRIP" onPress={props.book} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  }, 

  picture:{
    width: "100%", 
    height: "100%" 
  },

  text: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: "#999999"
  }
});

export default Welcome;