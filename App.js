import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    //This works but not in all the situations.
    //setCourseGoals([...courseGoals], enteredGoal);

    //this is the best practice, and workds in all situations!
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  }

  return (
    <View style={styles.screen}>

      <GoalInput onAddGoal={addGoalHandler} />
      {/*by default the key extractor is looking for item.key, but u can change for id*/}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem title={itemData.item.value}></GoalItem>
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
});