import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import HeaderText from '../../components/header-text';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import Salas from '../../components/Salas/Salas';

export function SalasEspecificas() {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedLetter = route.params?.nome_letrasalas || '';

  // Filter rooms based on the selected letter
  const filteredSalas = Salas.filter((sala) => sala.letra_sala === selectedLetter);
  function Sala(nomeSala: string) {
    navigation.navigate('Sala', { nomeSala });
  }
  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30}}>
        <HeaderText/>
        <Text style={styles.headerText}>Salas {route.params?.nome_letrasalas}</Text>

      </View>

      <View style={styles.pesquisa}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
        />
        <Image style={styles.pesquisaImagem} source={require("../../../assets/Icons/pesquisa.svg")}></Image>
      </View>
      {filteredSalas.map((sala) => (
        <TouchableOpacity key={sala.id_sala} onPress={() => Sala(sala.nome_sala)} style={styles.Button}>
          <Text style={styles.textButton}>{sala.nome_sala}</Text>
        </TouchableOpacity>
      ))}
      
    </View>
  );
}