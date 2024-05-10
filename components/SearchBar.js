import React from 'react';
import { 
  StyleSheet, 
  View, 
  TextInput 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = (props) => {
  return (
    <View style={styles.searchInput}>
      <Icon name="search" size={25} color="grey" style={{marginLeft: 10}} />
      <TextInput
        placeholder="Search here..."
        value={props.value}
        onChangeText={props.onChangeText}
        style={{fontSize: 16, paddingLeft: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  searchInput: {
    height: 40,
    backgroundColor: "#eeeeee",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 35,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default SearchBar;