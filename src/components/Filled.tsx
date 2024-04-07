import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
const ToggleIcon = ({onPress, isFavorite}) => {
    
  
    return (
      <View>
        <TouchableOpacity onPress={onPress}>
          <Icon
            name={!isFavorite ? 'star-o' : 'star'} // Icon name when filled or not filled
            size={20} // Icon size
            color={!isFavorite ? 'black' : 'red'} // Fill color based on state
          />
        </TouchableOpacity>
      </View>
    );
  };
  
  export default ToggleIcon;