import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Characters from '../../assets/images/welcome.png';
import ButtonPrincipal from "../../components/ButtonPrincipal/ButtonPrincipal";


const Welcome = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <View style={{ width: '100%', height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{width: '80%'}} source={Characters} resizeMode="contain" />
                </View>
                <View style={{ width: '100%', gap: 0, }}>
                    <Text style={styles.titulo}>Nombre</Text>
                    <Text style={{ fontSize: 16, textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectur adips</Text>
                </View>
            </View>
            
            <View style={styles.containerButton}>
             <View style={{ gap: 15 }}>
                    
                    <ButtonPrincipal 
                        onPress={() => router.push('/CrearCuenta')}
                        titulo='Crear cuenta con Email'
                        tituloDos='Continuar con Google'
                        onPressDos={() => {}}
                    />
                    
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 20 }}>
                    <Text>¿Ya tenés cuenta?</Text>
                    <Pressable>
                        <Text style={{fontSize: 16, fontWeight: 'bold' }}>Iniciá sesión</Text>
                    </Pressable>
                </View>
            </View>
        </View>
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
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
        alignItems: 'center',
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    containerButton: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        flex: 1,
    },
    titulo: {
        color: 'black',
        fontSize: 40,
        fontFamily: 'ChillaxBold',
        textAlign: 'center',
    },
});

export default Welcome;

