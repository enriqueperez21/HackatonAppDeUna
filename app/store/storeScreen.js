import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, TouchableOpacity } from 'react-native';
import { ViewScreen } from '../standars/viewScreen';
import { storeStyles } from './style';

export const StoreScreen = ({ navigation }) => {
  return (
    <ViewScreen>
      <View style={storeStyles.container}>
        <Text>Store</Text>
      </View>
    </ViewScreen>
  );
}


