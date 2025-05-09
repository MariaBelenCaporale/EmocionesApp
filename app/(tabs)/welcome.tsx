import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Characters from '../../assets/images/welcome.png';
import ButtonPrincipal from "../../components/ButtonPrincipal/ButtonPrincipal";


const Welcome = () => {
    const router = useRouter();

    return (
        <SafeAreaProvider style={{ flex: 1 }}>

            <View style={styles.container}>
                 <View style={{ width: '100%', paddingHorizontal: 0, paddingVertical: 0, flex: 1, gap: 30 }}>
                    <View style={styles.containerTitulo}>
                    <Image style={{ width: '70%' }} source={Characters} resizeMode="contain" />
                    <Text style={styles.titulo}>Nombre</Text>
                    <Text style={{ fontSize: 16, textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </View>
                </View>



                <ButtonPrincipal
                    onPress={() => router.push('/CrearCuenta')}
                    titulo='Crear cuenta con Email'

                    tituloDos='Continuar con Google'
                    onPressDos={() => { }}
                    iconoDos={<Ionicons name="logo-google" size={24} color="black" />}

                    preguntaTres="¿Ya tenés cuenta?"
                    tituloTres="Iniciá sesión"
                    onPressTres={() => router.push('/Login')}
                    conBorde={true}
                />

            </View>

        </SafeAreaProvider>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 0,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    containerTitulo: {
        width: '100%', 
        backgroundColor: '#F7F7F7', 
        height: 'auto', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    titulo: {
        color: 'black',
        fontSize: 40,
        fontFamily: 'ChillaxBold',
        textAlign: 'center',
    },
});

export default Welcome;

