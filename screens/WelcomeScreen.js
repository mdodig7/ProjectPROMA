import React from "react";
import {StyleSheet} from "react-native";
import {useSelector} from 'react-redux';
import Welcome from '../components/Welcome';
import {View} from "react-native";

const WelcomeScreen = ({navigation}) => 
{
  const userForLogin = useSelector((store) => store.user.user);
  const isUserLogin = useSelector((store) => store.userLogin.userLogin);   

  return (
  <View>
    <Welcome
      username={userForLogin.username}
      book={() => {navigation.navigate("Root")}}
    />
   </View>
  )
}

const styles = StyleSheet.create({ 

});

export default WelcomeScreen;