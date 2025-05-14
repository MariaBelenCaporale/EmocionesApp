import Accordion from "@/components/Accordion/Accordion";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const InfoMonedas = () => {
    return (
        <SafeAreaView style={{ paddingHorizontal: 16, gap: 45}}>
            <View style={{ gap: 10, }}>
                <Text style={styles.titulos}>¿Para qué sirven?</Text>
                <Text style={styles.subtitulos}>Las monedas te permiten desbloquear versiones especiales de los personajes que ya tenés. Vas a poder conseguir nuevas versiones con detalles únicos, como accesorios, gestos o estilos distintos.</Text>
            </View>

            <View style={styles.acordion}>
                <View>
                <Text style={{ fontFamily: 'ChillaxSemibold', fontSize: 20, }}>¿Cómo las consigo?</Text>
                <Text style={styles.subtitulos}>Conocé cómo obtener monedas gratis.</Text>
                </View>
                <Accordion />
            </View>


        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    titulos: {
        fontFamily: 'ChillaxSemibold',
        fontSize: 20,
    },
    subtitulos: {
        fontFamily: 'SatoshiMedium',
        fontSize: 16,
        lineHeight: 24,
    },
    acordion: {
        paddingVertical: 12,
        gap: 30,
    },
})

export default InfoMonedas;