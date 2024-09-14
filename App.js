import { View, Image, Text, StatusBar, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import { planetas } from "./planetas.js"

export default function App() {
  return (
    <SafeAreaView style={
      styles.top
    }>
      <StatusBar style="Auto" />

      <View style={
        styles.container
      }>
        <Text style={
          styles.text
        } >
          Vamos Explorar
        </Text>
        <Image style={
          styles.img
        } source={require("./assets/imgastro.jpg")} />
      </View>

      <ScrollView >

        <View style={styles.card}>
          <View style={
            styles.areatitulo
          }>
            <Text style={styles.titulo}>
              Terra
            </Text>
            <Image style={
              styles.imgcard
            } source={require("./assets/imgastro.jpg")} />
          </View>

          <View>
            <View style={
              styles.descricao
            }>
              <Text style={
                styles.elementos
              }>
                Velocidade Orbital Média
              </Text>
              <Text style={
                styles.texts
              } >
                29.79 km/s
              </Text>
            </View>

            <View style={
              styles.descricao
            } >
              <Text style={
                styles.elementos
              }>
                Satélis
              </Text>
              <Text style={
                styles.texts
              }>
                1
              </Text>
            </View>

            <View style={
              styles.descricao
            } >
              <Text style={
                styles.elementos
              }>
                Aréa da superficie
              </Text>
              <Text style={
                styles.texts
              }>
                510.100.000 km2
              </Text>
            </View>

            <View style={
              styles.descricao
            }>
              <Text style={
                styles.elementos
              } >
                Período de Rotação
              </Text>
              <Text style={
                styles.texts
              }>
                1D
              </Text>
            </View>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  },
  img: {
    width: 150,
    height: 120,
  },
  top: {
    flex: 1,
    marginTop: 100,
  },

  card: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 8,
    margin: 30,
  },
  titulo: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  },
  areatitulo: {
    alignItems: "center",
    padding: 20, gap: 30
  },
  imgcard: {
    width: 270,
    height: 270,
  },
  descricao:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  elementos:{
    color:"#bababa",
  },
  texts:{
    color:"#fff",
  }
  
  

  

  



})