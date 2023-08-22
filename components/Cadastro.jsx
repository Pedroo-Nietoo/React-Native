import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import * as React from 'react';

export default function Cadastro() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 45,
    marginBottom: 50,
    color: '#6750A4',
  },
});
