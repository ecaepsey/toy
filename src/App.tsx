/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// App.js

import * as React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screen components
import HomeScreen from './screens/HomeScreen';
import HomeDetailScreen from './screens/HomeDetailScreen';
import LogoTitle from './components/LogoTitle';
import { Alert, Button } from 'react-native';
import CartScreen from './screens/CartScreen';
import SettingScreen from './screens/SettingScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ToggleIcon from './components/Filled';
import { Provider } from 'react-redux';
import store from './store';

// Create stack navigator
const Stack = createStackNavigator();

// Create tab navigator
const Tab = createBottomTabNavigator();

// Stack navigator screens
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >

      <Stack.Screen name="Home" component={HomeScreen} 
      
      />
      <Stack.Screen name="HomeDetails" component={HomeDetailScreen}
        options={{
          title: "Детали продукта",
          headerShown: true,
          headerBackTitle: 'Вернуться',
         
        }}

      />

    </Stack.Navigator>
  );
}

// Tab navigator screens
function MainTabs() {
  const getTabBarStyle = (route: any): {} => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    let display = (routeName === 'HomeDetails') ? 'none' : 'flex';
    return { display }
  }

  const getHeaderShow = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
    let display = (routeName === 'HomeDetails') ? "" : "Главная"
    return display
  }

  return (
    <Tab.Navigator

    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Главная') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'настройки') {
          iconName = focused ? 'user-o' : 'user-o';
        }

        else if (route.name === 'любимые') {
          iconName = focused ? 'heart-o' : 'heart-o';
        }

        else if (route.name === 'корзина') {
          iconName = focused ? 'shopping-basket' : 'shopping-basket';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen
        name="Главная"
        component={HomeStack}
        
        options={({ route }: any) => ({
          tabBarStyle: getTabBarStyle(route),
          headerTitle: getHeaderShow(route),
          
          
        })

        }
      />
      <Tab.Screen name="любимые" component={FavoriteScreen} />
      <Tab.Screen name="корзина" component={CartScreen} 
      
      options={({ route }: any) => ({
        tabBarStyle: getTabBarStyle(route),
        
      })

      }
      />
      <Tab.Screen name="настройки" component={SettingScreen} />
    </Tab.Navigator>
  );
}

// Main App component
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
    </Provider>
    
  );
}
