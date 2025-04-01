import {useEffect, useState} from 'react';
import {
  ImageBackground,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
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
    </TouchableOpacity>
  );
};

export default App;
