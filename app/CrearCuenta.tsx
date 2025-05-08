import ButtonPrincipal from "@/components/ButtonPrincipal/ButtonPrincipal";
import { StyleSheet, Text, View } from "react-native";



const CrearCuenta = () => {
    return (
        <View style={styles.container}>

            <View style={{ width: '100%', backgroundColor: 'blue', flex: 2 }}>

            </View>

            <View style={{ flex: 3, width: '100%', paddingHorizontal: 20, paddingVertical: 12, gap: 16 }}>
                <Text style={{ color: 'black', fontFamily: 'ChillaxSemibold', fontSize: 20, }}>¡Registrá tus emociones!</Text>
                
                <Text style={{ color: 'black', fontSize: 16 }}>Tomate un momento para conectar con vos y registrar cómo estás y cómo te sentís a medida que pasan los días.</Text>
            </View>

            <View>
                <ButtonPrincipal 
                    onPress={() => {}}
                    titulo='Continuar'
                    onPressDos={() => {}}   
                    tituloDos='Omitir'
                />
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default CrearCuenta;