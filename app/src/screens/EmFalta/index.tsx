import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderText from '../../components/header-text';
import styles from './styles';

export function EmFalta() {
  const navigation = useNavigation();
  const [requisicao, setRequisicao] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8090/requisitar')
      .then((response) => response.json())
      .then((data) => {
        setRequisicao(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar as requisicao:', error);
      });
  }, []);

  const navigateToRequisicao = (requisitar) => {
    navigation.navigate('ProdutoRequisitado', { id: requisitar.id });
  };

  const deleteRequisicao = (requisitarId) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(`http://localhost:8090/requisitar/${requisitarId}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro ao excluir a requisição: ${response.status}`);
        }
        // Remover a requisição da lista após a exclusão bem-sucedida
        const updatedRequisicao = requisicao.filter((item) => item.id !== requisitarId);
        setRequisicao(updatedRequisicao);
      })
      .catch((error) => {
        console.error('Erro ao excluir a requisição:', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30 }}>
        <HeaderText />
        <Text style={styles.headerText}>Monitores</Text>
      </View>

      <View style={styles.pesquisa}>
        <TextInput style={styles.input} placeholder="Pesquisar" />
        <Image style={styles.pesquisaImagem} source={require('../../../assets/Icons/pesquisa.svg')} />
      </View>

      <ScrollView style={{ marginBottom: 30 }}>
        {requisicao.map((requisitar, index) => (
          <TouchableOpacity key={index} onPress={() => navigateToRequisicao(requisitar)} style={styles.Button}>
            <Text style={styles.textButton}>{`Requisicao de: ${requisitar.nome}`}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image style={{ width: 20, height: 20, marginRight: 20 }} source={require('../../../assets/Icons/Editar.svg')} />
              <TouchableOpacity onPress={() => deleteRequisicao(requisitar.id)}>
                <Image style={{ width: 20, height: 20 }} source={require('../../../assets/Icons/Lixeira.svg')} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{ position: 'fixed', width: '100%', bottom: 0, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Requisitar')} style={{ backgroundColor: '#40DD67', paddingHorizontal: 30, paddingVertical: 15, marginTop: 20, marginBottom: 20, borderRadius: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#fff' }}>Pedido de Requisito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}