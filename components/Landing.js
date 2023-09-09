import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import MainStyles from '../assets/styles/MainStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Landing = ({navigation}) => {

    return (
        <View style={MainStyles.container}>
          <Text style={MainStyles.headerText}>YardSale Pickers</Text>
          <Image source={require('../assets/Images/Maps.png')} style={{ width: 200, height: 200, borderRadius: 100, margin: 5, }}/>
          <TouchableOpacity style={MainStyles.buttonStyle} onPress={ () => navigation.navigate('Login') }>
              <Text style={MainStyles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={MainStyles.buttonStyle} onPress={ () => navigation.navigate('Register') }>
              <Text style={MainStyles.buttonText}>Register</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      );
    }
export default Landing;