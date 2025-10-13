/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Text } from 'react-native';
import Quotes from './components/Quotes';

function App() {

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
          <Quotes/>
      </View>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: 'relative'
  },
});

export default App;
