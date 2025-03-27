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
          style={{
            width: 250,
            height: 250,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,

            borderRadius: 250 / 2,
            // borderTopRightRadius: 50,
            borderWidth: 5,
            borderColor: '#fff',
          }}
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={{width: 250, height: 250}}
        />
      </View>
    </View>
  );
};

export default App;
