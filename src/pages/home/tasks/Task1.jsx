import { StyleSheet, ToastAndroid, View } from 'react-native';
import { Appbar, Button, Text } from 'react-native-paper';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';

export default function Task1({ navigation }) {
    return (
        <Animatable.View
            animation="slideInLeft"
            duration={1000}
            style={styles.container}
        >
            <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
            </Appbar.Header>

            <Text style={styles.title}>Estudar Regex</Text>
            <Text style={styles.content}>Aprender mais sobre validação por Regex</Text>

            <Button
                style={styles.button}
                dark='true'
                icon="check-circle"
                mode="contained-tonal"
                onPress={() => ToastAndroid.show('Tarefa marcada como concluída', ToastAndroid.SHORT)}>
                Marcar como concluída
            </Button>
        </Animatable.View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 35,
        color: '#6750A4'
    },
    content: {
        marginTop: 20,
        fontSize: 20,
    },
    button: {
        marginVertical: 50
    }
});