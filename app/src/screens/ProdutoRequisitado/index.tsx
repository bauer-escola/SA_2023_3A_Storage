import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import HeaderText from '../../components/header-text';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

export function ProdutoRequisitado() {
  const navigation = useNavigation();
  const [requisicao, setRequisicao] = useState([]);
  const route = useRoute();

  const { id } = route.params;

  useEffect(() => {
    fetch('http://localhost:8090/requisitar')
      .then((response) => response.json())
      .then((data) => {
        setRequisicao(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar a requisicao:', error);
      });
  }, []);

  const filteredRequisicao = requisicao.find((item) => item.id === parseInt(id, 10));

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30, marginBottom: 50 }}>
        <HeaderText />
        <Text style={styles.headerText}>{`Requisição de: ${filteredRequisicao?.categoria || ''}`}</Text>
      </View>

      <ScrollView style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#fff', marginLeft: 50, marginBottom: -15 }}>Requisição por:</Text>
        <View style={styles.Button}>
          <Text style={styles.textButton}>{filteredRequisicao?.nome || ''}</Text>
        </View>

        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#fff', marginLeft: 50, marginBottom: -15, marginTop: 20 }}>Atividade</Text>
        <View style={styles.Button}>
          <Text style={styles.textButton}>{filteredRequisicao?.atividade || ''}</Text>
        </View>

        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#fff', marginLeft: 50, marginBottom: -15, marginTop: 20 }}>Categoria</Text>
        <View style={styles.Button}>
          <Text style={styles.textButton}>{filteredRequisicao?.categoria || ''}</Text>
        </View>

        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#fff', marginLeft: 50, marginBottom: -15, marginTop: 20 }}>Sala</Text>
        <View style={styles.Button}>
          <Text style={styles.textButton}>{filteredRequisicao?.sala || ''}</Text>
        </View>

        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#fff', marginLeft: 50, marginBottom: -15, marginTop: 20 }}>Observação</Text>
        <View style={styles.Comentario}>
          <Text style={styles.textButton}>{filteredRequisicao?.observacao || ''}</Text>
        </View>
      </ScrollView>
    </View>
  );
}