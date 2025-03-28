import {useEffect, useState} from 'react';
import {StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <StatusBar backgroundColor={'#fafafa'} barStyle={'dark-content'} />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 70,
        }}>
        Login
      </Text>
      <Text style={{textAlign: 'center', fontSize: 16}}>
        Silahkan masukan email dan password
      </Text>

      <TextInput
        value={email}
        style={{
          backgroundColor: '#FFF',
          evaluation: 5,
          marginHorizontal: 20,
          marginTop: 20,
          borderRadius: 9,
          paddingLeft: 10,
        }}
        placeholder="Masukan Email Anda"
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        value={password}
        style={{
          backgroundColor: '#FFF',
          evaluation: 5,
          marginHorizontal: 20,
          marginTop: 20,
          borderRadius: 9,
          paddingLeft: 10,
        }}
        placeholder="******"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#76d1ff',
          marginVertical: 20,
          paddingVertical: 12,
          marginHorizontal: 20,
          justifyContent: 'center',
          borderRadius: 9,
          elevation: 3,
          textAlign: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
