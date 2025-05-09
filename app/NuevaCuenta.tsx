import ButtonPrincipal from "@/components/ButtonPrincipal/ButtonPrincipal";
import { useRouter } from "expo-router";
import React from "react";
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


const NuevaCuenta = () => {
    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repeatPassword, setRepeatPassword] = React.useState('');

    const isFormValid = () => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
        const isLongEnough = password.length >= 8;
        const passwordsMatch = password === repeatPassword;
        const isEmailValid = email.trim().length > 0;
      
        return (
          isEmailValid &&
          hasUppercase &&
          hasNumber &&
          hasSpecialChar &&
          isLongEnough &&
          passwordsMatch
        );
      };


    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#fff' }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>

                        <View style={{ width: '100%', paddingHorizontal: 16, paddingVertical: 20, flex: 1, gap: 30 }}>
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
                            <View style={{ gap: 5, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: '#F7F7F7', borderRadius: 8, }}>
                                <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 14, marginBottom: 10}}>Debe contener al menos:</Text>
                                    <Text style={{fontFamily: 'SatoshiRegular', fontSize: 14 }}>- 1 Letra mayúscula</Text>
                                    <Text style={{fontFamily: 'SatoshiRegular', fontSize: 14 }}>- 8 Caracteres</Text>
                                    <Text style={{fontFamily: 'SatoshiRegular', fontSize: 14 }}>- 1 Número</Text>
                                    <Text style={{fontFamily: 'SatoshiRegular', fontSize: 14 }}>- 1 Caracter especial</Text>
                            </View>
                            <View>
                                <Text style={styles.label}>Repetir contraseña</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="********"
                                    placeholderTextColor="#888"
                                    secureTextEntry
                                    value={repeatPassword}
                                    onChangeText={setRepeatPassword}
                                />
                            </View>
                        </View>
                       

                        <ButtonPrincipal
                            onPress={() => router.push('/CrearCuenta')}
                            titulo='Continuar'
                            disabled={!isFormValid()}
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


export default NuevaCuenta;