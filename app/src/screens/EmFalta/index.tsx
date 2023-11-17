import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

import HeaderText from '../../components/header-text'

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import { ProdutoRequisitado } from '../ProdutoRequisitado';

export function EmFalta() {
  const navigation = useNavigation();

  function ProdutoRequisitado(){
    navigation.navigate("ProdutoRequisitado")
  }

  function Requisitar(){
    navigation.navigate("Requisitar")
  }

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 40, marginLeft: 30}}>
        <HeaderText/>
        <Text style={styles.headerText}>Monitores</Text>

      </View>

      <View style={styles.pesquisa}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
        />
        <Image style={styles.pesquisaImagem} source={require("../../../assets/Icons/pesquisa.svg")}></Image>
      </View>
      <ScrollView style={{marginBottom: 30,}}>
        <TouchableOpacity onPress={ProdutoRequisitado} style={styles.Button}>
          <Text style={styles.textButton}>Teclado - F12</Text>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 20, height: 20, marginRight: 20,}} source={require("../../../assets/Icons/Editar.svg")}></Image>
            <Image style={{width: 20, height: 20}} source={require("../../../assets/Icons/Lixeira.svg")}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={ProdutoRequisitado} style={styles.Button}>
          <Text style={styles.textButton}>Teclado - G22</Text>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 20, height: 20, marginRight: 20,}} source={require("../../../assets/Icons/Editar.svg")}></Image>
            <Image style={{width: 20, height: 20}} source={require("../../../assets/Icons/Lixeira.svg")}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={ProdutoRequisitado} style={styles.Button}>
          <Text style={styles.textButton}>Monitor - F25</Text>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 20, height: 20, marginRight: 20,}} source={require("../../../assets/Icons/Editar.svg")}></Image>
            <Image style={{width: 20, height: 20}} source={require("../../../assets/Icons/Lixeira.svg")}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ProdutoRequisitado} style={styles.Button}>
          <Text style={styles.textButton}>ChroomeBook - E11</Text>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 20, height: 20, marginRight: 20,}} source={require("../../../assets/Icons/Editar.svg")}></Image>
            <Image style={{width: 20, height: 20}} source={require("../../../assets/Icons/Lixeira.svg")}></Image>
          </View>
        </TouchableOpacity>  
      </ScrollView>

      <View style={{position: 'fixed', width: '100%', bottom: 0, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
        <TouchableOpacity onPress={Requisitar} style={{backgroundColor: '#40DD67', paddingHorizontal: 30, paddingVertical: 15, marginTop: 20, marginBottom: 20, borderRadius: 10,}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff'}}>
            Pedido de Requisito
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}