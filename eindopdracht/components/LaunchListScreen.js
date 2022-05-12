import { FlatList, Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Button, Provider as PaperProvider } from 'react-native-paper';


const LaunchListScreen = (props) =>
{
    const [isloading, setIsLoeading] = useState(true);
    const [launchData, setLaunchData] = useState([]);

    const getLaunches = () =>
    {
        fetch("https://api.spacexdata.com/v3/launches")
        .then((response) => response.json())
        .then((data) => setLaunchData(data))
        .catch((error) => console.log(error))
        .finally(() => setIsLoeading(false));
    }

    useEffect(() => { getLaunches(); }, []);

    const RenderLaunches = ({ item, index }) =>
    {
        return(
            <View style={styles.Item}>
                <TouchableOpacity onPress={() => {
                    props.navigation.push('Launch Details', {id: item.flight_number})
                }}>
                    <Text style={styles.ItemText}>
                        {item.launch_year} : {item.mission_name}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }    

    return(
        <PaperProvider>
            <View style={styles.container}>
                {isloading
                    ?
                    (
                        <ActivityIndicator style={styles.activityIndicator} color='purple' size={70} />
                    )
                    :
                    (
                        <View style={styles.container}>
                            <FlatList
                                style={styles.List}
                                data={launchData}
                                renderItem={RenderLaunches}
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                    )

                }
            </View>
        </PaperProvider>
  

    ) 
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'gray', },
  
    activityIndicator: { flex: 1, },
  
    header: { textAlign: 'center', fontSize: 20, color: 'white', backgroundColor: 'red' },
  
    List: { flexGrow: 1, backgroundColor: 'gray' },
  
    Item: { marginHorizontal: 10, marginVertical: 3, backgroundColor: 'black' },
  
    ItemText: { fontSize: 15, color: 'wheat', padding: 10, },
  
    navButtons: { flexDirection: 'row', alignSelf: 'center', },
  
    button: { flexGrow: 1, marginHorizontal: 10, },
  });

  export default LaunchListScreen