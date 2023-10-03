import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import HeaderText from '../../components/header-text'
import { useNavigation } from '@react-navigation/native';


import styles from './styles';

export function SalasEspecificas() {
  const navigation = useNavigation();

  function Sala(){
    navigation.navigate("Sala")
  }
  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30}}>
        <HeaderText/>
        <Text style={styles.headerText}>Salas E</Text>

      </View>

      <View style={styles.pesquisa}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
        />
        <Image style={styles.pesquisaImagem} source={require("../../../assets/Icons/pesquisa.svg")}></Image>
      </View>
      <TouchableOpacity onPress={Sala} style={styles.Button}>
        <Text style={styles.textButton}>Salas E11</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Sala} style={styles.Button}>
        <Text style={styles.textButton}>Salas E12</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Sala} style={styles.Button}>
        <Text style={styles.textButton}>Salas E13</Text>
      </TouchableOpacity>
     
      
    </View>
  );
}