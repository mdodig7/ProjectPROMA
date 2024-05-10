import React from 'react';
import { 
  StyleSheet,
  View, 
  Text, 
  Image,
  TouchableOpacity
} from "react-native";

const Thankyou = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <View style={styles.header}>
        <View style={{paddingBottom: 15}}>
          <Text> </Text>
          <Text style={{fontSize: 40, fontWeight: 'bold', marginTop:25}}>
            Booking details
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop:55}}>
        <Image style={styles.image} source={require('../assets/details.png')}/> 
        <View style={{justifyContent: 'center'}}>   
          <Text style={{fontSize: 18,color: "grey",marginLeft: 30}}>{props.username} {props.surname}</Text>
          <Text style={{fontSize: 18,color: "grey",marginLeft: 30}}>{props.address}</Text>
          <Text style={{fontSize: 18,color: "grey",marginLeft: 30}}>{props.postalCode}</Text>
          <Text style={{fontSize: 18,color: "grey",marginLeft: 30}}>{props.city}</Text>
          <Text style={{fontSize: 18,color: "grey",marginLeft: 30}}>{props.country}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Destination: </Text><Text style={{fontSize: 18,color: "grey"}}>{props.name}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Location: </Text><Text style={{fontSize: 18,color: "grey"}}>{props.location}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Date: </Text><Text style={{fontSize: 18,color: "grey"}}>{props.date}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Price: </Text><Text style={{fontSize: 18, color: "grey"}}>{props.price}€</Text>
          </View>
        </View>          
      </View>
      <View style={{marginTop: 40, alignItems: 'center'}}>
        <Text style={{fontSize: 25}}>Thank you {props.username} {props.surname} for booking! Enjoj! </Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={props.home}>
          <Text style={{color: "white", fontSize: 18, fontWeight: 'bold'}}>
            Go to Home page
          </Text>  
        </TouchableOpacity>  
      </View>     
    </View>
  );
};

const styles = StyleSheet.create({

   header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  image: {
    width:80, 
    height:100, 
    marginLeft:20
  },

  button: {
    height: 40,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    backgroundColor: "#F6B26B",
    marginHorizontal: 95,
    borderRadius: 10,
  },

  text: {
    fontSize: 18, 
    fontWeight: 'bold',
    marginLeft: 30,
  }
});

export default Thankyou;