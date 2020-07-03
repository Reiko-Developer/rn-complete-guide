import React from 'react';

import { View, Button, StyleSheet, Image } from 'react-native';

import BodyText from '../components/BodyText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <BodyText>The Game is over ;)</BodyText>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/success.png')}
                    resizeMode="cover"
                />
            </View>
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
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

export default GameOverScreen;