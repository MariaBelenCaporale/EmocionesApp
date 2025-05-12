import ButtonPrincipal from "@/components/ButtonPrincipal/ButtonPrincipal";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Foto from '../assets/images/welcome.png';
import { useUser } from "./Context/UserContext";

const Bienvenida = () => {
    const router = useRouter();
    const { apodo } = useUser();
    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.container}>

                    <View style={{ width: '100%', paddingHorizontal: 16, paddingVertical: 50, flex: 1, gap: 30 }}>
                        <Image source={Foto} />
                        <Text style={{ color: 'black', fontFamily: 'ChillaxSemibold', fontSize: 30, textAlign: 'center'}}>¡Te damos la bienvenida {apodo}!</Text>
                    </View>

                    <ButtonPrincipal
                        onPress={() => router.push('/NuevoEstado')}
                        titulo='Continuar'
                        disabled={false}
                    />

                </View>
        </SafeAreaProvider>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        height: 48,
        borderColor: '#E9E9E9',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontFamily: 'SatoshiRegular',
        fontSize: 16,
        color: '#000',
    },
    label: {
        fontFamily: 'SatoshiRegular',
        fontSize: 14,
        color: 'black',
        paddingBottom: 10,
    },
    scrollContent: {
        flexGrow: 1,
    }
});


export default Bienvenida;