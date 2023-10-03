import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderText from '../../components/header-text'
import styles from './styles';

export function Product() {
  const navigation = useNavigation();

  function Requisitar(){
    navigation.navigate("Requisitar")
  }


  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30 }}>
        <HeaderText />
        <Text style={styles.headerText}>Monitor 001</Text>
      </View>

      <View style={{borderRadius: 10, backgroundColor: '#0C0C0C', marginLeft: 40, marginRight: 40, height: 250, alignItems: 'center', justifyContent: 'center', marginTop: 30, marginBottom: 10,}}>
        <Image style={{width: 100, height: 100}} source={require("../../../assets/Icons/Imagem.svg")}></Image>
      </View>

      <ScrollView style={{ marginBottom: 30 }}>
        <TextInput
          style={styles.Button}
          placeholder="Categoria"
          editable={false}
        />

        <TextInput
          style={styles.Button}
          placeholder="ID"
          editable={false}
        />
        <TextInput
          style={styles.Button}
          placeholder="Localização"
          editable={false}
        />
        <TextInput
          style={styles.Button}
          placeholder="Estado"
          editable={false}
        />
        <TextInput
          style={styles.Button}
          placeholder="Observação"
          editable={false}
        />

        
          <TouchableOpacity style={{ backgroundColor: '#40DD67', paddingHorizontal: 30, paddingVertical: 15, marginTop: 20, marginBottom: 20, borderRadius: 10,  marginHorizontal: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>
              Enviar
            </Text>
          </TouchableOpacity>

      </ScrollView>
    </View>
  );
}