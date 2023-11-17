import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

import HeaderText from '../../components/header-text'

import styles from './styles';

import { useNavigation } from '@react-navigation/native';


export function ProdutoRequisitado() {
  const navigation = useNavigation();

  function CategoriaEspecifica(){
    navigation.navigate("CategoriaEspecifica")
  }

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30, marginBottom: 50,}}>
        <HeaderText/>
        <Text style={styles.headerText}>Teclado - F12</Text>

      </View>

      <ScrollView style={{marginBottom: 30,}}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#fff', marginLeft: 50, marginBottom: -15}}>Requisição por:</Text>
        <View style={styles.Button}>
          <Text style={styles.textButton}>Kauã Martins</Text>
        </View>
        
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#fff', marginLeft: 50, marginBottom: -15, marginTop: 20,}}>Atividade</Text>
        <View style={styles.Button}>
          <Text style={styles.textButton}>Aluno</Text>
        </View>

        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#fff', marginLeft: 50, marginBottom: -15, marginTop: 20,}}>Categoria</Text>
        <View style={styles.Button}>
          <Text style={styles.textButton}>Teclado</Text>
        </View>

        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#fff', marginLeft: 50, marginBottom: -15, marginTop: 20,}}>Sala</Text>
        <View style={styles.Button}>
          <Text style={styles.textButton}>F12</Text>
        </View>

        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#fff', marginLeft: 50, marginBottom: -15, marginTop: 20,}}>Observação</Text>
        <View style={styles.Comentario}>
          <Text style={styles.textButton}>O Antigo teclado foi estragado por um aluno derramando café, este aluno irá pagar o teclado antigo. O novo precisa estar em perfeito estado para o uso e o mais rapido possivel.</Text>
        </View>

      </ScrollView>
      
    </View>
  );
}