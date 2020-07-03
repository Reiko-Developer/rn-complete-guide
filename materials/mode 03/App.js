import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);  
  console.log("RE_Render");
  console.log(courseGoals);
  
  const addGoalHandler = goalTitle => {
    if (goalTitle.length == 0 ){
      return;
    }
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {

    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  }

  const cancelGoalAddHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler} />
      {/*by default the key extractor is looking for item.key, but u can change for id*/}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}></GoalItem>
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