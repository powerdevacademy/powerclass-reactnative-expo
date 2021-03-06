import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { format, parseISO } from 'date-fns';

import styles from '../styles/ListStyles';

export const formatDate = (isoDate) => {
    const date = parseISO(isoDate);
    return format(date, 'dd/MM HH:mm')
}

export const formatAmount = (amount) => {
    return amount.toFixed(2)
}

const ListItem = ({ item, navigation }) => { 
    console.log('RENDER ', item.title);
    return (
        <View>
            <TouchableOpacity  
                style={styles.itemRow}
                onPress={() => navigation.navigate('Form', {item})} >
                <Text style={styles.itemDate}>{ formatDate(item.date) }</Text>
                <View style={styles.itemLabel}>
                    <Text style={styles.itemTitle}>{ item.title }</Text>
                    <Text 
                        style={styles.itemDescription} 
                        numberOfLines={2} >
                        { item.description }
                    </Text>
                </View>
                <Text style={[styles.itemAmount, (item.amount >= 0 ? styles.positive : styles.negative)]}>{ formatAmount(item.amount) }</Text>
            </TouchableOpacity>
        </View>
    );
};

const checkEquality = (prevProps, nextProps) => {
    return JSON.stringify(prevProps.item) === JSON.stringify(nextProps.item);
}

export default React.memo(ListItem, checkEquality);