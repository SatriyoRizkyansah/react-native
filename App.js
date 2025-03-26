import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#282c34'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#21242b'} />
      <View style={{backgroundColor: '#21242b', height: 100, elevation: 15}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
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
