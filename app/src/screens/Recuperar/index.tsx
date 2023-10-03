import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import HeaderText from '../../components/header-text'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export function Recuperar() {
  const navigation = useNavigation();

  function Recuperado() {
    navigation.navigate("Recuperado");
  }
  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30 }}>
        <HeaderText />
        <Text style={styles.headerText}>Recuperar</Text>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 50, marginTop: 200,}}>
        <Text style={{fontWeight: 'bold', fontSize: 30, color: '#fff'}}>
          Esqueceu a senha?
        </Text>
        <Text style={{ fontSize:  14, color: '#fff', textAlign: 'center'}}>
          informe seu e-mail cadastrada no Stock para enviarmos as instruções de redefinição de senha
        </Text>

        <TextInput
          style={styles.Button}
          placeholder="Email:"
        />

        <TouchableOpacity onPress={Recuperado} style={{ backgroundColor: '#40DD67', paddingHorizontal: 30, paddingVertical: 10, marginTop: 20, marginBottom: 20, width: '100%', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>
            Continuar              
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}