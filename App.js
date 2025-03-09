import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { LoginScreen } from './app/login';
import { HomeScreen } from './app/main';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginNavigation" component={LoginScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="HomeNavigation" component={HomeScreen}   options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TempView = () => { return(
  <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
