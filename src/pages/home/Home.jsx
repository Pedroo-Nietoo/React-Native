import { StyleSheet, View } from 'react-native';
import { Searchbar, Text, SegmentedButtons, Appbar } from 'react-native-paper';
import { useState } from 'react';

export default function Home({ navigation }) {
    const [value, setValue] = useState('');

    return (
        <View style={styles.container}>
            <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Appbar.Action icon="calendar" onPress={() => { }} />
                        <Appbar.Action icon="account-cog-outline" onPress={() => navigation.navigate('User')} />
                    </View>
                </View>
            </Appbar.Header>

            <View style={styles.align}>
                <Text style={styles.username}>Boa tarde, Pedro!</Text>
            </View>

            <Searchbar mode='bar' placeholder="Pesquise suas tarefas" style={styles.margin} />

            <SegmentedButtons style={styles.margin}
                value={value}
                onValueChange={setValue}
                buttons={[
                    {
                        value: 'personal',
                        icon: 'account',
                        label: 'Pessoal',
                    },
                    {
                        value: 'school',
                        icon: 'school',
                        label: 'Escolar',
                    },
                    {
                        value: 'work',
                        icon: 'briefcase',
                        label: 'Trabalho'
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
    },
    align: {
        marginTop: 30,
        marginBottom: 30,
        margin: 15,
        left: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    username: {
        fontSize: 25,
        margin: 20
    },
    margin: {
        margin: 20
    }
});