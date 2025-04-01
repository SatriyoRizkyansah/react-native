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
  ToastAndroid,
  RefreshControl,
} from 'react-native';

const App = () => {
  const [refreshing, setRefreshing] = useState(false);

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

  const showAlert = () => {
    ToastAndroid.show('Data berhasil di update', ToastAndroid.SHORT);
  };

  return (
    <View style={{marginTop: 100}}>
      <StatusBar backgroundColor={'#21252b'} barStyle={'light-content'} />
      <FlatList
        data={daftarNegara}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => Alert.alert('Data berhasil di refresh')}
          />
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
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
            }}
            onPress={showAlert}>
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
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default App;
