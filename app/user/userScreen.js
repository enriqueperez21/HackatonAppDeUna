import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, TouchableOpacity } from 'react-native';
import { ViewScreen } from '../standars/viewScreen';
import { userStyles } from './style';

export const UserScreen = ({ navigation }) => {
  return (
    <ViewScreen>
      <View style={userStyles.container}>
        <Image
          source={require('../../assets/Images/deunaletras.png')} // URL de la imagen
          style={{width: 180,
            height: 160,}}
        />
      </View>
    </ViewScreen>
  );
}




<MyIcon {...{SelectedIcon:'Entypo',  name:"home", size:100}}/>