import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from './FavoritesScreen';
import CoinDetailScreen from '../coinDetail/CoinDetailScreen';
import colors from '../../res/colors';

const Stack = createStackNavigator();

const FavoritesStack = () => {

  return (
    <Stack.Navigator
       screenOptions={{
        headerStyle: {
          backgroundColor: colors.blackPearl,
          shadowColor: colors.blackPearl
        },
        headerTintColor: colors.white
      }}
    >
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="FavoriteDetail" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
}

export default FavoritesStack;