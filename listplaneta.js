import { View, Text, StyleSheet, Image } from "react-native"

export default function Planeta(item) {
    return (


        <View style={styles.card} key={item.nome}>
            <View style={
                styles.areatitulo
            }>
                <Text style={styles.titulo}>
                    {item.nome}
                </Text>
                <Image style={
                    styles.imgcard
                } source={require("./assets/terra.jpg")} />
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
        borderRadius: 50,
        width: 100,
        height: 100,
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
        color:"gray",
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
        color:"#bababa",
    },
    texts:{ color:"#fff",
    }









})