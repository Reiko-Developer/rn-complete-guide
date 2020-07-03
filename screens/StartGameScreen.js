import React, { useState } from 'react';
import {
    View, Text, StyleSheet, Button,
    TouchableWithoutFeedback, Keyboard,
    Alert
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';

import DefaultStyles from '../constants/DefaultStyles';

import Colors from '../constants/Colors';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    };

    const resetInputHandler = () => {
        setEnteredValue('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Number has to be between 1 and 99',
                [{
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetInputHandler
                }]
            )
            return;
        }

        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');

        Keyboard.dismiss();

    }

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer} >
                <BodyText>You selected: </BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>

                {/*onPress={props.onStartGame}/> */}
                <Button
                    title="SART GAME"
                    onPress={() => props.onStartGame(selectedNumber)} />
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }} >
            <View style={styles.screen}>
                <BodyText style={styles.title} >Start a new Game</BodyText>
                <Card style={styles.inputContainer} >
                    <Text style={DefaultStyles.bodyText}>Select a Number:</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit autoCapitalize='none'
                        autoCorrect={false} keyboardType="number-pad"
                        placeholder="1" maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />

                    <View style={styles.buttonContainer} >
                        <View style={styles.btn}>
                            <Button
                                title="Reset" onPress={resetInputHandler}
                                color={Colors.accent} />
                        </View>
                        <View style={styles.butn}>
                            <Button
                                title="Confirm" onPress={confirmInputHandler}
                                color={Colors.primary} />
                        </View>
                    </View>
                </Card >
                {confirmedOutput}
            </View >
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 30,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: 'center',
    },
    buttonContainer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    input: {
        width: 50,
        textAlign: 'center',
    },

    btn: {
        width: 100,
    },
});

export default StartGameScreen;