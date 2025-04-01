import {useEffect, useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={{marginTop: 100}}>
      <ImageBackground
        source={require('./src/images/kucing.jpg')}
        style={{
          marginHorizontal: 20,
          marginTop: 10,
        }}
        imageStyle={{borderRadius: 9}}>
        <View style={{backgroundColor: 'rgba(0,0,0,0.5)', padding: 15}}>
          <Text style={{color: 'white'}}>Image Background</Text>
          <Text style={{color: 'white'}}>Image Background</Text>
          <Text style={{color: 'white'}}>Image Background</Text>
          <Text style={{color: 'white'}}>Image Background</Text>
          <Text style={{color: 'white'}}>Image Background</Text>
          <Text style={{color: 'white'}}>Image Background</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
