import React, { useState } from 'react';

import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => setEnteredGoal(enteredText);

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View borderColor="black" borderWidth={1} style={styles.disposeButton} >
                <Button color="#acb0b0" title="x" onPress={props.onCancel} />
            </View>
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
                <View style={styles.buttonContainer}>
                    <View style={styles.button} >
                        <Button title=" Add " onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '60%',
    },
    inputConteiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        width: '45%',
    },

    disposeButton: {
        alignSelf: 'flex-end',
        margin: 10,
    }
});