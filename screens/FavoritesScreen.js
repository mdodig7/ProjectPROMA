import React from "react";
import { 
  StyleSheet, 
  View,  
  Image,
  Text, 
  SafeAreaView,
  FlatList
} from "react-native";
import PlaceList from '../components/PlaceList';
import {useSelector} from 'react-redux'

const FavoritesScreen = (props) => 
{
  const favoriti = useSelector((store) => store.places.favorites);

  if(favoriti.length === 0)
  {
    return(
      <View style={styles.container}>
        <Image style={{width:80, height:80}} source={require('../assets/favorites.jpg')}/>
        <Text style={{fontWeight: "bold"}}>No favorites yet</Text>
        <Text style={{color: "grey"}}>Mark your favorite places and always have them here. </Text>
      </View>
    );
  }

  const prikazElelementa = (podaci) => {
    return ( 
        <PlaceList name={podaci.item.name} 
            location={podaci.item.location}
            image={podaci.item.image}
            price={podaci.item.price} 
            details={() => props.navigation.navigate('Details',{id:podaci.item.id})}>
        >
        </PlaceList>
    );
  }; 

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <View style={styles.header}>
        <View style={{paddingBottom: 15}}>
          <Text> </Text>
            <Text style={{fontSize: 40, fontWeight: 'bold', marginTop:25}}>
              Favorites 
            </Text>
        </View>
      </View>
      <FlatList 
            showsVerticalScrollIndicator={false}
            style={{alignItems:"center"}} 
            data={favoriti} 
            renderItem={prikazElelementa} 
            numColumns={1}/> 
    </SafeAreaView>
  );
}

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
    backgroundColor: "white"
  }
});
export default FavoritesScreen;