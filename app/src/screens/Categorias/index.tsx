import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderText from '../../components/header-text';
import styles from './styles';
import axios from 'axios';  // Importe o axios para realizar chamadas HTTP
import { useNavigation } from '@react-navigation/native';


export function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const navigation = useNavigation();


  useEffect(() => {
    axios.get('http://localhost:8090/categorias')  // Altere a URL para a API do React Native
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar as categorias:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30}}>
        <HeaderText/>
        <Text style={styles.headerText}>Categorias</Text>

      </View>

      <View style={styles.pesquisa}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
        />
        <Image style={styles.pesquisaImagem} source={require("../../../assets/Icons/pesquisa.svg")}></Image>
      </View>
      <ScrollView style={{ marginBottom: 30 }}>
        {categorias.map((categoria, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('CategoriaEspecifica', { categoriaId: categoria.id_categoria, nomeCategoria: categoria.nome_categoria })}
            style={styles.Button}
            key={index}
          >
            <Text style={styles.textButton}>{categoria.nome_categoria}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
    </View>
  );
}