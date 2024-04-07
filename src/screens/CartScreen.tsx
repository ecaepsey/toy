import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet, Image, Button, Alert, ScrollView, SafeAreaView } from "react-native";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {updateCartItemQuantity, removeFromCart} from '../features/favorite/productsSlice'

const CartScreen = ({ navigation }: any) => {
    const {cart} = useSelector(state => state.productsSlice)
    const dispatch = useDispatch();
    
    const handleUpdateQuantity = (id, newQuantity) => {
        console.log("handleUpdateQuantity", id, newQuantity)
        dispatch(updateCartItemQuantity({ id, newQuantity }));
      };

      const handleRemoveProduct = (id) => {
        console.log('handleRemoveProduct', id)
        dispatch(removeFromCart({ id }));
      };
     
      
      const productsPrice = cart.reduce((total, product) => total + (product.price * (product.quantity == undefined ? 1 : product.quantity)), 0);
      const total = cart.reduce((total, product) =>  40 + total + (product.price * (product.quantity == undefined ? 1 : product.quantity)), 0)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView >
                <View style={{ flex: 1 }}>
                    <View>
                        <FlatList
                            data={cart}
                            renderItem={({ item }) => <CartItem 
                            item={item}
                             updateQuantity={(item, quantity) => handleUpdateQuantity(item, quantity)} 
                             remove={() => handleRemoveProduct(item.id)} 
                             />}
                            keyExtractor={(item, index) => item + index} 
                            scrollEnabled={false}
                            />

                    </View>

                    <View style={{ margin: 16 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                            <Text>Products</Text>
                            <Text>${productsPrice}</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                            <Text>Delivery</Text>
                            <Text>$40</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                            <Text>Total</Text>
                            <Text>${total}</Text>
                        </View>
                    </View>

                </View>

                <View>
                    <Button title='Оплатить' color='red' onPress={() => Alert.alert('Simple Button pressed')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    info: {
        flex: 1,

    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        marginBottom: 5,
    },
    quantity: {
        fontSize: 14,
    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    // quantity: {
    //     fontSize: 14,
    //     marginHorizontal: 10,
    // },
});


export default CartScreen

