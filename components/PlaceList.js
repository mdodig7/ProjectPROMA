import * as React from 'react';
import { 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  View, 
  Text, 
} from 'react-native';

const PlaceList = (props) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.details}>
      <Image style={styles.picture} source={props.image}/>     
      <View style={{padding:5}}>
        <Text style={{fontWeight: "bold", fontSize: 17, marginLeft:7}}>{props.name}</Text>
        <Text style={{fontSize:16, marginLeft:7}}>{props.location}</Text>
        <Text style={{fontSize:19, marginLeft:110, color: "#83C54C",fontWeight: "bold"}}>{props.price} €</Text> 
      </View>
    </TouchableOpacity> 
  );
};

const styles = StyleSheet.create({

  cardContainer: {
    backgroundColor: '#F4F4F4',
    borderRadius: 12,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginVertical:20,
    width:170,
    height:280 
  },

  picture:{
    alignItems: "center",
    width: 170,
    height: 200,
    borderTopLeftRadius:16,
    borderTopRightRadius: 16,
    }
  });

export default PlaceList;
