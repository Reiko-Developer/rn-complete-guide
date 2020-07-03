import React from 'react';

import { View, Button, StyleSheet } from 'react-native';

import BodyText from '../components/BodyText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <BodyText>The Game is over ;)</BodyText>
            <BodyText>Number of rounds: {props.roundsNumber} </BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="NEW GAME" onPress={props.onRestart}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GameOverScreen;