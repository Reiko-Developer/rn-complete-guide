import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',

      }}>

      <View
        style={{
          backgroundColor: 'white',
          height: '3.5%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>            Titulo do APP             </Text>
      </View>

      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Top</Text>
      </View>

      <View
        style={{
          backgroundColor: '#eeddaa',
          flex: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Mid</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          height: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Bot</Text>
      </View>

    </View>
  );
}
