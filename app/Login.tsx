import ButtonPrincipal from "@/components/ButtonPrincipal/ButtonPrincipal";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import React from "react";
import { Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


const Login = () => {
    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [isChecked, setChecked] = React.useState(false);

    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#fff' }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>

                    <View style={{ width: '100%', paddingHorizontal: 16, paddingVertical: 50, flex: 1, gap: 30 }}>
                        <View>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="ejemplo@ejemplo.com"
                                placeholderTextColor="#888"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>Contraseña</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="********"
                                placeholderTextColor="#888"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                <Checkbox style={styles.checkbox} color={'black'} value={isChecked} onValueChange={setChecked} />
                                <Text style={{ fontFamily: 'SatoshiMedium', fontSize: 14 }}>Recordarme</Text>
                            </View>
                            <Pressable onPress={() => router.push('/ForgotPassword')}>
                                <Text style={{ fontFamily: 'SatoshiMedium', fontSize: 14 }}>¿Olvidaste la contraseña?</Text>
                            </Pressable>
                        </View>

                    </View>

                    <ButtonPrincipal
                        onPress={() => router.push('/CrearCuenta')}
                        titulo='Iniciar sesión'

                        tituloDos='Continuar con Google'
                        onPressDos={() => { }}
                        iconoDos={<Ionicons name="logo-google" size={24} color="black" />}

                        preguntaTres="¿Aún no tenés tu cuenta?"
                        tituloTres="Crear cuenta"
                        onPressTres={() => router.push('/welcome')}
                        conBorde={true}
                    />

                </View>
            </ScrollView>

            </TouchableWithoutFeedback>
        </SafeAreaProvider>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    checkbox: {
        borderRadius: 4,
        borderColor: 'black',
        borderWidth: 1,
        width: 15,
        height: 15,
    },
    containerTitulo: {
        width: '100%',
        backgroundColor: '#F7F7F7',
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
        alignItems: 'center',
        flex: 1,
    },
    titulo: {
        fontSize: 24,
        fontFamily: 'SatoshiBold',
        textAlign: 'center',
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


export default Login;