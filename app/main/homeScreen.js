import { StatusBar } from 'expo-status-bar';
import { Button, Image, Text, View, TouchableOpacity } from 'react-native';
import { ViewScreen } from '../standars/viewScreen';
import { homeStyles } from './style';

export const HomeScreen = ({ navigation }) => {
  return (
    <ViewScreen>
      <View style={homeStyles.container}>
        <Image
          source={require('../../assets/Images/deunaletras.png')} // URL de la imagen
          style={{width: 180,
            height: 160,}}
        />
        <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity 
            style={{flex: 1, alignItems: 'center'}} 
            onPress={() => navigation.navigate('HomeNavigation')}>
                <Image
                source={require('../../assets/Images/iconoUsuario.png')} // URL de la imagen
                style={{width: 100,
                    height: 100,
                    borderRadius: 20}}
                />
            </TouchableOpacity>
            <TouchableOpacity 
            style={{flex: 1, alignItems: 'center'}} 
            onPress={() => navigation.navigate('HomeNavigation')}>
                <Image
                source={require('../../assets/Images/iconoTienda.png')} // URL de la imagen
                style={{width: 100,
                    height: 100,
                    borderRadius: 20}}
                />
            </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </ViewScreen>
  );
}


