import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStore, combineReducers} from 'redux'
import placeReducer from './store/reducers/places'
import userReducer from './store/reducers/users'
import bookingReducer from './store/reducers/bookings'
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TabNavigator from "./navigator/TabNavigator";
import WelcomeScreen from "./screens/WelcomeScreen";
import DetailScreen from "./screens/DetailScreen";
import BookingScreen from "./screens/BookingScreen";
import ThankYouScreen from "./screens/ThankYouScreen";
 
const Stack = createNativeStackNavigator();

// Spajanje svih reducera u jedan objekt
const mainReducer = combineReducers({
  places: placeReducer,
  favourites: placeReducer,
  users: userReducer,
  user: userReducer,
  userLogin: userReducer,
  bookings: bookingReducer
});

// Centralni spremnik
const store = createStore(mainReducer);

export default function App() { 
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Login"
          component={LoginScreen} 
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="Register"
          component={RegisterScreen}
          options={{
            title:'Back'
            }}
          />
          <Stack.Screen
            name="Root"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Details"
            component={DetailScreen}
            options={{
              title: 'Back'
            }}
          />
          <Stack.Screen
            name="Booking"
            component={BookingScreen}
            options={{
              title: 'Back',
            }}
          />
          <Stack.Screen
            name="ThankYou"
            component={ThankYouScreen}
            options={{headerShown: false}}
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
