import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import Modal from "react-native-modal";
import axios from 'axios'


import HeaderText from '../../components/header-text'
import styles from './styles';

export function Requisitar() {
  const navigation = useNavigation();


  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8090/categorias')  // Altere a URL para a API do React Native
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar as categorias:', error);
      });
  }, []);






  const [produto, setProduto] = useState([]);
  const [nomeInput, setNomeInput] = useState("");
  const [atividadeInput, setAtividadeInput] = useState("");
  const [categoriaInput, setCategoriaInput] = useState("");
  const [salaInput, setSalaInput] = useState("");
  const [observacaoInput, setObservacaoInput] = useState("")
  

  // GET
  const fetchProduto = async () => {
    try {
      const response = await axios.get('http://localhost:8090/produtos')
      setProduto(response.data);
    } catch (error) {
      console.log('erro', error)
    }
  };
  
  useEffect(() => {
    fetchProduto()
  }, [])
  
  // POST
  const handleSubmit = async () => {
    try {
    
      let novoProduto = {
        nome: nomeInput,
        atividade: atividadeInput,
        categoria: categoriaInput,
        sala: salaInput,
        observacao: observacaoInput,

      };

      await axios.post('http://localhost:8090/requisitar', novoProduto);
      fetchProduto();
      setNomeInput(''); // Limpa o campo de comentário após o envio
      setAtividadeInput('');
      setCategoriaInput('');
      setSalaInput('');
      setObservacaoInput('');
      setModalVisible(true);      
      navigation.navigate("EmFalta");
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    }
  };


 // react modal
 const [isModalVisible, setModalVisible] = React.useState(false); // Estado para controlar a visibilidade do modal
 function closeModal() {
   setModalVisible(false);
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