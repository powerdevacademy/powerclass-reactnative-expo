import React, { useEffect, useState } from 'react';
import { Button, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import NumericInput from '@wwdrew/react-native-numeric-textinput';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
import SegmentedControl from '@react-native-community/segmented-control';
import { useNavigation, useRoute } from '@react-navigation/native';
import { parseISO, formatISO } from 'date-fns';


const schema = yup.object().shape({
    title: yup
        .string()
        .required('O título é obrigatório'), 
    description: yup
        .string(),
    amount: yup
        .number()
        .typeError('O valor é inválido')
        .required('O valor é obrigatório'),
    date: yup
        .date()
        .required('A data da transação é obrigatória')
});

const initialValues = { 
    title: '',
    description: '',
    amount: '',
    date: new Date()
}

const FormScreen = () => {
    const [transactionType, setTransactionType] = useState(0);
    const [id, setID] = useState();

    const navigation = useNavigation();
    const route = useRoute();

    const { control, handleSubmit, errors, setValue } = useForm({
        resolver: yupResolver(schema),
        defaultValues: initialValues
    });

    useEffect(() => {
        console.log('ITEMS', route.params?.item);
        if(route.params?.item) {
            const {id, date, amount, title, description} = route.params.item;
            setValue('title', title);
            setValue('description', description);
            setValue('amount', Math.abs(amount));
            setValue('date', parseISO(date));
            setTransactionType(amount < 0 ? 0 : 1);
            setID(id);
        }

    }, [route.params?.item])

    const _onSubmit = (values) => {
        const payload = {
            id: id ?? String((new Date()).getTime()),
            title: values.title,
            description: values.description,
            amount: transactionType == 0 ? values.amount * -1 : values.amount,
            date: formatISO(values.date)
        }
        navigation.navigate('List', {item: payload});
    };

    useEffect(() => {
        console.log('ERRORS', errors);
    }, [errors]);

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.topContainer}>
            <ScrollView style={styles.container}>
                <Text style={styles.screenTitle}>Preencha as informações abaixo:</Text>

                <Controller 
                    control={control}
                    name="title"
                    render={({ onChange, onBlur, value }) => (
                        <TextInput 
                            style={styles.formField}
                            placeholder="Título do lançamento"
                            autoCapitalize="words"
                            keyboardType="default"
                            returnKeyType="next"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            />
                    )}
                />
                <ErrorMessage 
                    errors={errors}
                    name="title"
                    render={({message}) => (<Text style={styles.formError}>{message}</Text>)}
                    />

                <Controller 
                    control={control}
                    name="amount"
                    render={({ onChange, onBlur, value }) => (
                        <NumericInput 
                            style={styles.formField}
                            type='currency'
                            locale='pt-BR'
                            currency='BRL'
                            placeholder="Valor do lançamento"
                            keyboardType='decimal-pad'
                            returnKeyType='next'
                            value={value}
                            onUpdate={value => onChange(value)}
                            />
                        
                    )}
                />
                <ErrorMessage 
                    errors={errors}
                    name="amount"
                    render={({message}) => (<Text style={styles.formError}>{message}</Text>)}
                    />

                <SegmentedControl 
                    values={['Despesa', 'Receita']}
                    selectedIndex={transactionType}
                    onChange={(event) => {
                        setTransactionType(event.nativeEvent.selectedSegmentIndex)
                    }}
                    />

                <Controller 
                    control={control}
                    name="description"
                    render={({ onChange, onBlur, value }) => (
                        <TextInput 
                            style={[styles.formField, styles.textArea]}
                            multiline={true}
                            placeholder="Descrição do lançamento"
                            autoCapitalize="sentences"
                            keyboardType="default"
                            returnKeyType="next"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            />
                    )}
                />
                <ErrorMessage 
                    errors={errors}
                    name="description"
                    render={({message}) => (<Text style={styles.formError}>{message}</Text>)}
                    />

                <Controller 
                    control={control}
                    name="date"
                    render={({ onChange, onBlur, value }) => (
                        <DatePicker 
                            date={value}
                            onDateChange={onChange}
                            mode="datetime"
                            is24hourSource={true}
                            androidVariant="nativeAndroid"
                        />
                    )}
                />          
                <ErrorMessage 
                    errors={errors}
                    name="date"
                    render={({message}) => (<Text style={styles.formError}>{message}</Text>)}
                    />
                <Button 
                    title="Salvar"
                    onPress={handleSubmit(_onSubmit)}
                />    

            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default FormScreen;

const styles = StyleSheet.create({
    topContainer:  {
        backgroundColor: '#fff',
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        alignItems: 'stretch',
        paddingHorizontal: 40,
        paddingVertical: 50 
    },
    screenTitle: { 
        fontSize: 16,
        marginBottom: 20 
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    formField: {
        borderColor: '#999',
        borderRadius: 6,
        borderWidth: 1,
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10
    },
    textArea: {
        height: 80
    },
    formError: { 
        color: '#900',
        fontSize: 12,
        marginBottom: 10
    }
});