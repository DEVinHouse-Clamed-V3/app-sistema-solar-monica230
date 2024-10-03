import { View, Image, Text, StatusBar, StyleSheet, SafeAreaView, ScrollView, FlatList } from "react-native"
import { planetas } from "./planetas.js"
import ListPlaneta from "./components/ListPlaneta.jsx"


export default function App() {

    return (
        <SafeAreaView style={styles.top}>
            <StatusBar style="Auto" />

            <View style={
                styles.container
            }>
                <Text
                    style={
                        styles.titulo
                    } >
                    Vamos Explorar!
                </Text>

                <Image
                    style={
                        styles.img
                    }
                    source={require("./assets/imgastro.jpg")} />

            </View>

            {/* <ScrollView >
                
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


            }
                {planetas.map((data ) =>       <ListPlaneta item={ data } key={data.nome}/>
                )
            }

            </ScrollView> */}

            <FlatList
                data={planetas}
                keyExtractor={(item) => item.nome}
                renderItem={({ item }) => <ListPlaneta item={item} />}
                showverticalScrollIndicator={false}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        padding: 20,
    },
    titulo: {
        color: "#fff",
        fontSize: 18,
    },
    img: {
        borderRadius: 45,
        width: 90,
        height: 90,
    },
    top: {
        backgroundColor: "#1F2B45",
        flex: 1,

    },
})