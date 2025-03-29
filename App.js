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
  FlatList,
} from 'react-native';

const App = () => {
  const negara = [
    'indonesia',
    'jepang',
    'amerika',
    'inggris',
    'cina',
    'afrika',
    'thailand',
    'austraia',
  ];

  return (
    <View style={{marginTop: 100}}>
      <StatusBar backgroundColor={'#21252b'} barStyle={'light-content'} />
      <FlatList
        data={negara}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 10,
              backgroundColor: '#282c34',
              paddingTop: 100,
              paddingBottom: 100,
              justifyContent: 'center',
              borderRadius: 4,
              alignItems: 'center',
              elevation: 3,
              marginBottom: 10,
              // paddingHorizontal: 100,
            }}>
            <Text style={{color: '#fff'}}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;
