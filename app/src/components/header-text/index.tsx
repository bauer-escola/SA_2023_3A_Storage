import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native'; // Hook para navegação.

import styles from './styles';

export default function HeaderText() {
  
  const navigation = useNavigation();

  function voltar() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={voltar}
      style={styles.logo}
      >
      <Feather
            name="arrow-left"
            size={38}
            color="#40DD67"
            style={{marginBottom: 15,}}
          />
      </TouchableOpacity>
    </View>
  );
}