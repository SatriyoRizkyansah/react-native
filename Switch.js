import {useEffect, useState} from 'react';
import {Alert, Switch, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [lampu, setLampu] = useState(false);

  return (
    <View style={{marginTop: 100}}>
      <Switch
        value={lampu}
        onValueChange={() => {
          setLampu(!lampu);
        }}
      />
    </View>
  );
};

export default App;
