import { View, Image, Text, StatusBar, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import { planetas } from "./planetas.js"
import Planeta from "./listplaneta.js"


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
          Vamos Explorar!
        </Text>
        <Image style={
          styles.img
        } source={require("./assets/imgastro.jpg")} />
      </View>

      <ScrollView >
        {/*     
        {planetas.map((item) => (
          <View style={styles.card}>
            <View style={
              styles.areatitulo
            }>
              <Text style={styles.titulo}>
                {item.nome}
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
                  {item.velocidadeOrbitalMediaKm} km/s
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
                  {item.quantidadeSatelites}
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
                  {item.areaSuperficieKm2} km2
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
                  {item.periodoRotacaoDias}
                </Text>
              </View>

            </View> 
            

            

          </View>


        ))}

*/}
        {planetas.map((item) => (

          <Planeta item={
            planetas
          } key={item.nome} />))}

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
    color:"#fff",
    fontSize: 18,
  
    Color: "#fff",
  },
  img: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  top: {
    backgroundColor: "#1F2B45",
    flex: 1,

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
  descricao: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  elementos: {
    color: "#bababa",
  },
  texts: {
    color: "#fff",
  }









})