import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

  export function SignUp() {

  const navigation = useNavigation();
    
  function Login(){
    navigation.navigate("Login")
  }
  function Cadastro(){
    navigation.navigate("Login")
  }
  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/Icons/Logo.svg")}></Image>
      <View style={styles.inputView}>
        <TextInput 
        style={styles.input}
        placeholder='Nome de Usuário'
        placeholderTextColor={"#FFF"}
        ></TextInput> 
        <Image style={styles.svg} source={require("../../../assets/Icons/User.svg")}></Image>
        </View>
        <View  style={{...styles.inputView, marginTop: 23}}>
        <TextInput 
        style={styles.input}
        placeholder='E-mail'
        placeholderTextColor={"#FFF"}
        ></TextInput> 
        <Image style={styles.svg} source={require("../../../assets/Icons/User.svg")}></Image>
        </View>
        <View style={{...styles.inputView, marginTop: 23}}>
        <TextInput 
        style={styles.input}
        placeholder='Senha'
        placeholderTextColor={"#FFF"}
        ></TextInput> 
        <Image style={styles.svg} source={require("../../../assets/Icons/Cadeado.svg")}></Image>
        </View>
      
        <TouchableOpacity onPress={Cadastro} style={styles.btn}>
          <Text style={styles.textBtn}>Cadastrar</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={Login}>
        <Text style={{...styles.text, width: 232, marginTop: 5, fontSize: 14, marginBottom: 20}}>Já tem uma conta? Clique aqui</Text>
        </TouchableOpacity>
    </View>
  );
}