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
  Button,
  Alert,
} from 'react-native';

const App = () => {
  return (
    <View style={{marginTop: 100}}>
      <Button
        title="Login"
        color={'#212121'}
        onPress={() => Alert.alert('Hello World')}
      />
    </View>
  );
};

export default App;
