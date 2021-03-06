import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import logoWide from './assets/logo-wide.png';
import bgImage from './assets/bg-image.png';
import { FlatList } from 'react-native-gesture-handler';

const _renderItem = ({item}) => { 
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  )
};

export default function App() {
  return (
    <View  style={styles.container}>
    {/* <SafeAreaView style={styles.container}> */}
      <ImageBackground source={bgImage} style={styles.bgImage}>
        <StatusBar style='light' translucent={true} />
        <Image source={logoWide} style={styles.logo} />
        <Text style={styles.text}>Bem vindo à Powerclass</Text>
        <FlatList 
          data={DATA}
          renderItem={_renderItem}
          keyExtractor={item => item.id}
        />
      </ImageBackground>
    {/* </SafeAreaView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'stretch',
    // paddingVertical: 52
  },
  bgImage: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 52,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    alignSelf: 'center'
  },
  logo: {
    width: 280,
    height: 60,
    resizeMode: "contain",
    alignSelf: 'center'
  },
  item: {
    backgroundColor: '#FFF6',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  description: {
    fontSize: 14,
    color: '#000'
  }
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Item #1',
    description: 'This is item number 1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Item #2',
    description: 'This is item number 2'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Item #3',
    description: 'This is item number 3'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'Item #4',
    description: 'This is item number 4'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Item #5',
    description: 'This is item number 5'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Item #6',
    description: 'This is item number 6'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    title: 'Item #7',
    description: 'This is item number 7'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
    title: 'Item #8',
    description: 'This is item number 8'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Item #9',
    description: 'This is item number 9'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
    title: 'Item #10',
    description: 'This is item number 10'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f66',
    title: 'Item #11',
    description: 'This is item number 11'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Item #12',
    description: 'This is item number 12'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
    title: 'Item #13',
    description: 'This is item number 13'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f67',
    title: 'Item #14',
    description: 'This is item number 14'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Item #15',
    description: 'This is item number 15'
  },
];