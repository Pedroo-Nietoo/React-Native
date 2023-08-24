import { StyleSheet, View } from 'react-native';
import { Avatar, Searchbar, Text, SegmentedButtons, Appbar } from 'react-native-paper';
import { useState } from 'react';

export default function Home() {
    const [value, setValue] = useState('');

    return (
        <View style={styles.container}>
            <Appbar.Header mode='center-aligned' style={{ marginHorizontal: 30 }}>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Title" titleStyle={{ color: '#f0f', width: 100 }} />
                <Appbar.Action icon="calendar" onPress={() => { }} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header>

            <View style={styles.align}>
                <Avatar.Text size={30} label="PN" />
                <Text style={styles.username}>Olá, Pedro!</Text>
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
        margin: 15,
        left: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    username: {
        fontSize: 20,
        margin: 20
    },
    margin: {
        margin: 20
    }
});