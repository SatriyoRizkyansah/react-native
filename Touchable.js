import {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const App = () => {
  const halo = () => {
    Alert.alert('Hello Kamu');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#282c34'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#21242b'} />

      <TouchableOpacity
        style={{
          marginHorizontal: 'auto',
          width: '90%',
          backgroundColor: '#51a4f1',
          paddingTop: 20,
          paddingBottom: 20,
          marginTop: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          elevation: 3,
        }}
        onPress={halo}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Registrasi
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={halo}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20',
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

        <Text style={{color: '#fff'}}>Hello World</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
