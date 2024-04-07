import { View, Text, Button, SectionList, StyleSheet, StatusBar, TextInput, FlatList, Image, Dimensions, Alert } from 'react-native';
import React, { useState } from 'react';
import ToggleIcon from '../components/Filled';
import { useDispatch } from 'react-redux';
import { toggleFavorite, addToCart } from '../features/favorite/productsSlice';

const HomeDetailScreen = ({ route, navigation }: any) => {
    const { item, title} = route.params
    const dispatch = useDispatch()
    const [filled, setFilled] = useState(item.isFavorite);
   
    console.log(item, title)
    const handleToggleFavorite = () => {
       
        // State to track whether the icon is filled or not
  
        
        setFilled(!filled);
        dispatch(toggleFavorite({ categoryId: title, productId: item.id}));
        
      };

      const handleAddToCart = () => {
        dispatch(addToCart({ productId: item.id }));
      }

     
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'space-between', paddingVertical: 16 }}>
            <View>
                <Image source={require('../../images/timothy-dykes-LhqLdDPcSV8-unsplash.jpg')} style={{
                    width: Dimensions.get('window').width,
                    height: 300,
                    resizeMode: 'cover',
                }} />
                <View style={{ position: 'absolute', right: 0 }}>
                    <ToggleIcon onPress={() => handleToggleFavorite()} isFavorite={filled} />
                </View>
            </View>




            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingBottom: 16 }}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Rare batterfly</Text>
                        <Text style={{ color: '#ccc' }}>By tomhanson</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>$2000</Text>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, excepturi.</Text>
                </View>

                <View style={{ paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', gap: 16 }}>
                    <View style={{ flex: 1 }}>
                        <Text>Lorem, ipsum.</Text>
                        <Text>Lorem, ipsum dolor.</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>Lorem, ipsum.</Text>
                        <Text>Lorem, ipsum dolor.</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>Lorem, ipsum.</Text>
                        <Text>Lorem, ipsum dolor.</Text>
                    </View>

                </View>

            </View>



            <View>
                <Button title='Добавить в корзину' color='red' onPress={handleAddToCart} />
            </View>
        </View>
    )

}

export default HomeDetailScreen;