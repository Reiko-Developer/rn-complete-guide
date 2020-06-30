import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const GoalItem = props => {
    let item = props.onPress;


    return (
        <TouchableNativeFeedback activeOpacity={0.5} onPress={props.onDelete} >
            <View style={styles.listItem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
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