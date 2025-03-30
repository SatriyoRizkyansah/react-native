import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={{marginTop: 100}}>
      <ActivityIndicator color={'red'} size={'large'} animating={loading} />
      <TouchableOpacity onPress={() => setLoading(!loading)}>
        <Text>Toggle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
