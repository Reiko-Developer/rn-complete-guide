import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>

}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        elevation: 10,
        backgroundColor: 'white',
        padding: 30,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,

    },
});

export default Card;
