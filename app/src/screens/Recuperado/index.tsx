import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import HeaderText from '../../components/header-text'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export function Recuperado() {
  const navigation = useNavigation();

  function Login() {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>

      <View>

        <View style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 50}}>
          <Text style={{fontWeight: 'bold', fontSize: 30, color: '#fff'}}>
            E-Mail enviado!
          </Text>
          <Text style={{ fontSize:  14, color: '#fff', textAlign: 'center'}}>
            Enviamos um Email para s***********@gmail.com para que você redefina a sua senha!         
          </Text> 
          <Text style={{ fontSize:  14, color: '#40DD67', textAlign: 'center' }}>
            Reenviar email
          </Text>
          </View>

        <TouchableOpacity onPress={Login} style={{ backgroundColor: '#40DD67', paddingHorizontal: 20, paddingVertical: 5, marginTop: 20, marginBottom: 20, borderRadius: 10,  marginHorizontal: 50, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>
            Continuar              
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}