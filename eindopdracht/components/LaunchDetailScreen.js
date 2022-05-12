import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';



const LaunchDetailScreen = (props) =>
{
    const id = props.route.params.id ?? null
    const [isloading, setIsLoeading] = useState(true)
    const [item, setItem] = useState([])


    const getLaunch = () =>
    {
        fetch("https://api.spacexdata.com/v3/launches/" + id)
        .then((response) => response.json())
        .then((data) => setItem(data))
        .catch((error) => console.log(error))
        .finally(() => setIsLoeading(false));
    }

    useEffect(() => { getLaunch(); }, []);

  return (
    <View style={styles.container}>
        {
            isloading ?
            (
                <Text>loading...</Text>
            )
            :
            (
                <View>
                    <Text>mission name: {item.mission_name}</Text>
                    <Text>launch year: {item.launch_year}</Text>
                    <Text>launch success: {item.launch_success ? "success" : "failed"}</Text>
                    <Text>details: {item.details}</Text>
                    <Text>article link:</Text>
                    <Text>{item.links.article_link ?? "geen link gevonden."}</Text>
                </View>
            )
        }
    </View>
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

export default LaunchDetailScreen