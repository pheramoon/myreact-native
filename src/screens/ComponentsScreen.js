import React from "react";
import {Linking, Text, StyleSheet, View} from "react-native";

const ComponentsScreen = () => {
    const greetings="Mehdi Mousavi";
    return (
    <View>
        <Text style={styles.textStyle}>Inner page prototype</Text>
        <Text style={styles.subHeaderStyle}>Hi There! My name is {greetings}</Text>
        <Text style={{marginHorizontal: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <Text style={{color: "blue",marginTop: 50, marginHorizontal: 20, fontSize: 20}}
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