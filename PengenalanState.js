import {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [saldo, setSaldo] = useState(100000);

  const hitungDiskon = () => {
    let perhitungan;
    perhitungan = saldo - 10000;
    setSaldo(perhitungan);
    // Alert.alert('saldo saya' + saldo);
  };

  return (
    <View style={{marginTop: '100'}}>
      <Text>{saldo}</Text>
      <TouchableOpacity onPress={hitungDiskon}>
        <Text>Hitung Diskon</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
