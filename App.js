import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{backgroundColor: 'darkblue', height: 100, elevation: 15}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
            marginTop: 40,
          }}>
          Aplikasi Kaomoji
        </Text>
      </View>
    </View>
  );
};

export default App;
