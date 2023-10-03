import React from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_100Thin, Poppins_300Light, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins'

import styles from './styles';

export function Login() {

  useFonts({
    Poppins_100Thin, Poppins_300Light, Poppins_500Medium, Poppins_700Bold
  })


  const navigation = useNavigation();
  
  function Login(){
    navigation.navigate("Routes")
  }
  
  function Recuperar(){
    navigation.navigate("Recuperar")
  }
  function SignUp(){
    navigation.navigate("SignUp")
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

        <View style={{...styles.inputView, marginTop: 23}}>
        <TextInput 
        style={styles.input}
        placeholder='Senha'
        placeholderTextColor={"#FFF"}
        ></TextInput> 
        <Image style={styles.svg} source={require("../../../assets/Icons/Cadeado.svg")}></Image>
        </View>

        <TouchableOpacity onPress={Recuperar}>
        <Text style={styles.text}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Login} style={styles.btn}>
          <Text style={styles.textBtn}>Entrar</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={SignUp}>
        <Text style={{...styles.text, width: 232, marginTop: 5, fontSize: 14, marginBottom: 20}}>Não tem uma conta? Clique aqui</Text>
        </TouchableOpacity>
    </View>
  );
}