import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import HeaderText from '../../components/header-text'
import { useNavigation } from '@react-navigation/native';


import styles from './styles';

export function Salas() {
  const navigation = useNavigation();

  function SalasEspecificas(){
    navigation.navigate("SalasEspecificas")
  }
  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30}}>
        <HeaderText/>
        <Text style={styles.headerText}>Salas</Text>

      </View>

      <View style={styles.pesquisa}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
        />
        <Image style={styles.pesquisaImagem} source={require("../../../assets/Icons/pesquisa.svg")}></Image>
      </View>
      <TouchableOpacity onPress={SalasEspecificas} style={styles.Button}>
        <Text style={styles.textButton}>Salas A</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={SalasEspecificas} style={styles.Button}>
        <Text style={styles.textButton}>Salas D</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={SalasEspecificas} style={styles.Button}>
        <Text style={styles.textButton}>Salas E</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={SalasEspecificas} style={styles.Button}>
        <Text style={styles.textButton}>Salas F</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={SalasEspecificas} style={styles.Button}>
        <Text style={styles.textButton}>Salas G</Text>
      </TouchableOpacity>
      
    </View>
  );
}