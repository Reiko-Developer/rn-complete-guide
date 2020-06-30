import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 30 }}>
      <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
        <TextInput
          placeholder="Course Goal PH"
          style={{ width: '80%', borderColor: 'black', borderWidth: 1, padding: 10 }}
        />
        <Button title="Add" />
      </View>

      <View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
});