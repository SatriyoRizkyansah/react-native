import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';

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

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('./src/images/kucing.jpg')}
          style={{width: 250, height: 250}}
        />
      </View>
    </View>
  );
};

export default App;
