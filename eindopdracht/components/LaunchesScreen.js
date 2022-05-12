import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LaunchListScreen from './LaunchListScreen';
import LaunchDetailScreen from './LaunchDetailScreen';


const Stack = createStackNavigator();



const LaunchesScreen = (probs) =>
{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Launch List" component={LaunchListScreen} />
      <Stack.Screen name="Launch Details" component={LaunchDetailScreen} />
    </Stack.Navigator>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LaunchesScreen
