

import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

import HeaderText from '../../components/header-text'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import LetraSala from '../../components/Salas/LetraSalas' // Alterei o nome da importação

export function Salas() {
  const navigation = useNavigation();

  function SalasEspecificas() {
    navigation.navigate("SalasEspecificas");
  }

  const letrasSalas = LetraSala();

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30 }}>
        <HeaderText />
        <Text style={styles.headerText}>Salas</Text>
      </View>

      <View style={styles.pesquisa}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
        />
        <Image style={styles.pesquisaImagem} source={require("../../../assets/Icons/pesquisa.svg")} />
      </View>

      <ScrollView>
        {letrasSalas.map((letra) => (
          <TouchableOpacity
            key={letra.id_letrasalas}
            onPress={() => navigation.navigate('SalasEspecificas', { nome_letrasalas: letra.nome_letrasalas })}
           style={styles.Button}
          >
            <Text style={{ color: 'white' }}>{`Salas ${letra.nome_letrasalas}`}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
