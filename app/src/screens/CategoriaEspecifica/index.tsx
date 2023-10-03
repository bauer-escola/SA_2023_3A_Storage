import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

import HeaderText from '../../components/header-text'

import styles from './styles';

import { useNavigation } from '@react-navigation/native';


export function CategoriaEspecifica() {
  const navigation = useNavigation();

  function Product(){
    navigation.navigate("Product")
  }

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30}}>
        <HeaderText/>
        <Text style={styles.headerText}>Monitores</Text>

      </View>

      <View style={styles.pesquisa}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
        />
        <Image style={styles.pesquisaImagem} source={require("../../../assets/Icons/pesquisa.svg")}></Image>
      </View>
      <ScrollView style={{marginBottom: 30,}}>
        <TouchableOpacity onPress={Product} style={styles.Button}>
          <Text style={styles.textButton}>Monitor 001</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Product} style={styles.Button}>
          <Text style={styles.textButton}>Monitor 002</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Product} style={styles.Button}>
          <Text style={styles.textButton}>Monitor 003</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Product} style={styles.Button}>
          <Text style={styles.textButton}>Monitor 004</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Product} style={styles.Button}>
          <Text style={styles.textButton}>Monitor 005</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Product} style={styles.Button}>
          <Text style={styles.textButton}>Monitor 006</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Product} style={styles.Button}>
          <Text style={styles.textButton}>Monitor 007</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Product} style={styles.Button}>
          <Text style={styles.textButton}>Monitor 008</Text>
        </TouchableOpacity>

      </ScrollView>
      
    </View>
  );
}