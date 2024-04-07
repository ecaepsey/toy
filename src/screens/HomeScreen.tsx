

import React, { useState } from 'react';
import { View, Text, Button, SectionList, StyleSheet, StatusBar, TextInput, FlatList, TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {searchProducts} from '../features/favorite/productsSlice'

const HomeScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
 
  const {products} = useSelector(state => state.productsSlice)
  const dispatch = useDispatch();
  const handleSearchProducts = (text) => {
    setSearchQuery(text)
    dispatch(searchProducts({ query: text }));
    console.log(text)
  };


  const renderFlatListItem = ({ item }: any, title: string) => (
    
    <TouchableWithoutFeedback onPress={() => onPressButton(item, title)}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'gray',
          margin: 10, height: 140,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>{item.title}</Text>
      </View>

    </TouchableWithoutFeedback>





  );

  const onPressButton = (item: {name: string, color: string}, title: string) => {
      navigation.navigate('HomeDetails', {item, title})
  }

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: '#999',
          borderWidth: 1,
          margin: 8,
          borderRadius: 12,
          paddingHorizontal: 10

        }}
        placeholder="Поиск"
        onChangeText={handleSearchProducts}
        value={searchQuery}
      />
      <SectionList

        sections={products}
        keyExtractor={(item, index) => index + item.key}
        renderItem={({ item }) => (
          <FlatList
            data={item.list}
            numColumns={2}

            renderItem={(list) => renderFlatListItem(list, item.key)}
            keyExtractor={(item, index) => index + item.name}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.header}>{title}</Text>
           
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,

  },
  item: {



  },
  header: {
    fontSize: 32,
    
  },
  title: {
    fontSize: 24,
  },
});

export default HomeScreen;