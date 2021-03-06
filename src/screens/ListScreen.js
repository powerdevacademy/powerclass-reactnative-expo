import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/ListStyles';

import logoWide from '../assets/logo-wide.png';

import { useNavigation, useRoute } from '@react-navigation/native';

import ListItem, { formatAmount, formatDate } from '../components/ListItem'

import * as firebase from 'firebase';
import 'firebase/firestore';
import '../firebase';


const transactionsRef = firebase.firestore().collection('transactions');

const ListScreen = () => {
    const [balance, setBalance] = useState(0);
    const [items, setItems] = useState([]);

    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = transactionsRef
            .orderBy('date', 'desc')
            .onSnapshot(snapshot => {
                let docs = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setItems(docs);
            })
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if(route.params?.item) {
            transactionsRef.doc(route.params.item.id).set(route.params.item);
        }
    }, [route.params?.item]); 

    useEffect(() => {
        const bal = items.reduce((accumulator, item) => accumulator += item.amount, 0);
        setBalance(bal);
    }, [items]);

    return (
        <View style={styles.container}>
            <Image source={logoWide} style={styles.logo} />

            <View style={styles.summary}>
                <Text style={{fontSize: 20}}>
                    <Text>Seu saldo é </Text>
                    <Text style={[{fontWeight: 'bold'}, (balance >= 0 ? styles.positive : styles.negative)]}>R$ {formatAmount(balance)}</Text>
                </Text>
            </View>

            <FlatList 
                data={items}
                renderItem={({item}) => <ListItem item={item} navigation={navigation} />  }
                style={styles.list}
                keyExtractor={item => item.id}
            />

            <Text>Powered by Power Dev Academy</Text>

        </View>
    )
};

export default ListScreen;
