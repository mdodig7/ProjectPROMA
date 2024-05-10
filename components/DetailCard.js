import React, {useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  ImageBackground,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailCard = (props) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="white"
      />
      <ImageBackground style={styles.picture} resizeMode="cover" source={ props.image}>
        <View style={styles.header}>
          <TouchableOpacity onPress={props.favorite}>
            <AntDesign name={props.iconName} size={24} color="white" />
          </TouchableOpacity>   
        </View>
      </ImageBackground>
      <View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#6D6464'}}>{props.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Entypo name="location-pin" size={22} color="black"/>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400', 
                color: "grey",
                marginTop: 5,
              }}>
              {props.location}
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{lineHeight: 20, color: "grey"}}>
              {props.detail}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{ fontSize: 20, marginTop: 8}}> {props.date}</Text>
            <View style={styles.priceTag}>
              <Text style={{fontSize: 20, color: "white"}}> 
                Price: 
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: "white",
                  marginLeft: 7,
                }}>
                {props.price}€
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={props.booking}>
          <View style={styles.button}>
            <Text style={{color: "white", fontSize: 18, fontWeight: 'bold'}}>
              Book Now
            </Text>
          </View>    
        </TouchableOpacity>    
      </View>    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  picture:{
    width: "100%",
    height: 400,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
  },

  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },

  button: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: "#3D85C6",
    marginHorizontal: 20,
    borderRadius: 10,
  },

  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 70,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: "#34B654",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  }
});
  
export default DetailCard;