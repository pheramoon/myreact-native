import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {

    const frineds=[
        {name:'Form #1', age:1},
        {name:'Form #2', age:2},
        {name:'Form #3', age:3},
        {name:'Form #4', age:4},
        {name:'Form #5', age:5},
        {name:'Form #6', age:6},
        {name:'Form #7', age:7},
        {name:'Form #8', age:8},
        {name:'Form #9', age:9}
    ];

    return (
    <FlatList
    keyExtractor={friend=>friend.name}
    data={frineds}
    renderItem={({item})=>{
         return <Text style={styles.textStyle}>{item.name} - Field : {item.age}</Text>
    }}
    />
    );
};

const styles=StyleSheet.create({
    textStyle:{
        marginVertical:30,
        fontSize:16
    }
});

export default ListScreen;