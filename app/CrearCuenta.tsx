import ButtonPrincipal from "@/components/ButtonPrincipal/ButtonPrincipal";
import HeaderImg from "@/components/Header/HeaderImg";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";



const CrearCuenta = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'space-around' }}>
            <HeaderImg />

            <View style={styles.container}>
                <View style={{ flex: 3, width: '100%', paddingHorizontal: 20, paddingVertical: 12, gap: 16 }}>
                    <Text style={{ color: 'black', fontFamily: 'ChillaxSemibold', fontSize: 20, }}>¡Registrá tus emociones!</Text>

                    <Text style={{ color: 'black', fontSize: 16 }}>Tomate un momento para conectar con vos y registrar cómo estás y cómo te sentís a medida que pasan los días.</Text>
                </View>

                <ButtonPrincipal
                    onPress={() => { }}
                    titulo='Continuar'
                    tituloDos='Omitir'
                    onPressDos={() => { }}
                />
                
            </View>
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default CrearCuenta;