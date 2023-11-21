import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './styles';

export function SignUp() {

  const [nomeInput, setNomeInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');

  const navigation = useNavigation();

  function Login() {
    navigation.navigate("Login")
  }

  const handleSubmit = async () => {
    try {
      let novoUsuario = {
        nome_usuario: nomeInput,
        email_usuario: emailInput,
        senha_usuario: senhaInput,
      };
      if
        (nomeInput != null
        && emailInput != null
        && senhaInput != null
        && senhaInput.length > 0) {
        alert(`Usuário ${nomeInput} cadastrado com sucesso!`);
        await axios.post('http://localhost:8090/usuario', novoUsuario);
        console.log('Cadastro realizado com sucesso!');
        setNomeInput('');
        setEmailInput('');
        setSenhaInput('');
      }
    } catch (error) {
      console.error('Erro ao criar o cadastro:', error);
    };
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/Icons/Logo.svg")}></Image>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder='Nome de Usuário'
          placeholderTextColor={"#FFF"}
          value={nomeInput}
          onChange={(e) => setNomeInput(e.target.value)}
          required
        ></TextInput>
        <Image style={styles.svg} source={require("../../../assets/Icons/User.svg")}></Image>
      </View>
      <View style={{ ...styles.inputView, marginTop: 23 }}>
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          placeholderTextColor={"#FFF"}
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          required
        ></TextInput>
        <Image style={styles.svg} source={require("../../../assets/Icons/User.svg")}></Image>
      </View>
      <View style={{ ...styles.inputView, marginTop: 23 }}>
        <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor={"#FFF"}
          secureTextEntry={true}
          value={senhaInput}
          onChange={(e) => setSenhaInput(e.target.value)}
          required
        ></TextInput>
        <Image style={styles.svg} source={require("../../../assets/Icons/Cadeado.svg")}></Image>
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
        <Text style={styles.textBtn}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Login}>
        <Text style={{ ...styles.text, width: 232, marginTop: 5, fontSize: 14, marginBottom: 20 }}>Já tem uma conta? Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}