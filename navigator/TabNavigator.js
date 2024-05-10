import React, {useEffect} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {View} from 'react-native'
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import HistoryScreen from "../screens/HistoryScreen";
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import {useDispatch} from 'react-redux';
import { LOGOUT } from '../store/actions/users';

const Tab = createMaterialBottomTabNavigator();

const LogOut = ({ navigation }) => {

  const dispatch = useDispatch();

  useEffect(()=> {
      dispatch({ type: LOGOUT });

    // Navigate to the login screen
    navigation.replace('Login');
  }, [dispatch, navigation])

  return (
    <View/>
  );
}

const TabNavigator = () => {
  return (
     <Tab.Navigator initialRouteName="Welcome" barStyle={{ backgroundColor: '#45818E' }} labeled={false}>
        <Tab.Screen name="Home" component={HomeScreen}  
          options={{
          tabBarIcon: () => (<AntDesign name="home" size={24} color="#EEEEEE" />)    
          }}/>       
        <Tab.Screen name="Favorites" component={FavoritesScreen} 
          options={{
          tabBarIcon: () => (<AntDesign name="hearto" size={24} color="#EEEEEE" />)
       }}/> 
       <Tab.Screen name="History" component={HistoryScreen}  
          options={{
          tabBarIcon: () => (<FontAwesome5 name="history" size={24} color="#EEEEEE" />)
          }}/> 
          <Tab.Screen name="LogOut" component={LogOut}  
          options={{
          tabBarIcon: () => (<MaterialIcons name="logout" size={24} color="#EEEEEE" />)
          }}/> 
      </Tab.Navigator>    
  )
};

export default TabNavigator;
