import React, {useState, useEffect} from "react";
import { 
  StyleSheet, 
  ScrollView
} from "react-native";
import DetailCard from "../components/DetailCard"
import {useSelector, useDispatch} from 'react-redux';
import { changeFavorite } from "../store/actions/places";

const DetailScreen = ({route,navigation}) => 
{
  const {id} = route.params; 

  const places = useSelector(store => store.places.places); 
  const place = places.find((place) => place.id === id);

  const favorites = useSelector((store) => store.places.favorites);
  const favorite = favorites.find((fav) => fav.id === id);
  const [iconName, setIconName] = useState("");

  const dispatch = useDispatch();

  useEffect(()=>{ 
    if(favorite){
      setIconName("heart")
    } 
    else{
        setIconName("hearto");
    } },[favorite])

  const changeFavouriteState = () => {
    dispatch(changeFavorite(id))
  } 

  return ( 
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: "white",
        paddingBottom: 20
      }}>
        <DetailCard name={place.name} 
            location={place.location}
            date={place.date}
            image={place.image}
            price={place.price} 
            detail={place.detail}
            favorite={changeFavouriteState}
            iconName={iconName}
            booking={() => {navigation.navigate("Booking",{id})}}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

});

export default DetailScreen;