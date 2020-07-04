import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Alert, FlatList } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

import { Ionicons } from '@expo/vector-icons';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const renderListItem = (listLength, itemData) => (
    <View style={styles.listItem} >
        <BodyText>#{listLength - itemData.index}. </BodyText>
        <BodyText>{itemData.item}</BodyText>
    </View>    
);

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

    const currentHigh = useRef(100);
    const currentLow = useRef(1);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess == userChoice) {
            onGameOver(pastGuesses);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {

        if ((direction === 'lower' && props.userChoice > currentGuess) ||
            (direction === 'greater' && props.userChoice < currentGuess)) {
            Alert.alert('Error', 'You lied.', [{ text: 'sorry', style: 'cancel' }]);

            return;
        }

        if (props.userChoice < currentGuess) {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }

        const nextNumber = generateRandomBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess
        );

        setCurrentGuess(nextNumber);
        setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses]);
    };

    return (
        <View style={styles.screen}>
            <BodyText>Oponent's Guess</BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')} >
                    <Ionicons name='md-remove' size={24} color="white" />
                </MainButton>
                <MainButton style={{ backgroundColor: 'green' }} onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name='md-add' size={24} color="white" />
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, numOfRound) => renderListItem(guess, numOfRound))}
                </ScrollView> */}
                <FlatList
                    contentContainerStyle={styles.list}
                    keyExtractor={item => item}
                    data={pastGuesses}
                    inverted={true}
                    renderItem={renderListItem.bind(this, pastGuesses.length)}>

                    {console.log(pastGuesses)}
                </FlatList>
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    },
    listContainer: {
        flex: 1,
        width: '60%',
    },
    //styles the layout inside the ScrollView
    list: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});
export default GameScreen;