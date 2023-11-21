import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderText from '../../components/header-text';
import styles from './styles';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

export function Sala() {
  const [categorias, setCategorias] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const [produtos, setProdutos] = useState([]);
  const [nomeCategoria, setNomeCategoria] = useState([]);

  const selectedSala = route.params?.nomeSala || '';

  useEffect(() => {
    axios.get('http://localhost:8090/categorias')
      .then((response) => {
        setNomeCategoria(response.data);
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar as categorias:', error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8090/produtos")
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os produtos:", error);
      });
  }, []);

  useEffect(() => {
    console.log("produtos:", produtos);
    console.log("nome_categoria:", nomeCategoria);
    console.log("sala:", selectedSala);

  }, [produtos, nomeCategoria, selectedSala]);

  const filteredProdutos = produtos.filter(
    (item) => String(item.sala) === selectedSala
  );

  const CategoriasFiltradas = filteredProdutos.map((produto) => {
    const categoriaEncontrada = nomeCategoria.find(
      (categoria) => categoria.id_categoria === parseInt(produto.categoria, 10)
    );
    return categoriaEncontrada ? categoriaEncontrada.nome_categoria : null;
  });

  console.log("filteredProdutos:", filteredProdutos);
  console.log("CategoriasFiltradas:", CategoriasFiltradas);

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30 }}>
        <HeaderText />
        <Text style={styles.headerText}>Sala {selectedSala}</Text>
      </View>

      <View style={styles.pesquisa}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
        />
        <Image style={styles.pesquisaImagem} source={require("../../../assets/Icons/pesquisa.svg")} />
      </View>

      <ScrollView style={{ marginBottom: 30 }}>
        {filteredProdutos.map((produto, index) => {
          const categoriaFiltrada = CategoriasFiltradas[index];
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('Product', {
                categoriaNome: categoriaFiltrada,
                produtoCodigo: produto.codigo_produto,
                comentarioProduto: produto.comentario_produto,
                estadoProduto: produto.estado_produto,
                sala: produto.sala,
                categoria: produto.categoria
              })}
              style={styles.Button}
            >
              <Text style={styles.textButton}>
                {(categoriaFiltrada ? `${categoriaFiltrada} ` : "") +
                  `${produto.codigo_produto}`}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}