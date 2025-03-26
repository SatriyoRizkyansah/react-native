import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 90,
          color: 'green',
          marginBottom: 10,
          // letterSpacing: 14,
          lineHeight: 20,
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: 'red',
          borderRadius: 100,
          // justifyContent: 'center',
          // alignItems: 'flex-end',
          flexDirection: 'col',
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          Hello World
        </Text>
        <Text
          style={{
            color: 'white',
          }}>
          Hello World
        </Text>
        <Text
          style={{
            color: 'white',
          }}>
          Hello World
        </Text>
      </View>
    </View>
  );
};

export default App;
