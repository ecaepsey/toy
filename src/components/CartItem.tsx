import React, {useState} from "react";
import { Text, View, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
const CartItem = ({ item, updateQuantity, remove }: any) => {
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateQuantity(item.id, newQuantity);
        }
    };

    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateQuantity(item.id, newQuantity);
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.price}>Price: ${item.price}</Text>
                <View style={styles.quantityContainer}>
                    <Button title="-" onPress={decreaseQuantity} />
                    <Text style={styles.quantity}>{quantity}</Text>
                    <Button title="+" onPress={increaseQuantity} />

                </View>
                <TouchableOpacity style={{position: 'absolute', right: 0}} onPress={() => remove()}>
                    <Icon name="trash" size={20}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartItem

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