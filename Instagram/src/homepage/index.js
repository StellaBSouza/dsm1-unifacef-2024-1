import React from "react"
import { TouchableOpacity, Text, View, TextInput } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Image } from "react-native";
import styles from './styles'

const homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FFF4DD", "#FFE6DD", "#E1EDFF"]}
        locations={[0, 0.2, 0.9,]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.2 }}
        style={styles.gradient}
      />
      <Image source={require("../../assets/seta.png")} style={styles.arrow} />
      <Text style={styles.linguagem}> Português (Brasil)</Text>
      <Image source={require("../../assets/logo_insta.png")} style={styles.logoInstagam} />
      <TextInput style={styles.input} placeholder="Nome de usuário, email ou número" />
      <TextInput style={styles.input} placeholder= "Senha" />
      <TouchableOpacity style={styles.Entrar} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.TextEntrar}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.senhaAlert}> Esqueceu a senha? </Text>
      <TouchableOpacity style={styles.btnCriarConta} onPress={() => navigation.navigate("CriarConta")}>
        <Text style={styles.btnTextCriarConta}> Criar nova conta </Text>
      </TouchableOpacity>
      {/* <Image source={require("../../assets/logo_meta.png")} style={styles.logoMeta} /> */}
      <Text> Stella Barbosa de Souza </Text>
    </View>
  )
}

export default homepage;
