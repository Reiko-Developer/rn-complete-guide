import React, { useState } from 'react';

import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';


const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = enteredText => setEnteredGoal(enteredText);

    return (
        <View style={styles.inputConteiner}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            {
                /**
                 * onPress={props.onAddGoal.bind(null, enteredGoal)}
                 * onPress={props.onAddGoal.bind(this, enteredGoal)}
                 * onPress={() => { props.onAddGoal(enteredGoal) }} 
                */
            }
            <Button title="Add" onPress={() => { props.onAddGoal(enteredGoal) }} />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },

    inputConteiner: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
});