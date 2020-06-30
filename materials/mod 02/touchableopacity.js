import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    let item = props.onPress;


    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete} >
            <View style={styles.listItem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    }
})