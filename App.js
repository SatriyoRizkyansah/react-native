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

  const daftarNegara = [
    {
      nama: 'Indonesia',
      deskripsi: 'ini negara indonesia',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Indonesia.png',
    },
    {
      nama: 'Jepang',
      deskripsi: 'ini negara Jepang',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuTcc7-loP1DSWXEPOu74mwIfey6iTkEApw&s',
    },
  ];

  return (
    // <View style={{marginTop: 100}}>
    //   <StatusBar backgroundColor={'#21252b'} barStyle={'light-content'} />
    //   <FlatList
    //     data={negara}
    //     keyExtractor={(item, index) => index.toString()}
    //     renderItem={({item, index}) => (
    //       <View
    //         style={{
    //           marginHorizontal: 20,
    //           marginTop: 10,
    //           backgroundColor: '#282c34',
    //           paddingTop: 100,
    //           paddingBottom: 100,
    //           justifyContent: 'center',
    //           borderRadius: 4,
    //           alignItems: 'center',
    //           elevation: 3,
    //           marginBottom: 10,
    //           // paddingHorizontal: 100,
    //         }}>
    //         <Text style={{color: '#fff'}}>{item}</Text>
    //       </View>
    //     )}
    //   />
    // </View>

    <View style={{marginTop: 100}}>
      <StatusBar backgroundColor={'#21252b'} barStyle={'light-content'} />
      <FlatList
        data={daftarNegara}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 10,
              backgroundColor: '#282c34',
              paddingTop: 50,
              paddingBottom: 50,
              // justifyContent: 'center',
              borderRadius: 4,
              alignItems: 'center',
              elevation: 3,
              marginBottom: 10,
              // paddingHorizontal: 100,
              flexDirection: 'row',
              borderRadius: 15,
            }}>
            <Image
              source={{uri: item.image}}
              style={{width: 75, height: 50, borderRadius: 5, marginLeft: 20}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                {item.nama}
              </Text>
              <Text style={{color: '#fff'}}>{item.deskripsi}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default App;
