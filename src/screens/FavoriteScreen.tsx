

import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const data = [
  
];

const Item = ({ title, price, imageUrl, onPress }) => (
  <TouchableOpacity onPress={onPress}>
  <View style={styles.item}>
    <Image source={require('../../images/timothy-dykes-LhqLdDPcSV8-unsplash.jpg')} style={{
                    width: Dimensions.get('window').width,
                    height: 300,
                    resizeMode: 'cover', 
                  
                }} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.price}>{price}</Text>
  </View>
  </TouchableOpacity>  
);

const FavoriteScreen = ({ navigation}) => {
    const dispatch = useDispatch()
    const [elements, setElements] = useState([]);
    const {products} = useSelector(state => state.productsSlice)
    const allProducts = products.flatMap(category =>
        category.data[0].list.map(product => ({
          ...product,
          key: category.key
        }))
      );
    const favoriteProducts = allProducts.filter(product => product.isFavorite);

  const renderItem = ({ item }) => (
    <Item title={item.title} price={item.price} imageUrl={item.imageUrl} onPress={() => onPressButton(item, item.key)} />
  );

  const onPressButton = (item: any, title: string) => {
  console.log(item, title)
    navigation.navigate('HomeDetails', {item, title})
}

useEffect(() => {
    console.log(products)
})

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteProducts}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
   
    paddingHorizontal: 20,
    marginBottom: 10,
    
  },
  image: {
    width: 300,
    height: 300,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FavoriteScreen;