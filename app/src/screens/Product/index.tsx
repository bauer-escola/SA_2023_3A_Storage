import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import HeaderText from "../../components/header-text";
import styles from "./styles";

export function Product() {
  const navigation = useNavigation();
  const route = useRoute();

  // Obtenha os parâmetros passados pela navegação
  const {
    categoriaNome,
    produtoCodigo,
    comentarioProduto,
    estadoProduto,
    sala,
    categoria,
  } = route.params;

  console.log("Categoria Nome:", categoriaNome);
  console.log("Produto Código:", produtoCodigo);
  console.log("Comentário do Produto:", comentarioProduto);
  console.log("Estado do Produto:", estadoProduto);
  console.log("Sala:", sala);
  console.log("Categoria:", categoria);
  function Requisitar() {
    navigation.navigate("Requisitar");
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 40,
          marginLeft: 30,
        }}
      >
        <HeaderText />
        <Text style={styles.headerText}>{categoriaNome + produtoCodigo}</Text>
      </View>

      <ScrollView style={{ marginBottom: 30 }}>
        <TextInput
          style={styles.Button}
          placeholder={`Categoria: ${categoriaNome}`}
          editable={false}
        />

        <TextInput
          style={styles.Button}
          placeholder={`ID: ${produtoCodigo}`}
          editable={false}
        />

        <TextInput
          style={styles.Button}
          placeholder={`Localização: ${sala}`}
          editable={false}
        />

        <TextInput
          style={styles.Button}
          placeholder={`Estado: ${estadoProduto}`}
          editable={false}
        />

        <TextInput
          style={styles.Button}
          placeholder={`Observação: ${comentarioProduto}`}
          editable={false}
        />

        {/* <TouchableOpacity
          style={{
            backgroundColor: "#40DD67",
            paddingHorizontal: 30,
            paddingVertical: 15,
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 10,
            marginHorizontal: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
            Enviar
          </Text>
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
}
