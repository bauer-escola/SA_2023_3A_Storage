import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import WebView from 'react-native-webview';
import HeaderText from '../../components/header-text';
import axios from 'axios';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

export function CategoriaEspecifica() {
  const navigation = useNavigation();
  const route = useRoute();
  const [nomeCategoria, setNomeCategoria] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [categoria, setCategoria] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:8090/categorias')
        .then((response) => response.json())
        .then((data) => {
            setCategoria(data);
        })
        .catch((error) => {
            console.error('Erro ao buscar as categorias:', error);
        });
}, []);

  useEffect(() => {
    axios.get('http://localhost:8090/produtos')  // Altere a URL para a API do React Native
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os Produtos:', error);
      });
  }, []);

  useEffect(() => {
    console.log('ID da Categoria:', route.params.categoriaId);
    console.log('Nome da Categoria:', route.params.nomeCategoria);
    console.log('Categoria:', categoria);
    

    setNomeCategoria(route.params.nomeCategoria);
  }, [categoria]);

  const filteredCategorias = categoria.filter(item=> item.id_categoria === parseInt(route.params.categoriaId, 10));
  const filteredProdutos = produtos.filter(item => parseInt(item.categoria, 10) === parseInt(route.params.categoriaId, 10));


  console.log("filteredCategorias: " + filteredCategorias)
  console.log("filteredProdutos: " + filteredProdutos)


  
  function Product(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30}}>
        <HeaderText/>
        <Text>
        <h1 style={{color: '#fff'}}>{nomeCategoria}</h1>
      </Text>
      </View>

      <View style={styles.pesquisa}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
        />
        <Image style={styles.pesquisaImagem} source={require("../../../assets/Icons/pesquisa.svg")}></Image>
      </View>
      <ScrollView style={{ marginBottom: 30 }}>
        {filteredCategorias.map((categoria, indexCategoria) => (
          <div key={indexCategoria}>
            {filteredProdutos.map((produto, index) => (
              <TouchableOpacity
              onPress={() => navigation.navigate("Product", {
                categoriaNome: categoria.nome_categoria,
                produtoCodigo: produto.codigo_produto,
                comentarioProduto: produto.comentario_produto,
                estadoProduto: produto.estado_produto,
                sala: produto.sala,
                categoria: produto.categoria
              })}
              style={styles.Button}
              key={index}
            >
              <Text style={styles.textButton}>{`${categoria.nome_categoria} ${produto.codigo_produto}`}</Text>
            </TouchableOpacity>
            ))}

          </div>
        ))}
      </ScrollView>
      
    </View>
  );
}