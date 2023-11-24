import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Picker } from 'react-native';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import Modal from "react-native-modal";
import axios from 'axios'


import HeaderText from '../../components/header-text'
import styles from './styles';

export function Requisitar() {
 

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30 }}>
        <HeaderText />
        <Text style={styles.headerText}>Requisitar</Text>
      </View>

      <Text style={{ fontWeight: 'bold', fontSize: 23, color: '#fff', marginTop: 80, marginLeft: 50, marginRight: 50, }}>
        Registre as informações sobre o item desejado.
      </Text>

      <ScrollView style={{ marginBottom: 30 }}>
      <TextInput
          style={[styles.Button]}
          placeholder="Nome:"
          value={nomeInput}
          onChangeText={(text) => setNomeInput(text)}
        />

        <TextInput
          style={[styles.Button]}
          placeholder="Atividade (exemplo: Professor):"
          value={atividadeInput}
          onChangeText={(text) => setAtividadeInput(text)}
        />
        <TextInput
          style={[styles.Button]}
          placeholder="Categoria do objeto:"
          value={categoriaInput}
          onChangeText={(text) => setCategoriaInput(text)}
        />
        <TextInput
          style={[styles.Button]}
          placeholder="Sala requisitada:"
          value={salaInput}
          onChangeText={(text) => setSalaInput(text)}
        />

        <TextInput
          style={[styles.Button]}
          placeholder="Observação:"
          value={observacaoInput}
          onChangeText={(text) => setObservacaoInput(text)}
        />

        
          <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: '#40DD67', paddingHorizontal: 30, paddingVertical: 15, marginTop: 20, marginBottom: 20, borderRadius: 10,  marginHorizontal: 50, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>
              Pedido de Requisito
            </Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
}