import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from '../screens/ListScreen';
import FormScreen from '../screens/FormScreen';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Navigator = () => { 
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerStyle: { 
                    backgroundColor: '#141D2B'
                },
                headerTintColor: '#FFF'
            }}>
            <Stack.Screen 
                name="List"
                options={({navigation}) => ({
                    title: 'Power Money $$',
                    headerRight: () => (
                        <View style={{marginRight: 16 }}>
                            <TouchableHighlight 
                                onPress={() => navigation.navigate('Form')}>
                                <Ionicons 
                                    name="ios-add-circle-outline" 
                                    size={24} 
                                    color="white" />
                            </TouchableHighlight>
                        </View>
                    )
                })}
                component={ListScreen} />
            <Stack.Screen 
                name="Form"
                options={{
                    title: 'Adicionar Item'
                }}
                component={FormScreen} />
        </Stack.Navigator>
    )
}

export default Navigator;