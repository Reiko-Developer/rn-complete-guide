import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');

  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => setEnteredGoal(enteredText);

  const addGoalHandler = () => {
    //This works but not in all the situations.
    //setCourseGoals([...courseGoals], enteredGoal);

    //this is the best practice, and workds in all situations!
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);

    setEnteredGoal('');
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputConteiner}>
        <TextInput
          placeholder="Course Goal PH"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Ad2" onPress={addGoalHandler} />
      </View>

      {/*by default the key extractor is looking for item.key, but u can change for id*/}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.id}: {itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

//The best practice when working with styles is tu use the StyleSheet object!
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

  inputConteiner: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },

  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }

});
