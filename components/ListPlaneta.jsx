import { View, Text, StyleSheet, Image } from "react-native"

export default function ListPlaneta({item}) {

    return (
        <View style={styles.card}>
            <View style={ styles.areatitulo }>
                <Text style={styles.tituloCard}>
                    {item.nome}
                </Text>

                <Image 
                style={ styles.imgCard } 
                source={{ uri: item.img }} />
            </View>

            <View  style={ styles.viewDescricao }>
                <View style={ styles.descricao }>
                    <Text style={ styles.elementos }>
                        Velocidade Orbital Média
                    </Text>
                    <Text style={ styles.texts } >
                        {item.velocidadeOrbitalMediaKmS} km/s
                    </Text>
                </View>

                <View style={
                    styles.descricao
                } >
                    <Text style={styles.elementos}>
                        Satélites
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
    card: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        margin: 20,
        borderRadius: 20,
    },
    areatitulo: {
        marginVertical: 20,
    },
    tituloCard: {
        fontSize: 36,
        fontWeight: "bold",
        color: "black",
        marginBottom: 20,
        textAlign: "center",
        color: "#FFF",
    },
    imgCard: {
        width: 200,
        height: 200,
        borderRadius: 20,
    },
    viewDescricao: {
       marginBottom: 40,
    },
    descricao: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
    },
    elementos: {
        color:"#fff",
        fontSize: 14,
    },
    texts: {
        color:"#fff",
        fontSize: 16,
    }

})