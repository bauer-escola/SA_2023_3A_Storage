import React from 'react';
import { View, TextInput, Image, Text } from 'react-native';
import {HeaderLogo} from '../../components/header-logo'
import styles from './styles';

export function User() {
  return (
    <View style={styles.container}>
        <HeaderLogo/>
        <View style={{marginHorizontal: 50, alignItems: 'center', justifyContent: 'center', marginTop: 100,}}>
          <Image style={{width: 150, height: 150, marginBottom: 20,}} source={require("../../../assets/Icons/UserProfile.svg")}></Image>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>Nome do usuário</Text>
          <TextInput
            style={styles.Button}
            placeholder="Email"
          />
          <TextInput
            style={styles.Button}
            placeholder="Telefone"
          />
        </View>
    </View>
  );
}