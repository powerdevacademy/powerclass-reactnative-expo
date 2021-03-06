import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MyStack = createStackNavigator();
const MyTabs = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View  style={styles.container}>
        <Text>Home Screen</Text>
        <Button 
          title="Detalhes"
          onPress={() => navigation.navigate('Detail',{
            name: 'Daniel'
          })}
        />
    </View>
  )
};

const SettingsScreen = ({navigation}) => {
  return (
    <View  style={styles.container}>
        <Text>Settings Screen</Text>
        <Button 
          title="Início"
          onPress={() => navigation.navigate('Home')}
        />
    </View>
  )
};

const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {name} = route.params;

  useEffect(() => {
    navigation.setOptions({title: name})
  }, []);

  return (
    <View  style={styles.container}>
        <Text>Detail from {name}</Text>
        <Button 
          title="Voltar"
          onPress={() => { navigation.goBack() }}
        />
        <Button 
          title="Trocar Nome"
          onPress={() => navigation.setOptions({title: name})}
        />
    </View>
  )
};

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs.Navigator>
        <MyTabs.Screen name="TabHome" >
          {() => (
            <MyStack.Navigator 
            screenOptions={{
              headerBackTitleVisible: false,
              headerStyle: { 
                backgroundColor: '#66F'
              },
              headerTintColor: '#FFF',
              headerLeft: ({canGoBack}) => (
                <View style={{flexDirection: 'row'}}>
                  { canGoBack &&
                    <TouchableOpacity onPress={() => alert('Voltar')}>
                      <Ionicons style={{marginLeft: 10 }} name="ios-arrow-back" size={30} color="white" /> 
                    </TouchableOpacity> }
                    <TouchableOpacity onPress={() => alert('Editar')}>  
                      <Feather style={{marginLeft: 20 }} name="edit-2" size={24} color="white" />
                    </TouchableOpacity>
                </View>
              ),
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                  <Feather style={{width: 40}} name="user" size={24} color="white" />
                  <Feather style={{width: 40}} name="settings" size={24} color="white" />
                </View>
              )
            }}
          >
            <MyStack.Screen 
              name="Home" 
              component={HomeScreen} 
               />
            <MyStack.Screen 
              name="Detail" 
              options={{
                title: 'Power DEV',
              }}
              component={DetailScreen} />
          </MyStack.Navigator>
          )}
        </MyTabs.Screen>
        <MyTabs.Screen name="Settings" component={SettingsScreen}/>
      </MyTabs.Navigator>
    </NavigationContainer>
  )
};

export default App;

/*export default*/ function App2() {
  return (
    <NavigationContainer>
        <MyStack.Navigator 
          screenOptions={{
            headerBackTitleVisible: false,
            headerStyle: { 
              backgroundColor: '#66F'
            },
            headerTintColor: '#FFF',
            headerLeft: ({canGoBack}) => (
              <View style={{flexDirection: 'row'}}>
                { canGoBack &&
                  <TouchableOpacity onPress={() => alert('Voltar')}>
                    <Ionicons style={{marginLeft: 10 }} name="ios-arrow-back" size={30} color="white" /> 
                  </TouchableOpacity> }
                  <TouchableOpacity onPress={() => alert('Editar')}>  
                    <Feather style={{marginLeft: 20 }} name="edit-2" size={24} color="white" />
                  </TouchableOpacity>
              </View>
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <Feather style={{width: 40}} name="user" size={24} color="white" />
                <Feather style={{width: 40}} name="settings" size={24} color="white" />
              </View>
            )
          }}
        >
          <MyStack.Screen 
            name="Home" 
            component={HomeScreen} 
             />
          <MyStack.Screen 
            name="Detail" 
            options={{
              title: 'Power DEV',
            }}
            component={DetailScreen} />
        </MyStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
