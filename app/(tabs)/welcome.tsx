import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Characters from '../../assets/images/welcome.png';


const Welcome = () => {
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
                    <Pressable style={styles.button}>
                        <Text style={styles.textoButton}>Crear cuenta con Email</Text>
                    </Pressable>
                    <Pressable style={styles.buttonGoogle}>
                        <Text style={styles.textoButtonGoogle}>Crear cuenta con Google</Text>
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
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 50,
        width: '100%',
    },
    buttonGoogle: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
    },
    textoButton: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
    },
    textoButtonGoogle: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
    }
});

export default Welcome;

