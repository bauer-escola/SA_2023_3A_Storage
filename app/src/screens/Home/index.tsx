import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import {HeaderLogo} from '../../components/header-logo'

import styles from './styles';

import { useNavigation } from '@react-navigation/native';



export function Home() {
  const navigation = useNavigation();

  function Salas(){
    navigation.navigate("Salas")
  }

  function Categorias(){
    navigation.navigate("Categorias")
  }

  function EmFalta(){
    navigation.navigate("EmFalta")
  }

  return (
    <View style={styles.container}>
      <HeaderLogo />

      <View style={styles.main}>
        
        <TouchableOpacity onPress={Salas} style={styles.card}>
          <ImageBackground style={styles.image} source={require("../../../assets/img/sala.png")}>
            <View style={styles.blackOpacity}>
              <Text style={styles.cardTitle}>
                Salas de aula
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

         <TouchableOpacity onPress={Categorias} style={styles.card}>
          <ImageBackground style={styles.image} source={require("../../../assets/img/categoria.png")}>
            <View style={styles.blackOpacity}>
              <Text style={styles.cardTitle}>
                Categorias
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={EmFalta} style={styles.card}>
          <ImageBackground style={styles.image} source={require("../../../assets/img/item.png")}>
            <View style={styles.blackOpacity}>
              <Text style={styles.cardTitle}>
                Itens em Falta
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
}