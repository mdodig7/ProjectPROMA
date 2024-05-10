import React, {useState, useEffect} from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Dimensions, 
  TextInput, 
  Button, 
  Image, 
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from "react-native";
import PlaceList from '../components/PlaceList';
const { width, height } = Dimensions.get('window');
import {useSelector} from 'react-redux'
import SearchBar from "../components/SearchBar"
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({navigation}) => 
{  
    useEffect(()=>{
      navigation.setOptions({ title: "Title"})
  },[navigation])

  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const places = useSelector((store) => store.places.places);
  
  const prikazElelementa = (podaci) => {

    if(podaci.item.location.toLowerCase().includes(search.toLowerCase()) || podaci.item.name.toLowerCase().includes(search.toLowerCase()))
    {
      return ( 
          <PlaceList name={podaci.item.name} 
                    location={podaci.item.location}
                    image={podaci.item.image}
                    price={podaci.item.price} 
                    details={() => navigation.navigate('Details',{id:podaci.item.id})}
                    numColumns={1}
          />
        );
    }
  }; 

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <View style={styles.header}>
        <View style={{paddingBottom: 15}}>
          <Text> </Text>
          <Text style={{fontSize: 50, fontWeight: 'bold'}}>
              Find your next  
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 50, fontWeight: 'bold'}}> travel </Text>
            <Text
              style={{fontSize: 55, fontWeight: 'bold', color: "#F2993C"}}>
              destination
            </Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar
            value={search}
            onChangeText={setSearch}
        />
        <FlatList 
            columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal:3, marginHorizontal:3}} 
            data={places} 
            renderItem={prikazElelementa} 
            numColumns={2}/> 
      </ScrollView>
    </SafeAreaView>
    )  
}

const styles = StyleSheet.create({
   header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  }
});

export default HomeScreen;