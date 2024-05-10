import React, {useState} from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView,
  ScrollView ,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {useSelector} from 'react-redux';
 
const HistoryScreen = ({navigation}) => 
{ 
  const bookings = useSelector((store) => store.bookings.bookings);

  if(bookings.length === 0)
  {
    return(
      <View style={styles.container}>
        <Ionicons name="alert-circle-outline" size={30} />
        <Text style={{color: "grey"}}> There is no history to show </Text>
      </View>
    );
  }
 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <View style={styles.header}>
        <View style={{paddingBottom: 15}}>
          <Text> </Text>
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>                                             Booking history  
          </Text>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding: 50}}>
        <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.flatlista}
            data={bookings}
            renderItem={(el) => (
              <View style={styles.lista}>
                <Text> {el.item.user.name} {el.item.user.surname} </Text>
                <Text> {el.item.user.address}</Text>
                <Text> {el.item.user.postalCode}, {el.item.user.city}</Text>
                <Text> {el.item.user.country}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text}> Payment: </Text>
                  <Text> {el.item.user.checked}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text}> Destination: </Text>
                  <Text> {el.item.place.name}, {el.item.place.location}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text}> Date: </Text>
                  <Text> {el.item.place.date}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.text}> Price: </Text>
                  <Text> {el.item.place.price} €</Text>
                </View>
              </View>
            )}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  
   header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  }, 
  
   container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 50,
  },

  flatlista: {
    width: 270,
    margin: 10,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    alignItems: 'center'
    },
  
  lista: {
    padding: 5,
    marginVertical: 7,
    borderRadius: 7,
    backgroundColor: '#EEEEEE',
    width: 200,
    height: 150,
    textAlignVertical: 'center',
  },

  text: {
    fontSize:14,
    fontWeight: "bold"
  }
});

export default HistoryScreen;