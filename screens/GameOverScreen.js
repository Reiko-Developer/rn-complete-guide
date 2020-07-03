import React from 'react';

import { View, Button, StyleSheet, Image, Text } from 'react-native';

import BodyText from '../components/BodyText';
import Colors from '../constants/Colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <BodyText style={styles.resultContainer}>The Game is over ;)</BodyText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={3000}
                    style={styles.image}
                    source={{ uri: 'https://www.coolgameassets.com/wp-content/uploads/edd/2018/03/featured-image-youwon.png' }}
                    resizeMode="cover"
                />
            </View>
            <BodyText style={styles.resultText}>Your fone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>.</BodyText>
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
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15,
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20,
    }
});

export default GameOverScreen;