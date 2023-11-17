import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_100Thin, Poppins_300Light, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import axios from 'axios';
import React, { useState } from 'react';

import styles from './styles';


const logar = async (nomeInput, senhaInput) => {
  try {
    const response = await axios.post('http://localhost:8090/api/login', {
      nome_usuario: nomeInput,
      senha: senhaInput,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export function Login() {

  const [nomeInput, setNomeInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await logar(nomeInput, senhaInput);
      if (response == true) {
        setIsAuthenticated(true);
        navigation.navigate("Routes")
      } else {
        setIsAuthenticated(false);
        console.log("erro ao logar");
      }
    } catch (error) {
      console.log(error);
    }
  }


  useFonts({
    Poppins_100Thin, Poppins_300Light, Poppins_500Medium, Poppins_700Bold
  })




  function Recuperar() {
    navigation.navigate("Recuperar")
  }
  function SignUp() {
    navigation.navigate("SignUp")
  }


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/Icons/Logo.svg")}></Image>

      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          type="text"
          placeholder='Nome de Usuário'
          placeholderTextColor={"#FFF"}
          value={nomeInput}
          onChange={(e) => setNomeInput(e.target.value)}
        ></TextInput>
        <Image style={styles.svg} source={require("../../../assets/Icons/User.svg")}></Image>
      </View>

      <View style={{ ...styles.inputView, marginTop: 23 }}>
        <TextInput
          style={styles.input}
          placeholder='Senha'
          secureTextEntry={true}
          placeholderTextColor={"#FFF"}
          value={senhaInput}
          onChange={(e) => setSenhaInput(e.target.value)}
        ></TextInput>
        <Image style={styles.svg} source={require("../../../assets/Icons/Cadeado.svg")}></Image>
      </View>

      <TouchableOpacity onPress={Recuperar}>
        <Text style={styles.text}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={styles.btn}>
        <Text style={styles.textBtn}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={SignUp}>
        <Text style={{ ...styles.text, width: 232, marginTop: 5, fontSize: 14, marginBottom: 20 }}>Não tem uma conta? Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}