import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const SettingScreen = () => {
  const notifications = [
    { id: 1, message: 'Нотификации' },
    { id: 2, message: 'О приложении' },
    { id: 3, message: 'Выйти' },
    // Add more notifications as needed
  ];

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.notificationItem}>
        <Text>{item.message}</Text>
        <Text>{'>'}</Text>
      </View>
    );
  };

  
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  sectionHeader: {
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 10,
  },
  notificationItem: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SettingScreen;
