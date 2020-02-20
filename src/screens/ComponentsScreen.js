import React from "react";
import {Linking, Text, StyleSheet, View} from "react-native";

const ComponentsScreen = () => {
    const greetings="Mehdi Mousavi";
    return (
    <View>
        <Text style={styles.textStyle}>Welcome to React World</Text>
        <Text style={styles.subHeaderStyle}>Hi There! My name is {greetings}</Text>
        <Text style={{marginHorizontal: 20}}>Practicing about Alift Project</Text>
        <Text style={{color: 'blue'},{marginHorizontal: 20}}
        onPress={() => Linking.openURL('https://alift.ca')}>
        Alift website
        </Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        fontSize:60
    },
    subHeaderStyle: {
        fontSize:20,
        marginVertical: 20,
        marginHorizontal: 20
    }
});

export default ComponentsScreen;