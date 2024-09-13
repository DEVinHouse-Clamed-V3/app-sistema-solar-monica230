import { View, Image, Text, StatusBar, StyleSheet, SafeAreaView } from "react-native"


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
  }



})