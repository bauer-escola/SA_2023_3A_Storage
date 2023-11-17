import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

import HeaderText from '../../components/header-text'

import styles from './styles';

import { useNavigation } from '@react-navigation/native';


export function Sala() {
  const navigation = useNavigation();

  function CategoriaEspecifica(){
    navigation.navigate("CategoriaEspecifica")
  }

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30}}>
        <HeaderText/>
        <Text style={styles.headerText}>Sala E11</Text>

      </View>

      <View style={styles.pesquisa}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
        />
        <Image style={styles.pesquisaImagem} source={require("../../../assets/Icons/pesquisa.svg")}></Image>
      </View>
      <ScrollView style={{marginBottom: 30,}}>
        <TouchableOpacity onPress={CategoriaEspecifica} style={styles.Button}>
          <Text style={styles.textButton}>Teclados</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={CategoriaEspecifica} style={styles.Button}>
          <Text style={styles.textButton}>Monitores</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={CategoriaEspecifica} style={styles.Button}>
          <Text style={styles.textButton}>Mouses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={CategoriaEspecifica} style={styles.Button}>
          <Text style={styles.textButton}>Mouses Pads</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={CategoriaEspecifica} style={styles.Button}>
          <Text style={styles.textButton}>Roteadores</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={CategoriaEspecifica} style={styles.Button}>
          <Text style={styles.textButton}>Cadeiras</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={CategoriaEspecifica} style={styles.Button}>
          <Text style={styles.textButton}>Mesas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={CategoriaEspecifica} style={styles.Button}>
          <Text style={styles.textButton}>Cameras</Text>
        </TouchableOpacity>

      </ScrollView>
      
    </View>
  );
}