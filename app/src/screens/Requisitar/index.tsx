import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import HeaderText from '../../components/header-text'
import styles from './styles';

export function Requisitar() {
  const navigation = useNavigation();
  const [selectedAtividade, setSelectedAtividade] = useState('Atividade (ex: Professor)');
  const [selectedCategoria, setSelectedCategoria] = useState('Categoria do Item');
  const [selectedSala, setSelectedSala] = useState('Sala');


  const categoria = [
    { label: 'Monitor', value: 'Monitor' },
    { label: 'Teclado', value: 'Professor' },
    { label: 'ChromeBook', value: 'Funcionário' },
    { label: 'Mouse', value: 'Gerencia' },
    { label: 'MousePad', value: 'Secretaria' },
    { label: 'Roteador', value: 'Coordenação' },
  ];

  const sala = [
    { label: 'A11', value: 'A11' },
    { label: 'D11', value: 'D11' },
    { label: 'D12', value: 'D12' },
    { label: 'D21', value: 'D21' },
    { label: 'D22', value: 'D22' },
    { label: 'E11', value: 'E11' },
    { label: 'E12', value: 'E12' },
    { label: 'E13', value: 'E13' },
    { label: 'F11', value: 'F11' },
    { label: 'F12', value: 'F12' },
    { label: 'F13', value: 'F13' },
    { label: 'F21', value: 'F21' },
    { label: 'F22', value: 'F22' },
    { label: 'F23', value: 'F23' },
    { label: 'F25', value: 'F25' },
    { label: 'G12', value: 'G12' },
    { label: 'G22', value: 'G22' },
  ];

  const atividades = [
    { label: 'Aluno', value: 'Aluno' },
    { label: 'Professor', value: 'Professor' },
    { label: 'Funcionário', value: 'Funcionário' },
    { label: 'Gerencia', value: 'Gerencia' },
    { label: 'Secretaria', value: 'Secretaria' },
    { label: 'Coordenação', value: 'Coordenação' },
  ];

  function EmFalta() {
    navigation.navigate("EmFalta");
  }

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
          style={styles.Button}
          placeholder="Nome Completo:"
        />

        <Picker
        style={styles.Button}
          selectedValue={selectedAtividade}
          onValueChange={(itemValue: string) => setSelectedAtividade(itemValue)}
        >
          {atividades.map((atividade, index) => (
            <Picker.Item key={index} label={atividade.label} value={atividade.value} />
          ))}
        </Picker>

        <Picker
        style={styles.Button}
          selectedValue={selectedCategoria}
          onValueChange={(itemValue: string) => setSelectedCategoria(itemValue)}
        >
          {categoria.map((categoria, index) => (
            <Picker.Item key={index} label={categoria.label} value={categoria.value} />
          ))}
        </Picker>

        <Picker
        style={styles.Button}
          selectedValue={selectedSala}
          onValueChange={(itemValue: string) => setSelectedSala(itemValue)}
        >
          {sala.map((sala, index) => (
            <Picker.Item key={index} label={sala.label} value={sala.value} />
          ))}
        </Picker>

        <TextInput
          style={styles.Button}
          placeholder="Observação:"
        />

        
          <TouchableOpacity onPress={EmFalta} style={{ backgroundColor: '#40DD67', paddingHorizontal: 30, paddingVertical: 15, marginTop: 20, marginBottom: 20, borderRadius: 10,  marginHorizontal: 50, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>
              Pedido de Requisito
            </Text>
          </TouchableOpacity>

      </ScrollView>
    </View>
  );
}