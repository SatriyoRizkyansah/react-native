import {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <StatusBar backgroundColor={'#fafafa'} barStyle={'dark-content'} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./src/images/kucing.jpg')}
            style={styles.foto}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
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

        <TouchableOpacity style={styles.buttonLogin}>
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

        <TouchableOpacity
          style={[styles.buttonLogin, {backgroundColor: 'red'}]}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  foto: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 250 / 2,
    borderWidth: 5,
    borderColor: '#fff',
    marginTop: 70,
  },
  buttonLogin: {
    backgroundColor: '#76d1ff',
    marginVertical: 20,
    paddingVertical: 12,
    marginHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 9,
    elevation: 3,
    textAlign: 'center',
  },
});

export default App;
