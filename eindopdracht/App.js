import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LaunchesScreen from './components/LaunchesScreen';
import HomeScreen from './components/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

const App = () =>
{
  return (
    <NavigationContainer style={styles.container}>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Launches" component={LaunchesScreen} />
          </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
