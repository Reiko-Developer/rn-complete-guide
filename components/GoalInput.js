import React, { useState } from 'react';

import { StyleSheet, TextInput, View, Button } from 'react-native';


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
                /** Two ways of set the value:
                 *  1º
                 * <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)} />
                 * 
                 * The other is using normally Vanilla Javascript bind function
                */
            }
            <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
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